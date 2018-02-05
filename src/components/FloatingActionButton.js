import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class FloatingActionButton extends Component{
  render(){
    return(
      <View>
        <TouchableOpacity style={styles.addButton}>
          <Icon style={styles.navIcon} name="add" size={24}/>
          {/* <Text style={styles.addButtonText}>+</Text> */}
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  addButton : {
    elevation: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E91E63',
    borderRadius:50,
    height: 56,
    width: 56,
    alignSelf: 'flex-end',
    right:30,
    bottom:30,
    position:'absolute',
    // zIndex:11
  },
  navIcon : {
    color:'#FCE4EC',
  }
  // addButtonText :{
  //   color:'white',
  //   fontSize:24,
  //
  //   }
});
