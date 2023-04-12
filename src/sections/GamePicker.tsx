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

    // https://api.weatherbit.io/v2.0/current?city=Manchester&country=GB&key=4e47c36e398f4c738bc48bdbfdc8eb2d
    // Weather API, using https://www.weatherbit.io
    // Currently pulls weather location manually, but plans to move to a location based system from iOS.

    const getWeather = async (weatherData: String) => {
        const apiCondition = await fetch('https://api.weatherbit.io/v2.0/current?city=Manchester&country=GB&key=4e47c36e398f4c738bc48bdbfdc8eb2d')
        return weatherData = await apiCondition.json(), console.log(weatherData)
    }
    const getAudio = async (value: String) => {
        getWeather('')
        if (value === 'NG') {
            console.log('No audio selected, stopping stream')
            return stopAudio()
        }
        console.log(dateTimeHours + 'Hours')
        const { sound } = await Audio.Sound.createAsync({ uri: `https://github.com/hamid-hai/nook_mobile/blob/main/src/assets/audio/${value}/${dateTimeHours}.mp3?raw=true` })

        // load the audio from assets
        // const { sound } = await Audio.Sound.createAsync(require('./assets/1am.mp3'))

        // sets the audio state to the newly retrieved sound
        setAudio(sound)
        console.log('Setting Audio with setAudio')

        // plays the audio and sets to loop
        sound.setIsLoopingAsync(true)
        console.log('Looping set to True')
        await sound.playAsync()
    }

    // const playAudio = async () => {
    //     await audio?.playAsync()
    //     console.log('Playing audio from playAudio')
    // }

    // const pauseAudio = async () => {
    //     await audio?.pauseAsync()
    //     console.log('Pausing audio')
    // }

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
                    value: 'NG',
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
