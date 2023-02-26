import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export const Header = () => {
        return(
            <SafeAreaView style={styles.header}>
                <Text style={styles.titleFormat}>
                     Nook Mobile
                </Text>
            </SafeAreaView>
        )
    }


const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '12%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#9a87ff',
        alignSelf: 'center'
    },
    titleFormat: {
        padding: 0,
        fontSize: 30,
        fontWeight: 'bold',
        color: '#e2f7ec',  
        flex: 1,
      },
})