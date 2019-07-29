import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input, Button } from 'react-native-elements';

export default class App extends Component {
  state = {
    username: '',
    password:'',
    loginDetails:{}
  }

  inputChangeHandler = (value,type) => {
    if(type == 1) {
      this.setState({username:value});
    } else {
      this.setState({password:value});
    }
    
  }

  loginAction = () => {
    this.state.loginDetails.username = this.state.username;
    this.state.loginDetails.password = this.state.password;
    console.log(this.state.loginDetails);
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>Username</Text>
        <Input 
          value = {this.state.username}
          name = 'username'
          onChangeText = {(value) => this.inputChangeHandler(value,1)}
        />
        <Text>Password</Text>
        <Input 
          value = {this.state.password}
          name = 'password'
          onChangeText = {(value) => this.inputChangeHandler(value,2)}
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
