import React from 'react';
import axios from 'axios';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { View, TabBarIOS, Text, StyleSheet, Button } from 'react-native';

import Books from './components/Books';
import { GITBOOK_HOST, URL_BOOK_ALL } from './constants';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 'Books',
    }
  }


  handleTabChange = (tab) => {
    this.setState({ currentTab: tab });
  }

  render() {
    return (
      <View>
        <Text>Hello</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
})

const Home = StackNavigator({
  Home: { screen: App, navigationOptions: { title: 'Git book' } }
})

export default TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home'
    }
  },
  Books: {
    screen: Books,
    navigationOptions: {
      title: 'Books'
    }
  },
}, {
  lazy: true,
});
