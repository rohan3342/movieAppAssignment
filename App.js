import React, { Component } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import Routes from './src/routes/Routes'

class App extends Component {

  componentDidMount() {
    StatusBar.setBarStyle("light-content");
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("#191919");
      StatusBar.setTranslucent(true);
    }
  }

  render() {
    return (
      <>
        <StatusBar />
        <SafeAreaView style={styles.container}>
          <Routes />
        </SafeAreaView>
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919',
  }
})

export default App;
