import React, { useEffect, useState } from "react";
import RNPickerSelect from 'react-native-picker-select';
import { Alert, StyleSheet, Text, View } from "react-native";
import { Audio } from "expo-av";

const gamesSelection = ["Population Growing", "Wild World/City Folk", "New Leaf", "New Horizons"]
const wildWorldSound = 'https://d17orwheorv96d.cloudfront.net/wild-world/1am.ogg - https://d17orwheorv96d.cloudfront.net/population-growing/1am.ogg'

// https://github.com/hamid-hai/nook_mobile/blob/main/src/assets/audio/PG/14.mp3?raw=true


export const GamePicker = () => {
    const [audio, setAudio] = useState<Audio.Sound>()


    const dateTime = new Date()
    const dateTimeHours = dateTime.getHours()

    const animalCrossingGames = [
        {
            label: 'Population Growing',
            value: 'PG',
        },
        {
            label: 'Wild World/City Folk',
            value: 'WWCF',
        },
        {
            label: 'New Leaf',
            value: 'NL',
        },
        {
            label: 'New Horizons',
            value: 'NH',
        },
    ];

    const getAudio = async (value: Text) => {
        console.log(dateTimeHours + 'Hours')
        const { sound } = await Audio.Sound.createAsync({ uri: `https://github.com/hamid-hai/nook_mobile/blob/main/src/assets/audio/${value}/${dateTimeHours}.mp3?raw=true` })
        console.log('Creating async')

        // load the audio from assets
        // const { sound } = await Audio.Sound.createAsync(require('./assets/1am.mp3'))

        // sets the audio state to the newly retrieved sound
        setAudio(sound)
        console.log('Setting Audio')

        // plays the audio and sets to loop
        sound.setIsLoopingAsync(true)
        console.log('Set Looping to True')
        await sound.playAsync()
        console.log('Waiting for playAudio function')
    }

    const playAudio = async () => {
        await audio?.playAsync()
        console.log('Playing audio from playAudio')
    }

    const pauseAudio = async () => {
        await audio?.pauseAsync()
        console.log('Pausing audio')
    }

    // stops audio from playing and sets state back to undefined
    const stopAudio = async () => {
        await audio?.stopAsync()
        setAudio(undefined)
        console.log('Audio stopped from stopAudio')
    }

    useEffect(() => {
        return () => {
            console.log('unloading sound')
            audio ? audio.unloadAsync() : undefined
        }

    }, [audio])

    return (
        <View style={styles.container}>

            <Text style={styles.inner}>
                Game Picker
            </Text>

            <RNPickerSelect
                placeholder={{
                    label: 'Select a game!',
                    value: null,
                    color: '#9EA0A4'
                }}
                textInputProps={styles.inner}
                onValueChange={(value) => getAudio(value)}
                items={animalCrossingGames}
            />

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '15%',
        padding: 5,
        alignSelf: 'center',
    },
    inner: {
        color: '#e2f7ec',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 5,
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
