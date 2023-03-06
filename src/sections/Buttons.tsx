import React from "react";
import { StyleSheet, Text, View, Image, TouchableHighlight, Pressable, Alert } from "react-native";

export const Buttons = () => {
    return (
        <View style={styles.row}>

            <Pressable
                onPress={() => Alert.alert('Play Button Pressed')}>
                <Image style={styles.image} source={require('../assets/icons/play-icon.png')} />
            </Pressable>

            <Pressable
                onPress={() => Alert.alert('Pause Button Pressed')}>
                <Image style={styles.image} source={require('../assets/icons/pause-icon.png')} />
            </Pressable>

            {/* <Image source={require('/Users/hamid/Documents/Projects/nook_mobile_one/nook_mobile/assets/icons/pause-icon.png')} /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },

    row: {
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
})