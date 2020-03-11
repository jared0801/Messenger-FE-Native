import React from 'react';
import { View, StyleSheet } from 'react-native';

import Message from './Message';

const Messages = ({ messages, name }) => {
    return (
        <View style={styles.messages}>
            {messages.map((message, i) => (
                <View key={i}>
                    <Message message={message} name={name} />
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    messages: {
        paddingVertical: 10,
        minHeight: 100,
        overflow: "scroll",
        flexGrow: 2
    }
});

export default Messages;