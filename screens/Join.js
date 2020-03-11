import React, { useState } from 'react';
import { Button, TextInput, Text, View, StyleSheet } from 'react-native';

import Header from '../components/Header';

const Join = props => {
    const [userName, setUserName] = useState('');
    const [roomName, setRoomName] = useState('');

    return (
        <View style={styles.container}>
            <Header title="Join" />
            <View style={styles.innerContainer}>
                <View>
                    <Text>Name: </Text>
                    <TextInput value={userName} onChangeText={text => setUserName(text)} style={styles.input} />
                    
                    <Text>Room: </Text>
                    <TextInput value={roomName} onChangeText={text => setRoomName(text)} style={styles.input} />
                </View>

                <View>
                    <View style={styles.button}><Button title="Sign In" onPress={() => props.onJoin(userName, roomName)} /></View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        alignItems: "center",
    },
    innerContainer: {
        justifyContent: "flex-start",
        marginTop: "10%",
        width: 300,
        maxWidth: '80%',
        flexGrow: 2
    },
    input: {
        height: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10,
        textAlign: 'center'
    },
    button: {
        width: 100,
        overflow: "hidden",
        alignSelf: "center"
    }
});

export default Join;