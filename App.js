import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ToDoApp from './src/ToDoApp';
import store from './src/store';
import { Provider } from 'react-redux';
export default class App extends Component{
  render() {
    return (
      <Provider store = {store}>
        <ToDoApp></ToDoApp>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});