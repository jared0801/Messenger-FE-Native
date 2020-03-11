import React from 'react';
import { TextInput, View, Button, StyleSheet } from 'react-native';

const Input = ({ message, setMessage, sendMessage, style }) => {
    return (
        <View style={styles.container}>
            <TextInput
            style={{...styles.input, ...style}}
            placeholder="Type a message..."
            value={message}
            onChangeText={text => setMessage(text)}
            />

            <View><Button title="Send" onPress={sendMessage} /></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderTopColor: "#D3D3D3",
        borderTopWidth: 2
    },
    input: {
        height: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10
    }
});

export default Input;