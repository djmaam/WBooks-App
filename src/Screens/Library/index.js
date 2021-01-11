import React, {useEffect, useState} from 'react';
import {View, FlatList, ActivityIndicator, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import BookCard from '../../Components/BookCard';
import {COLORS} from '../../Configs/constants';
import {GET_BOOKS} from '../../Services';

import {styles} from './styles';

export default function LibraryScreen(props) {
  const navigation = useNavigation();
  const [library, setLibrary] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    try {
      const {data} = await GET_BOOKS();
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
