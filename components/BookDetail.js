import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, Image, Button } from 'react-native';

import { GITBOOK_HOST } from '../constants';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 20,
  },
  cover: {
    width: '80%',
    height: 300,
    marginLeft: '10%',
  },
  bookTitle: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 40,
    marginTop: 10,
    color: '#666',
  },
  bookAuthor: {
    textAlign: 'center',
    fontSize: 14,
    color: '#AAA',
  },
  description: {
    color: '#666',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 40,
  }
})

const BookDetail = (props) => {
  const { params: item } = props.navigation.state;
  const { navigate } = props.navigation;
  return (
    <ScrollView style={styles.main}>
      <Image
        style={styles.cover}
        resizeMode={"contain"}
        source={{ uri: GITBOOK_HOST + item.cover.large }}
      />
      <Text style={styles.bookTitle}>{item.title}</Text>
      <Text style={styles.bookAuthor}>{item.author.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Button
        title="read this book"
        onPress={() => navigate('ReadBook', item)}
      />
    </ScrollView>
  );
};

export default BookDetail;