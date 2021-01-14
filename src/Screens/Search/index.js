import React, {useEffect, useState} from 'react';
import {View, FlatList, ActivityIndicator, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {SearchInput} from '../../Components/FormInputs';
import BookCard from '../../Components/BookCard';
import {COLORS, FONTS} from '../../Configs/constants';
import {GET_BOOKS_BY_SEARCH} from '../../Services';

import {styles} from './styles';

export default function SearchScreen() {
  const navigation = useNavigation();
  const [library, setLibrary] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (search.length > 0) {
      getBooks();
    } else {
      setLibrary([]);
    }
  }, [search]);

  const getBooks = async () => {
    setIsLoading(true);
    try {
      const {data} = await GET_BOOKS_BY_SEARCH({search});
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

  const renderEmpty = () => {
    return (
      <View style={styles.errorMsg}>
        <Text style={styles.textError}>
          {isLoading
            ? ''
            : search.length > 0
            ? 'Sorry... we did not find anything related'
            : 'Please... type something to find awesome books!'}
        </Text>
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <View style={styles.activityIndicator}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.PRIMARY} />
        ) : null}
      </View>
    );
  };

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
      <SearchInput
        style={styles.searchBar}
        placeholder={'Search your favorite book here...'}
        placeholderTextColor={COLORS.WHITE}
        placeholderStyle={styles.placeholder}
        value={search}
        onChangeText={(value) => setSearch(value)}
      />
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
        ListEmptyComponent={renderEmpty}
        ListFooterComponent={renderFooter}
        refreshing={isLoading}
      />
    </View>
  );
}
