import React, { useState } from 'react';
import { StyleSheet, Button, View } from 'react-native';

import Join from './screens/Join';
import Chat from './screens/Chat';
import Header from './components/Header';
import Input from './components/Input';

export default function App() {
  const [userName, setUserName] = useState('');
  const [roomName, setRoomName] = useState('');

  const configChatHandler = (user, room) => {
    if(user === '' || room === '') return;
    setUserName(user);
    setRoomName(room.toLowerCase());
  }

  const clearUser = () => {
    setUserName('');
    setRoomName('');
  }

  let content = <Join onJoin={configChatHandler} />

  if(userName !== '' && roomName !== '') {
    content = <Chat name={userName} room={roomName} onExit={clearUser} />;
  }

  return (
    <View style={styles.container}>
      { content }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center'
  },
});
