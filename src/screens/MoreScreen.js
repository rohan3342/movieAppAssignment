import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class MoreScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txt}>More Screen</Text>
      </View>
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

export default MoreScreen;