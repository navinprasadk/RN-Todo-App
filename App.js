import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import AppBar from './src/components/AppBar.js';
import FloatingActionButton from './src/components/FloatingActionButton.js';
import ToDo from './src/components/ToDo.js';
// import Button from './src/components/Button.js';
import SplashScreen from 'react-native-splash-screen';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

export default class App extends Component<{}> {

  componentDidMount() {
   // do stuff while splash screen is shown
     // After having done stuff (such as async tasks) hide the splash screen
     SplashScreen.hide();
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar  backgroundColor="#C2185B" barStyle="light-content" hidden = {false}/>
        <AppBar/>
        <ToDo />
        <FloatingActionButton/>
      </View>
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>
      //     Welcome to React Native!
      //   </Text>
      //   <Text style={styles.instructions}>
      //     To get started, edit App.js
      //   </Text>
      //   <Text style={styles.instructions}>
      //     {instructions}
      //   </Text>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container :{
    flex:1
  }
});
