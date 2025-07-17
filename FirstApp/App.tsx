import { View, Text,SafeAreaView,ScrollView} from 'react-native'
import FlatCard from './components/FlatCards'
import React from 'react'

const App = () => {
  return (
  <SafeAreaView>
    <ScrollView>
        <FlatCard/>
    </ScrollView>
  </SafeAreaView>
  )
}

export default App