import React, { useState } from 'react'
import { Image, ImageBackground, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleDown, faArrowDown, faFilter, faSearch } from '@fortawesome/free-solid-svg-icons';
import * as Animatable from "react-native-animatable";



export default function HomeScreen (){
    const [searchQuery, setSearchQuery] = React.useState('');

    
      
  return (
      
    
      <View style={{flex:1}}>

            <LinearGradient
                start={{ x: 0, y: 1.5 }} end={{ x: 1.5, y: 0 }}
                colors={["#111111", "#313131"]} style={{
                    // flex: 1,
                    padding: 20,
                    justifyContent: "space-between",
                    height:"30%",
                    
                }}
                >
                    <View className= "mt-7 mx-10">
                        <Text style={{color:"#A2A2A2"}}>Location</Text>
                        <View style={{flexDirection:"row", alignItems:"center",gap: 10, marginTop:5}}>
                        <Text className='text-[#D8D8D8] text-sm'>Bilzen, Tanjungbalai</Text>
                        <FontAwesomeIcon icon={faAngleDown} size={10} style={{color:"#A2A2A2"}}/>
                        </View>

                        <View style={{flexDirection:"row", alignItems:"center",gap: 14, marginTop:5}}>

                            <View style={{flexDirection:"row", alignItems:"center",gap: 10, marginTop:5, backgroundColor:"#313131", borderRadius:14,paddingHorizontal:14, width:"90%"}}>
                            <FontAwesomeIcon icon={faSearch} size={12} style={{color:"#A2A2A2"}}/>
                            <TextInput
                                style={{}}
                                placeholder="Search coffee"
                                placeholderTextColor="#A2A2A2"
                                value={searchQuery}
                                onChangeText={setSearchQuery}
                            />
                            </View>
                            
                            <TouchableOpacity className='bg-[#C67C4E] p-2 rounded-md'>
                            <Ionicons name="options-outline" size={24} color="white" />

                            </TouchableOpacity>
                            
                        </View>
                    </View>
                        

                    <ImageBackground source={require("../../assets/banner.png")} style={{width:"100%", height:170, marginTop:16}}>
    <View className='mt-10'>
        <Animatable.View 
            animation="pulse"
            duration={2000} 
            iterationCount="infinite"
            // className='absolute top-4 left-7'
        >
            <Text className='bg-[#ED5151] font-soraBold text-white px-3 rounded-md py-1 w-[5rem] ml-11'>Promo</Text>
        </Animatable.View>

        <View className='ml-11'>
            <Text 
                style={{
                    fontSize: 32,
                    fontFamily: "SoraBold",
                    color: 'white',
                    textShadowColor: 'rgba(0, 0, 0, 0.8)',
                    textShadowOffset: { width: 7, height: 8 },
                    textShadowRadius: 4,
                    elevation: 20,
                }}
            >
                Buy one get
            </Text>

            <Text 
                style={{
                    fontSize: 32,
                    fontFamily: "SoraBold",
                    color: 'white',
                    textShadowColor: 'rgba(0, 0, 0, 0.8)',
                    textShadowOffset: { width: 5, height: 8 },
                    textShadowRadius: 4,
                    elevation: 10,
                }}
            >
                one FREE
            </Text>
        </View>
    </View>
</ImageBackground>

        </LinearGradient>


            <View className='mt-32 mx-8 flex gap-10 justify-around ' style={{flexDirection:"row"}}>
                <TouchableOpacity className='bg-[#C67C4E] py-1 px-2 rounded-lg'>
                <Text className='text-white font-sora '>All Coffee</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                <Text>Machiato</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                <Text>Latte</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                <Text>Americano</Text>
                </TouchableOpacity>
                
            </View>

        <ScrollView>
    <View className="p-4 flex-row justify-center gap-5 flex-wrap mb-20">
      
    
        <View className='relative'
            style={{
                backgroundColor: "white", 
                borderRadius: 12, 
                padding: 8, 
                //   alignItems: "center",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
                elevation: 5, 
                width: 200,
                
            }}>
            <Image 
            source={require("../../assets/coffeeA.png")} 
            style={{ width: "100%", height: 180, borderRadius: 8 }} 
            />
            <Text className="mt-3 font-bold text-lg">Caffe Mocha</Text>
            <Text className="text-[#A2A2A2] text-sm">Deep Foam</Text>
            <TouchableOpacity className='flex-row items-center justify-between'>
            <Text className="font-soraBold text-lg ">$4.53</Text>
            <MaterialIcons name="add-box" size={26} color="#C67C4E" />
            </TouchableOpacity>
            <Text className='absolute top-4 right-5 text-white'>⭐ 4.8</Text>
        </View>

      
        <View 
            style={{
                backgroundColor: "white", 
                borderRadius: 8, 
                padding: 12, 
                //   alignItems: "center",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
                elevation: 5, 
                width: 200,
            }}>
            <Image 
            source={require("../../assets/coffee2.png")} 
            style={{ width: "100%", height: 180, borderRadius: 8 }} 
            />
            <Text className="mt-3 font-bold text-lg">Flat White</Text>
            <Text className="text-[#A2A2A2] text-sm">Espresso</Text>

            <TouchableOpacity className='flex-row items-center justify-between'>
            <Text className="font-soraBold text-lg ">$3.53</Text>
            <MaterialIcons name="add-box" size={26} color="#C67C4E" />
            </TouchableOpacity>
            <Text className='absolute top-4 right-5 text-white'>⭐ 4.8</Text>
        </View>

        <View 
            style={{
                backgroundColor: "white", 
                borderRadius: 8, 
                padding: 12, 
                //   alignItems: "center",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
                elevation: 5, 
                width: 200,
            }}>
            <Image 
            source={require("../../assets/coffee3.png")} 
            style={{ width: "100%", height: 180, borderRadius: 8 }} 
            />
            <Text className="mt-3 font-bold text-lg">Flat White</Text>
            <Text className="text-[#A2A2A2] text-sm">Espresso</Text>

            <TouchableOpacity className='flex-row items-center justify-between'>
            <Text className="font-soraBold text-lg ">$3.53</Text>
            <MaterialIcons name="add-box" size={26} color="#C67C4E" />
            </TouchableOpacity>
            <Text className='absolute top-4 right-5 text-white'>⭐ 4.8</Text>
        </View>

        <View 
            style={{
                backgroundColor: "white", 
                borderRadius: 8, 
                padding: 12, 
                //   alignItems: "center",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
                elevation: 5, 
                width: 200,
            }}>
            <Image 
            source={require("../../assets/coffee4.png")} 
            style={{ width: "100%", height: 180, borderRadius: 8 }} 
            />
            <Text className="mt-3 font-bold text-lg">Flat White</Text>
            <Text className="text-[#A2A2A2] text-sm">Espresso</Text>

            <TouchableOpacity className='flex-row items-center justify-between'>
            <Text className="font-soraBold text-lg ">$3.53</Text>
            <MaterialIcons name="add-box" size={26} color="#C67C4E" />
            </TouchableOpacity>
            <Text className='absolute top-4 right-5 text-white'>⭐ 4.8</Text>
        </View>

    </View>
            </ScrollView>
        </View>
    
  )
}

