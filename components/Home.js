import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',

    }
})

class Home extends Component {
    render() {
        return (
            <View style={styles.main}>
                <Text>Git Book</Text>
            </View>
        );
    }
}


export default Home;