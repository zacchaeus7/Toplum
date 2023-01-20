import React from 'react';
import { View, Text, Button, StyleSheet, FlatList,TouchableOpacity,Image } from 'react-native';
import { Card } from 'react-native-paper';

// import styled from 'styled-components';


// import {
//   Container,
//   Card,
//   UserInfo,
//   UserImgWrapper,
//   UserImg,
//   UserInfoText,
//   UserName,
//   PostTime,
//   MessageText,
//   TextSection,
// } from './MessageStyles';

const Messages = [
  {
    id: '1',
    userName: 'Jenny Doe',
    userImg: require('../assets/users/user-3.jpg'),
    messageTime: '4 mins ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '2',
    userName: 'John Doe',
    userImg: require('../assets/users/user-1.jpg'),
    messageTime: '2 hours ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '3',
    userName: 'Ken William',
    userImg: require('../assets/users/user-4.jpg'),
    messageTime: '1 hours ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '4',
    userName: 'Selina Paul',
    userImg: require('../assets/users/user-6.jpg'),
    messageTime: '1 day ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '5',
    userName: 'Christy Alex',
    userImg: require('../assets/users/user-7.jpg'),
    messageTime: '2 days ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
];

const MessageScreen = ({navigation}) => {
    return (
      <View style={styles.Contained}>
        <FlatList 
          data={Messages}
          keyExtractor={item=>item.id}
          renderItem={({item}) => (
            <TouchableOpacity>
              <View>
                    <Text>{item.userName}</Text>
               </View>
            </TouchableOpacity>
          )}
        />
      </View>
    );
};

export default MessageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },

  contained : {
    flex: 1,
    paddingLeft: '20px',
    PaddingRight:' 20px',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
   Card : {
    width: '100%'
   },
 UserInfo :{

    flexDirection: 'row',
    // justifyContent: space-between
 },
 UserImgWrapper:{
    // paddingTop: '15px',
    // paddingBottom: '15px'
 },

 UserImg :{
    width: '50%',
    height:'50%',
    // borderRadius: '25%'
 },

TextSection :{
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '15px',
  marginLeft: '10px',
  width: '300px',
},
  UserInfoText :{
    flexDirection: 'row',
    // justifyContent: 'space-between',
    marginBottom: '5px',
},
 UserName :{
    fontsize: '14px',
    fontWeight: 'bold',
    fontFamily: 'Lato-Regular'
 },

PostTime :{
    fontSize: '12px',
    color: '#666',
    fontFamily: 'Lato-Regular'
},

 MessageText :{
    fontSize: '14px',
    color: '#333333'
}

})