import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

const Book = ({ }) => {
  return (
    <View style={styles.book}>
      <Image style={styles.bookThumb} source={{ uri: GITBOOK_HOST + item.cover.small }} />
      <View style={styles.bookInfo}>
        <Text style={styles.bookTitle}>{item.title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  book: {
    height: listItemHeight,
    padding: listItemPadding,
    flexDirection: 'row',
  },
  bookThumb: {
    width: listItemHeight - 2 * listItemPadding,
    height: listItemHeight - 2 * listItemPadding,
  },
  bookInfo: {
    flex: 1,
    paddingLeft: listItemPadding,
  },
  bookTitle: {
    fontWeight: '700',
    fontSize: 16,
  },
})
export default Book;