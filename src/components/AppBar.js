import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class AppBar extends Component{
  render(){
    return(
      <View style={styles.header}>
        <View style={styles.leftNav}>
          <TouchableOpacity ><Icon style={styles.navIcon} name="menu" size={24}/></TouchableOpacity>
          <Text style={styles.headerText}> Todo </Text>
        </View>
        <View style={styles.rightNav}>
            {/* <TouchableOpacity><Icon style={styles.navIcon} name="videocam" size={24}/></TouchableOpacity> */}
            <TouchableOpacity><Icon style={styles.navIcon} name="search" size={24}/></TouchableOpacity>
            <TouchableOpacity><Icon style={styles.navIcon} name="more-vert" size={24}/></TouchableOpacity>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 56,
    elevation: 4,
    justifyContent: 'space-between',
    flexDirection:'row',
    alignItems: 'center',
    backgroundColor: '#E91E63',
  },
  headerText :{
    color:'#FCE4EC',
    fontSize:20,
    fontWeight:'bold',
    alignSelf:'center',
    paddingHorizontal:16,
  },
  leftNav :{
    flexDirection:'row',
  },
  rightNav : {
    flexDirection:'row',
  },
  navIcon:{
    padding:16,
    // color:'hsla(0, 0%, 0%, 0.54)',
    color:'#FCE4EC',
  }
});
