import { StyleSheet, Text, View,ScrollView,Image} from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
         {
          uid: 1,
          name: 'Hitesh Choudhary',
          status: 'Just an extra ordinary teacher',
          imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
        },
        {
          uid: 2,
          name: 'Anurag Tiwari',
          status: 'I ❤️ To Code and Teach!',
          imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
        },
        {
          uid: 3,
          name: 'Sanket Singh',
          status: 'Making your GPay smooth',
          imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
        },
        {
          uid: 4,
          name: 'Anirudh Jwala',
          status: 'Building secure Digital banks',
          imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
        },
    ];
  return (
    <View>
      <Text style = {styles.headingText}>ContactList</Text>
      <ScrollView
      style = {styles.container}
      scrollEnabled ={false}
      >
        {contacts.map(({uid,name,status,imageUrl}) => (
            <View key ={uid} style = {styles.usercard}>
                <Image
                source={{uri : imageUrl}} 
                style = {styles.userimage}
                />
               <View>
                 <Text style ={styles.username}></Text>
                <Text style ={styles.status}></Text>
               </View>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText : {
        fontSize :24,
        fontWeight:'bold',
        paddingHorizontal:8
    },
    container :{
        paddingHorizontal: 16,
        marginBottom:4,
    },
    usercard :{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:3,
        backgroundColor:'#8d3daf',
        padding:8,
        borderRadius:4,
    },
    userimage :{
        width:60,
        height :60,
        borderRadius:60/2
    },
    username :{
        fontSize:16,
        fontWeight:600,
        color: '#ffff',
    },
    status :{
        fontSize:14,
    }
})