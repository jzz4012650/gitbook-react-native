import React from 'react';
import axios from 'axios';
import { StackNavigator } from 'react-navigation';
import { StyleSheet, Text, View, FlatList, Image, Alert, ActivityIndicator } from 'react-native';

import Book from './Book';
import Separator from './Separator';
import { GITBOOK_HOST, URL_BOOK_ALL } from '../constants';

class Books extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      books: [],
      page: 1,
    }
  }

  componentDidMount() {
    this.getBooks(this.state.page).then(data => {
      this.setState({
        books: data.list,
      });
    })
  }

  getBooks = (page) => {
    this.setState({ loading: true });
    return axios.get(URL_BOOK_ALL, { page: page || 1 })
      .then(res => {
        this.setState({ loading: false })
        return Promise.resolve(res.data);
      })
      .catch(err => {
        this.setState({ loading: false })
        Alert.alert('Network error!', err.msg, [{ text: 'OK' }])
      })
  }

  renderBook = (obj) => {
    const item = obj.item;
    const {navigate} = this.props.navigation;
    return <Book item={item} navigate={navigate} />
  }

  renderSeparator = () => {
    return <Separator />
  }

  handleLoadMore = () => {
    const newPage = this.state.page + 1;
    if (this.state.loading) {
      return;
    }
    this.getBooks(newPage).then(data => {
      this.setState({
        books: this.state.books.concat(data.list),
        page: newPage,
      })
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          refreshing={this.state.loading}
          style={styles.list}
          data={this.state.books}
          renderItem={this.renderBook}
          keyExtractor={(d, i) => i}
          ListFooterComponent={this.state.loading ? <ActivityIndicator style={styles.loading}/> : null}
          ItemSeparatorComponent={this.renderSeparator}
          onEndReached={this.handleLoadMore}
        />
      </View>
    )
  }
}

const listItemHeight = 100;
const listItemPadding = 5;
const styles = StyleSheet.create({
  loading: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
    flex: 1,
  },
  loading: {
    marginTop: 10,
    marginBottom: 10,
  },
});


export default Books;