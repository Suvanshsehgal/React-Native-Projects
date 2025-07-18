import { View, Text,SafeAreaView,ScrollView} from 'react-native'
import FlatCard from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import ActionCard from './components/ActionCard'
import FancyCard from './components/FancyCard'
import ContactList from './components/ContactList'
import React from 'react'

const App = () => {
  return (
  <SafeAreaView>
    <ScrollView>
        <FlatCard/>
        <ElevatedCards/>
        <FancyCard/>
        <ActionCard/>
        <ContactList/>
    </ScrollView>
  </SafeAreaView>
  )
}

export default App