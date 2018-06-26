import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import List from './src/components/List';

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Header>To-Do List</Header>
        <List />
        <Footer>Delete item</Footer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
