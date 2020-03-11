import React from 'react';
import emoji from 'node-emoji';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';

import Colors from '../theme/colors';

const Message = ({ message: { user, text }, name }) => {
    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();

    if(user === trimmedName) {
        isSentByCurrentUser = true;
    }

    return (
        isSentByCurrentUser
        ? (
            <View style={{...styles.messageContainer, ...styles.justifyEnd}}>
                <Text style={styles.sentText}>{trimmedName}</Text>
                <View style={{...styles.messageBox, ...styles.backgroundBlue}}>
                <Text style={styles.messageText}>{emoji.emojify(text)}</Text>
                </View>
            </View>
        )
        : (
            <View style={{...styles.messageContainer, ...styles.justifyStart}}>
                <View style={styles.messageBox}>
                    <Text style={styles.messageText}>{emoji.emojify(text)}</Text>
                </View>
                <Text style={styles.sentText}>{user}</Text>
            </View>
        )
    )
}

const styles = StyleSheet.create({
    messageBox: {
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 20,
        backgroundColor: "#F3F3F3",
        color: "white",
        maxWidth: "80%"
    },
    messageText: {
        width: "100%",
        letterSpacing: 0,
        textAlign: "left",
        fontSize: 18,
        flexShrink: 1
    },
    messageContainer: {
        display: "flex",
        justifyContent: "flex-end",
        paddingVertical: 0,
        paddingHorizontal: "5%",
        marginTop: 3,
    },
    sentText: {
        display: "flex",
        alignItems: "center",
        color: "#828282",
        letterSpacing: 0.3
    },
    justifyEnd: {
        alignSelf: "flex-end"
    },
    justifyStart: {
        alignSelf: "flex-start"
    },
    backgroundBlue: {
        backgroundColor: Colors.secondary
    }
});

export default Message;