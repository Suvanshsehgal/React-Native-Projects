import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style ={styles.headingtext}>ElevatedCards</Text>
      <ScrollView horizontal={true} style ={styles.container}>
        <View style ={[styles.card , styles.cardElevated]}>
            <Text>
                Tap
            </Text>
        </View>
        <View style ={[styles.card , styles.cardElevated]}>
            <Text>
                Tap
            </Text>
        </View>
        <View style ={[styles.card , styles.cardElevated]}>
            <Text>
                Tap
            </Text>
        </View>
        <View style ={[styles.card , styles.cardElevated]}>
            <Text>
                Tap
            </Text>
        </View>
        <View style ={[styles.card , styles.cardElevated]}>
            <Text>
                Tap
            </Text>
        </View>
        <View style ={[styles.card , styles.cardElevated]}>
            <Text>
                Tap
            </Text>
        </View>
        <View style ={[styles.card , styles.cardElevated]}>
            <Text>
                Tap
            </Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  headingtext: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container :{
    flex :1 ,
    flexDirection : 'row',
    padding : 8
  },
  card :{
    flex :1 ,
    alignItems:'center',
    justifyContent : 'center' ,
    width: 100 ,
    height :100 ,
    borderRadius : 3 ,
    margin : 8,
    color : 'white'
  } ,
  cardElevated :{
    backgroundColor :'blue',
    elevation :10,
    shadowOffset :{
        width:1,
        height:1,
    },
    shadowColor : 'white'
  }
});