import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Alert
} from 'react-native';

export default class Footer extends Component{
  render(){
    return(
      <View style={styles.buttonContainer}>
      <Button
        onPress={() => {
          Alert.alert('You tapped the button!');
        }}
        title="Press Me"
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer : {
    // elevation: 5,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F42156',
    // borderRadius:50,
    // height: 70,
    // width: 70,
    // alignSelf: 'flex-end',
    // right:30,
    // bottom:30,
    // position:'absolute',
    // zIndex:11
  },
  addButtonText :{


    }
});
