import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput} from "react-native";
class TodoApp extends Component {
    render() {
        return (
            <View style={styles.addInputView}>
                <Text>Test</Text>
                <TextInput/>  
            </View>
        );
    }
}
export default TodoApp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    addInputView: {
        flexDirection:'row'
    }
});