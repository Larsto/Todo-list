import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default class Footer extends Component {

  render() {
    const {children} = this.props

    return (
      <TouchableOpacity style={styles.header}>
        <Text style={styles.title}>{children}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    padding: 15,
  },
  title: {
    textAlign: 'center',
    color: 'red',
  },
})
