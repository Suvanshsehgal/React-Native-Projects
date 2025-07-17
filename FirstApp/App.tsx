import { View, Text,SafeAreaView,ScrollView} from 'react-native'
import FlatCard from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import React from 'react'

const App = () => {
  return (
  <SafeAreaView>
    <ScrollView>
        <FlatCard/>
        <ElevatedCards/>
    </ScrollView>
  </SafeAreaView>
  )
}

export default App