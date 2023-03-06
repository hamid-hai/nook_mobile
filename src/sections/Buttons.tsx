import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image, Pressable } from "react-native";
import { Audio } from 'expo-av';



export const Buttons = () => {
    const [audio, setAudio] = useState<Audio.Sound>()

    const getAudio = async () => {
        // load the audio from online source - probs the best method tbh
        const { sound } = await Audio.Sound.createAsync({ uri: 'https://github.com/hamid-hai/nook_mobile/raw/main/src/assets/audio/1am.mp3' })
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
        <View style={styles.row}>

            {/* Get audio should be tied to picker to automatically download files depending on the chosen game */}
            <Pressable
                onPress={getAudio}>
                <Image style={styles.image} source={require('../assets/icons/download-icon.png')} />
            </Pressable>

            {/* Play and Pause can be combined into one button, these control the file locally without having to re-download the file each time */}
            <Pressable
                onPress={playAudio}>
                <Image style={styles.image} source={require('../assets/icons/play-icon.png')} />
            </Pressable>

            <Pressable
                onPress={pauseAudio}>
                <Image style={styles.image} source={require('../assets/icons/pause-icon.png')} />
            </Pressable>

            {/* Stop audio isn't exactly needed at this stage, but kills off the audio functionality and dumps the file. */}
            <Pressable
                onPress={stopAudio}>
                <Image style={styles.image} source={require('../assets/icons/stop-icon.png')} />
            </Pressable>
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

function componentDidMount() {
    throw new Error("Function not implemented.");
}
