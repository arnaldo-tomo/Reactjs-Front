import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  function get() {
    console.log()
  }
  return (
    <View style={styles.container}>
      <Text>react-dom": "^18.2.0</Text>
      <StatusBar style="auto" />

      <button onClick={get()} className='btn'>bfbdg</button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',


  },

});
