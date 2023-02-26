import {StyleSheet, View } from 'react-native';
import Controls from './Controls';
import TownTune from './TownTune';
import GamePicker from './GamePicker';
import React from 'react';
import Header from './Header';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return(
    <SafeAreaProvider>
    <View style={styles.container}>
      <Header />
      <GamePicker />
      <Controls />
      <TownTune />
    </View>
    </SafeAreaProvider>
)
}
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    "backgroundColor": "#8a76fe"
  },
});