import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function App() {
  const images =[ 
  {id :1 , src:require('./assets/1image.png')},
  {id :2 , src:require('./assets/2.png')},
  {id :3 , src:require('./assets/3.png')},
  {id :4 , src:require('./assets/4.png')},
  {id :5 , src:require('./assets/5.png')},
  {id :6 , src:require('./assets/6.png')},
  ]
  const [dice, setDice] = useState(images[0]);

  const rollDice =() =>{
    const index = Math.floor(Math.random()* images.length);
    setDice(images[index]);
  }
  return (
    <View style ={styles.container}>
      <Image source={dice.src} style={styles.image}></Image>
      <TouchableOpacity style ={styles.btn}
      onPress={rollDice}>
        <Text style ={styles.btntext}>Roll the dice</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container :{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  image:{
    width: 200,
    height: 200,
    marginTop: 50,
    marginBottom: 20,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'black',
  },
  btn:{
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    padding: 10,
    width: 200,
    alignItems: 'center',
    marginTop: 20,
  },
  btntext:{
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    padding: 10,
  }
})