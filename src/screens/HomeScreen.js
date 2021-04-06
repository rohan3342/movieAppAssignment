import React, { Component } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.txt}>Home Screen</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#191919',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    color: 'white'
  }
});

export default HomeScreen;