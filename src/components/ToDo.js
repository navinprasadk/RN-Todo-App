import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Todo extends Component{
  render(){
    return(
      <View style= {styles.bodyContainer}>
        <FlatList
        data={[
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
        ]}
        renderItem={
                  ( {item} ) =>
                    <View style={styles.boxContainer}>

                      <View>
                        <Text style={styles.item}>
                                  {item.key}
                        </Text>
                       </View>

                       <TouchableOpacity>
                         <View>
                           <Icon style={styles.navIcon} name="delete" size={24}/>
                         </View>
                       </TouchableOpacity>

                     </View>
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
    fontSize: 14,
 },
  boxContainer : {
    flexDirection:'row',
    justifyContent: 'space-between',
    borderRadius:5,
    padding: 10,
    borderWidth: 0.8,
    borderColor: '#d6d7da',
    backgroundColor:'#fff',
    marginHorizontal:16,
    marginBottom:8,
    marginTop:8,
    height: 44,
    // elevation:2,
  },
  navIcon : {

  }
});
