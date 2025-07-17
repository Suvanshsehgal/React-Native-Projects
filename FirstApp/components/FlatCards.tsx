import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function FlatCard() {
  return (
    <>
      <View>
        <Text style={styles.headingtext}>FlatCard</Text>
      </View>
      <View style ={styles.container}>
        <View style ={[styles.card , styles.cardone]}>
          <Text>Red</Text>
        </View>
        <View style ={[styles.card , styles.cardtwo]}>
          <Text>Green</Text>
        </View>
        <View style ={[styles.card , styles.cardthird]}>
          <Text>Yellow</Text>
        </View>
      </View>
    </>
  );
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
    borderRadius : 8 ,
    margin : 8,
    color : 'white'
  } ,
  cardtwo :{
    backgroundColor :'green',
  },
  cardthird :{
    backgroundColor :'yellow'
  },
  cardone :{
    backgroundColor :'red'
  }
});
