import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  Text,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SearchInput} from '../../Components/FormInputs';
import BookCard from '../../Components/BookCard';
import {COLORS, FONTS} from '../../Configs/constants';
import {GET_BOOKS} from '../../Services';

export default function LibraryScreen(props) {
  const navigation = useNavigation();
  const [library, setLibrary] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [textSearch, setTextSearch] = useState('');

  useEffect(() => {
    getBooks();
  }, [textSearch]);

  const getBooks = async () => {
    try {
      const {data} = await GET_BOOKS({textSearch});
      console.log('GET_BOOKS DATA: ', data);
      setLibrary(data);
      setIsLoading(false);
    } catch (error) {
      console.log('GET_BOOKS ERROR: ', error);
      setError(error);
      setIsLoading(false);
      throw error;
    }
  };

  if (isLoading) {
    return (
      <View style={styles.activityIndicator}>
        <ActivityIndicator size="large" color={COLORS.PRIMARY} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorMsg}>
        <Text style={styles.textError}>
          Error fetching data... Check your network connection!
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={library}
        renderItem={({item}) => (
          <BookCard
            title={item.title}
            image={item.image_url}
            author={item.author}
            onPress={() => navigation.navigate('BookDetail', {book: item})}
          />
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '4%',
    marginTop: 50,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
  },
  errorMsg: {
    flex: 1,
    justifyContent: 'center',
  },
  textError: {
    color: COLORS.TEXT,
    fontSize: FONTS.SIZE.REGULAR,
    fontFamily: 'Monserrat-Regular',
    padding: 30,
  },
});
