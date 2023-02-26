import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Header extends React.Component {

    render() {
        return(
            <View style={styles.header}>
                <Text style={styles.titleFormat}>
                     Nook Mobile
                </Text>
            </View>
        )
    }
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
        padding: 20,
        fontSize: 30,
        fontWeight: 'bold',
        color: '#e2f7ec',  
        flex: 1,
      },
})