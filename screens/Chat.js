import React, { useState, useEffect } from 'react';
import { View, Text, TouchableWithoutFeedback, Keyboard,  StyleSheet } from 'react-native';
import { SERVER_PATH } from '../.env.json';
import io from 'socket.io-client';

import Header from '../components/Header';
import InfoBar from '../components/InfoBar';
import Messages from '../components/Messages';
import Input from '../components/Input';

let socket;

const Chat = props => {
    const ENDPOINT = SERVER_PATH;
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const { name, room } = props;
        socket = io(ENDPOINT);

        socket.emit('join', { name, room }, () => { });

        return () => {
            socket.emit('disconnect');

            socket.off();
        }

    }, []);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        })

        socket.on('roomData', ({ users }) => {
            setUsers(users);
        });

        return () => {
            socket.emit('disconnect');
            socket.off();
        }
    }, [messages]);

    const sendMessage = () => {
        console.log("sending...");

        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }


    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.container}>
                <Header title="Chat" />
                <View style={styles.innerContainer}>
                    <InfoBar style={styles.infobar} room={props.room} onExit={props.onExit} />                    

                    <Messages messages={messages} name={props.name} />

                    <Input style={styles.input} message={message} setMessage={setMessage} sendMessage={sendMessage} />
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center",
        height: "100%",
    },
    innerContainer: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        flexGrow: 2,
        width: "100%",
    },
    button: {
        width: 150
    },
    infobar: {
        
    }
});

export default Chat;