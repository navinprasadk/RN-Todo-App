/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import AppBar from './src/components/AppBar.js';
import FloatingActionButton from './src/components/FloatingActionButton.js';
import ToDo from './src/components/ToDo.js';
// import Button from './src/components/Button.js';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

export default class App extends Component<{}> {
  constructor() {
    super();
    this.state = {
      lists:[
        {key: 'Book a Movie Ticket'},
        {key: 'Submit the Assignment'},
        {key: 'Pay the Electricity Bill'},
        {key: 'Meeting with Kannan'},
        {key: 'Buy a Noodles for Dinner'},
        {key: 'Start to learn VR'},
        {key: 'Buy groceries'},
        {key: 'Upload photos'},
        {key: 'Make a plan next week trip'},
        {key: 'Fill up the tank'},
        {key: 'Swimming on weekend'}
      ]
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(dataAdded) {
    console.log("ewrett",dataAdded);
    this.state.lists.push({
      key:dataAdded.key
    })
    console.log("ewrett",this.state.lists);
    this.setState({
      lists:this.state.lists
    })
    console.log("ewrett222",this.state.lists);
  }

  render() {
    return (
      <View style={styles.container}>
        <AppBar/>
        <ToDo lists={this.state.lists}/>
        <FloatingActionButton handleDataSubmit={this.handleSubmit.bind(this)}/>
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
