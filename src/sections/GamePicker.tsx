import React from "react";
import RNPickerSelect from 'react-native-picker-select';
import { Alert, StyleSheet, Text, View } from "react-native";
import SelectDropdown from 'react-native-select-dropdown'
import { Player } from '@react-native-community/audio-toolkit';
import AudioPlayer from 'react-h5-audio-player';

const gamesSelection = ["Population Growing", "Wild World/City Folk", "New Leaf", "New Horizons"]
const wildWorldSound = 'https://d17orwheorv96d.cloudfront.net/wild-world/1am.ogg'
export const GamePicker = () => {

    return (
        <View style={styles.container}>

            <Text style={styles.inner}>
                Game Picker
            </Text>

            <RNPickerSelect
                placeholder={{}}
                textInputProps={styles.inner}
                onValueChange={(value) => console.log(value + ' Game Selected')}
                items={[
                    { label: 'Population Growing', value: 'PG' },
                    { label: 'Wild World/City Folk', value: 'WWCF' },
                    { label: 'New Leaf', value: 'NL' },
                    { label: 'New Horizons', value: 'NH' },
                ]}
            />

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '15%',
        padding: 5,
        // flexDirection: 'row',
        // flexWrap: 'wrap',
        alignSelf: 'center',
    },
    // box: {
    //     width: '100%',
    //     height: '30%',
    //     padding: 5,
    // },
    inner: {
        // flex: 1,
        // backgroundColor: '#9a87ff',
        // alignItems: 'center',
        // justifyContent: 'center',
        color: '#e2f7ec',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonBG: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },
    buttonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
})