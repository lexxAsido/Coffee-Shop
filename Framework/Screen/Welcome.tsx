import React from 'react'
import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import * as Animatable from "react-native-animatable";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../Navigation/Stack';



type WelcomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

const Welcome: React.FC<WelcomeScreenProps> = ({ navigation }) => {
  return (
    <View className='bg-black'>
     <Image source={require("../../assets/coffeeShop.png")} style={{width: '100%',height: '60%',resizeMode: "cover"}}/>

     <View style={{marginHorizontal:10,}}>
        <Text style={{fontFamily: "SoraBold", fontSize:38, color:"#ffffff", textAlign:"center"}}>Fall in Love with Coffee in Blissful Delight!</Text>
        <Text style={{color:"#A2A2A2", textAlign:"center", fontSize:18,  marginTop:10, fontFamily: "Sora", marginHorizontal:10,}}>Welcome to our cozy coffee corner, where every cup is a delightful for you</Text>
     </View>
    
     <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
      <Animatable.View 
       animation="pulse" 
       duration={2000} 
       iterationCount="infinite"
       style={{backgroundColor:"#C67C4E", marginHorizontal:24, borderRadius:20, paddingVertical:10, marginTop:44}}>
       <Text style={{textAlign:"center", color:"white", fontFamily: "SoraBold"}}>Get Started</Text>
      </Animatable.View>
        </TouchableOpacity>
    </View>
  )
}
export default Welcome
