import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Button
} from 'react-native';
import Modal from 'react-native-modal';
import ToDo from './ToDo.js';

export default class FloatingActionButton extends Component{
  constructor() {
    super();
    this.state = {
      modal: false
    }
    this._renderModalContent = this._renderModalContent.bind(this);
  }
  handleAdd() {
    this.setState({
      modal:true
    })
  }
  handleAddition() {
      this.props.handleDataSubmit({key:this.state.dataAdded})
  }

  _renderModalContent = () => (
    <View style={styles.modalContent}>
      <Text>Hello!</Text>
      <TextInput
        editable = {true}
        maxLength = {40}
        underlineColorAndroid = {'white'}
        style={styles.textInput}
        onChangeText={(dataAdded) => this.setState({dataAdded})}
        value={this.state.dataAdded}
      />
      <TouchableOpacity onPress = {this.handleAddition.bind(this)} >
            <Text style = {styles.submitButton}>
               Button
            </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.addButton} onPress={() => {
        this.setState({
          modal: false
        })
      }}>
        <Text style={styles.addButtonText}>x</Text>
      </TouchableOpacity>
    </View>
  );

  render(){
    return(
      <View>
        <TouchableOpacity style={styles.addButton} onPress={this.handleAdd.bind(this)}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
        <Modal
          isVisible={this.state.modal}
          animationIn={'slideInLeft'}
          animationOut={'slideOutRight'}
        >
          {this._renderModalContent()}
        </Modal>
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
  textInput:{
    borderStyle:'solid',
    fontSize:15,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    width: 300
  },
  addButtonText :{
    color:'white',
    fontSize:24,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
   submitButton: {
      borderWidth: 1,
      padding: 10,
      borderColor: 'black',
      backgroundColor: 'green'
   }
});
