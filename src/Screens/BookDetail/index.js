import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {GET_BOOKS_BY_GENRE} from '../../Services';
import BookCardDetails from '../../Components/BookCardDetails';
import BooksByGenre from '../../Components/BooksByGenre';

export default function BookDetailScreen(props) {
  const navigation = useNavigation();
  const [libraryByGenre, setLibraryByGenre] = useState();
  const focusBook = props.route.params.book;
  const genre = focusBook.genre;

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    try {
      const {data} = await GET_BOOKS_BY_GENRE({genre});
      console.log('GET_BOOKS DATA: ', data);
      setLibraryByGenre(data);
    } catch (error) {
      console.log('GET_BOOKS ERROR: ', error);
      throw error;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <BookCardDetails focusBook={focusBook} />
      <FlatList
        style={styles.list}
        horizontal
        data={libraryByGenre}
        renderItem={({item}) => (
          <BooksByGenre
            title={item.title}
            image={item.image_url}
            author={item.author}
            onPress={() => navigation.navigate('BookDetail', {book: item})}
          />
        )}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 60,
  },
});
