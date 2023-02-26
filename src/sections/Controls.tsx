import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Controls = () => {
        return(
            <View style={styles.box}>
                    <Text style={styles.inner}>
                        Controls
                    </Text>
            </View>
        )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '85%',
        padding: 5,
        flexDirection: 'row',
        flexWrap: 'wrap'
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
        textAlign: 'center',
    }
})