import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Controls = () => {
    return (
        <View style={styles.column}>
            <Text style={styles.inner}>
                Controls
            </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    column: {
        flexDirection: 'column',
        alignItems: 'center',

    },
    inner: {
        color: '#e2f7ec',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})