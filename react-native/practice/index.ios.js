/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class practice extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instruction}>
          <Icon name="edit" size={20} color="#666" /> テキストを入力しましょう
        </Text>
        <View>
          <TextInput style={styles.textform} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  instruction: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  textform: {
    margin: 20,
    padding: 10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 3,
    backgroundColor: 'white',
  },
});

AppRegistry.registerComponent('practice', () => practice);
