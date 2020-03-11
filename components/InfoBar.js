import React from 'react';
import { View, Text, Button, Image, TouchableOpacity, StyleSheet } from 'react-native';

import Colors from '../theme/colors';

const InfoBar = ({ room, onExit, style }) => {
    return (
        <View style={{...styles.infoBar, ...style}}>
            <View style={styles.leftContainer}>
                <Text>Room: { room }</Text>
            </View>
            <View style={styles.rightContainer}>
                <TouchableOpacity onPress={onExit}>
                    <Image style={styles.closeIcon} source={require('../icons/closeIcon.png')} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    infoBar: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.primary,
        height: 60,
        width: "100%",
    },
    leftContainer: {
        flex: 0.5,
        flexDirection: "row",
        alignSelf: "flex-start",
        marginLeft: "5%",
        color: "white"
    },
    rightContainer: {
        flex: 0.5,
        alignSelf: "flex-end",
        justifyContent: "flex-start",
        marginRight: "5%",
    }
});

export default InfoBar;