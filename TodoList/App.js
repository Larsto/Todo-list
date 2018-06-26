import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import List from './src/components/List';
import Input from './src/components/Input';
import { connect } from 'react-redux';
import { actionCreators } from './src/components/todoListRedux';

const mapStateToProps = (state) => ({
  items: state.items,
})

class App extends Component<Props> {

  addItem = (text) => {
    const {dispatch} = this.props
    dispatch(actionCreators.addItem(text))
  }

  removeItem = (index) => {
  const {dispatch} = this.props
  dispatch(actionCreators.removeItem(index))
}

  render() {
    const {items} = this.props

    return (
      <View style={styles.container}>
        <Header>To-Do List</Header>
        <Input
        placeholder='Type a todo!'
        onSubmitEditing={this.addItem}
        />
        <List
          list={items}
          onPressItem={this.removeItem}
        />
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

export default connect(mapStateToProps)(App)
