import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import AddToDo from './containers/addToDo';
class TodoApp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <AddToDo/>
            </View>
        );
    }
}
export default TodoApp;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});