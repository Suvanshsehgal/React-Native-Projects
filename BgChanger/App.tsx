import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [bgColor, setBgColor] = useState('white');
  const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
  return (
    <View style ={[styles.container, {backgroundColor:bgColor}] }>
      {colors.map ((color , index) =>(
        <TouchableOpacity
        key={index}
        style={[styles.btn,{backgroundColor:color}]}
        onPress={() => setBgColor(color)}
        >
        <Text style={styles.btntxt}>{color}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  btn: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 10,
    width: 200,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderBlockColor: 'black',
    borderWidth: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  btntxt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});
