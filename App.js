import React from 'react';
import axios from 'axios';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { View, TabBarIOS, Text, StyleSheet, Button } from 'react-native';

import Books from './components/Books';
import Home from './components/Home';
import BookDetail from './components/BookDetail';
import ReadBook from './components/ReadBook';
import { GITBOOK_HOST, URL_BOOK_ALL } from './constants';

export default StackNavigator({
  Home: {
    screen: TabNavigator({
      Home: { screen: Home },
      Books: { screen: Books },
    }, { lazy: true }),
    navigationOptions: {
      title: 'Gitbook'
    }
  },
  BookDetail: { screen: BookDetail, navigationOptions: { title: 'Detail' } },
  ReadBook: {screen: ReadBook }
});
