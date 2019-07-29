import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input, Button } from 'react-native-elements';

export default class App extends Component {
  state = {
    username: '',
    password:''
  }

  inputChangeHandler = (value) => {
    this.setState({username:value});
  }

  loginAction = () => {
    console.log(this.state.username);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Username</Text>
        <Input 
          value = {this.state.username}
          onChangeText = {this.inputChangeHandler}
        />
        <Text>Password</Text>
        <Input 
          value = {this.state.password}
          onChangeText = {this.inputChangeHandler}
        />
        <Button
          title = 'Login'
          onPress = {this.loginAction}
        />
      </View>
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
