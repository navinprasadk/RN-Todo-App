import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from 'react-native';

export default class Todo extends Component{
  // constructor() {
  //   super();
  //   this.state = {
  //     lists:[
  //       {key: 'Book a Movie Ticket'},
  //       {key: 'Submit the Assignment'},
  //       {key: 'Pay the Electricity Bill'},
  //       {key: 'Meeting with Kannan'},
  //       {key: 'Buy a Noodles for Dinner'},
  //       {key: 'Start to learn VR'},
  //       {key: 'Buy groceries'},
  //       {key: 'Upload photos'},
  //       {key: 'Make a plan next week trip'},
  //       {key: 'Fill up the tank'},
  //       {key: 'Swimming on weekend'}
  //     ]
  //   }
  // }
  //
  // componentWillReceiveProps(nextProps) {
  //   console.log("nmmnmnnm",nextProps);
  //   let context = this;
  //   let dataToAdded = [];
  //   dataToAdded.push(this.state.lists)
  //   console.log("dffsdfddfd",dataToAdded);
  //   if(this.props.dataAdded){
  //     dataToAdded.push(nextProps.dataAdded)
  //     console.log("dff",dataToAdded);
  //   }
  //   this.setState({
  //     lists:dataToAdded
  //   })
  // }

  render(){
    return(
      <View style= {styles.bodyContainer}>
        <FlatList
        data={this.props.lists}
        renderItem={
                  ( {item} ) =>
                  <TouchableOpacity>
                    <Text style={styles.item}>
                                {item.key}
                    </Text>
                  </TouchableOpacity>
                   }
        // ItemSeparatorComponent={()=><View style={{height:0.8, backgroundColor:"#e5e5e5"}}/>}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bodyContainer : {
    flex:1,
     backgroundColor:'#f5f5f5',

  },
  item: {
    padding: 10,
    fontSize: 14,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    backgroundColor:'#fff',
    marginHorizontal:16,
    marginTop:16,
   height: 44,
   elevation:2,
 },
});
