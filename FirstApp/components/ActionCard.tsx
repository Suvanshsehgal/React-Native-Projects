import { StyleSheet, Text, View ,Linking,Image,TouchableOpacity} from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openwebsite (websiteLink :string){
        Linking.openURL(websiteLink)
    }
  return (
    <View style = {styles.container}>
      <Text style = {styles.headingText}>ActionCard</Text>
      <View style = {[styles.card, styles.elevatedcard]}>
        <View style ={styles.headingContainer}>
            <Text style ={styles.headerText}>
                whats new in js
            </Text>
            <Image
            source = {{uri :'https://search.brave.com/images?q=anime+image&context=W3sic3JjIjoiaHR0cHM6Ly90My5mdGNkbi5uZXQvanBnLzA2LzcxLzAxLzQ4LzM2MF9GXzY3MTAxNDgzNF8zb0Q0cExZTklQV2MyTVA2d2R5ajg5eHBET0I1ZEJGZC5qcGciLCJ0ZXh0IjoiYW5pbWUgZ3V5IGVuam95cyB0byBtdXNpYyBpbiBsYXJnZSBoZWFkcGhvbmVzIGFnYWluc3QgdGhlIGJhY2tncm91bmQgb2YgdGhlIG5pZ2h0IHNreSIsInBhZ2VfdXJsIjoiaHR0cHM6Ly9zdG9jay5hZG9iZS5jb20vc2VhcmNoP2s9YW5pbWUrZ3V5In1d&sig=26bb6b4d06d255e779b77708671b9f7e678d9f326cba265ce5111874851a1509&nonce=e1b125b428621132649a287cff74de29&source=imageCluster'}}
            style = {styles.ImageStyle}
            />
            <View style = {styles.bodyContainer}>
                <Text numberOfLines={3}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores accusamus, illum asperiores officia consequuntur vero culpa adipisci quasi sequi eligendi doloribus, impedit porro animi aspernatur eveniet quae commodi, id cumque.
                </Text>
                <View style = {styles.footercont}>
                    <TouchableOpacity
                    
                    onPress={()=>openwebsite('https://www.amazon.in')}
                
                 >
                        <Text style ={styles.btn}>Read more</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex : 1,
        alignItems :'center'
    },
    headingText :{
        color :'yellow',
        fontWeight:'bold',
        fontSize : 24,
    },
    card :{
    },
    elevatedcard:{
     backgroundColor :'white'
    },
    headingContainer :{

    },
    headerText:{
        textAlign: 'center',
        fontSize : 16,
        fontWeight:'bold'
    },
    btn:{
        color : 'white',
        fontWeight : 'bold',
        backgroundColor:'red',
        padding:8,
        borderRadius:10
    },
    ImageStyle:{
        height:190
    },
    bodyContainer :{},
    footercont:{
         flex:1,
         flexDirection:'row',
         alignItems:'center',
         justifyContent:'center',
    }
})