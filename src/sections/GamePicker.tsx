import React from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";

export const GamePicker = () => {
        return(
            <View style={styles.box}>
                    <Text style={styles.inner}>
                        Game Picker
                    </Text>

        <Pressable style={styles.buttonBG}>
        <Text style={styles.buttonText} onPress={() => Alert.alert('Wild World/City Folk selected')}>
            AC: Wild World/City Folk
        </Text>
        </Pressable>
            </View>
        )
    }

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '85%',
        padding: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignSelf: 'center',
    },
    box: {
        width: '100%',
        height: '25%',
        padding: 5,
    },
    inner: {
        flex: 1,
        backgroundColor: '#9a87ff',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#e2f7ec', 
        fontSize: 30,
        fontWeight: 'bold',
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