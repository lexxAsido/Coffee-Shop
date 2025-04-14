import React, { useState } from 'react'
import { Image, ImageBackground, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleDown, faArrowDown, faFilter, faSearch } from '@fortawesome/free-solid-svg-icons';
import * as Animatable from "react-native-animatable";
import { RootStackParamList } from '../Navigation/Stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';
import Favorite from './Favorite';
import Bag from './Bag';
import Updates from './Updates';
import { SafeAreaView } from 'react-native-safe-area-context';

interface HomeProps {
    navigation: {
      navigate: (route: string) => void;
      replace: (route: string) => void;
    };
  }

  function Home({ navigation }: any) {
    const [searchQuery, setSearchQuery] = useState('');

    const coffeeList = [
        { name: "Caffe Mocha", image: require("../../assets/coffeeA.png"), description: "A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and 85ml of fresh milk the fo..",label:"Ice/Hot", title:"Deep Foam", price: 4.53, rating: 4.8 },
        { name: "Flat White", image: require("../../assets/coffee2.png"), description: "Espresso is a classy coffee made from the finest",label:"Espresso", title:"Deep Foam", price: 3.53, rating: 4.8 },
        { name: "Your Maker", image: require("../../assets/coffee3.png"), description: "ultimat",label:"Ice/Hot", title:"Deep Foam", price: 3.53, rating: 4.8},
        { name: "Relizo", image: require("../../assets/coffee4.png"), description: "Chillz",label:"Ice/Hot", title:"Deep Foam", price: 3.53, rating: 4.8 },
        { name: "Heaven", image: require("../../assets/coffee5.png"), description: "Purity",label:"Ice/Hot", title:"Deep Foam", price: 6.53, rating: 4.8 },
    ];

    
      
  return (
      
    
      <View style={{flex:1}}>
            

            <LinearGradient
                start={{ x: 0, y: 1.5 }} end={{ x: 1.5, y: 0 }}
                colors={["#111111", "#313131"]} style={{
                    // flex: 1,
                    padding: 20,
                    justifyContent: "space-between",
                    height:Platform.OS === "ios" ? "48%" : "38%",
                }}>
                    <View className= "mt-10 mx-10">
                        <Text style={{color:"#A2A2A2"}}>Location</Text>
                        <View style={{flexDirection:"row", alignItems:"center",gap: 10, marginTop:5}}>
                        <Text className='text-[#D8D8D8] text-sm'>Bilzen, Tanjungbalai</Text>
                        <FontAwesomeIcon icon={faAngleDown} size={10} style={{color:"#A2A2A2"}}/>
                        </View>

                        <View style={{flexDirection:"row", alignItems:"center",gap: 14, marginTop:5}}>

                        <View
      style={{
          flexDirection: "row",
        alignItems: "center",
        gap: 14,
        marginTop: 5,
        marginBottom:10
    }}
    >
      <View
        style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            marginTop: 5,
            backgroundColor: "#313131",
            borderRadius: 14,
            paddingHorizontal: 14,
            width: "90%",
            paddingVertical: Platform.OS === "ios" ? 10 : 12, 
            
        }}
        >
        <FontAwesomeIcon icon={faSearch} size={12} style={{ color: "#A2A2A2" }} />
        <TextInput
          style={{
              flex: 1,
              paddingVertical: Platform.OS === "ios" ? 8 : 0, 
            }}
            placeholder="Search coffee"
            placeholderTextColor="#A2A2A2"
            value={searchQuery}
            onChangeText={setSearchQuery}
            />
      </View>
    </View>
                            
                            <TouchableOpacity className='bg-[#C67C4E] p-2 rounded-md'>
                            <Ionicons name="options-outline" size={24} color="white" />

                            </TouchableOpacity>
                            
                        </View>
                    </View>
                        

<ImageBackground source={require("../../assets/banner.png")} style={{width:"100%", height:170, marginTop:16, marginBottom:48,  zIndex: 2,}}>
    <View className='mt-12'>
        <Animatable.View 
            animation="pulse"
            duration={2000} 
            iterationCount="infinite"
            // className='absolute top-4 left-7'
            >
            <Text className='bg-[#ED5151] font-soraBold text-white  ml-11' style={{width:60, paddingHorizontal:5}}>Promo</Text>
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
            


            <View className=' flex gap-10 justify-around items-center' style={{flexDirection:"row", marginBottom:Platform.OS === "ios" ? 10 : 18, marginTop:Platform.OS === "ios" ? 10 : "20%",}}>
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

        <ScrollView style={{marginTop:10}}>
    

    
    <View className='flex-row flex-wrap justify-center gap-5'>
    {coffeeList.map((coffee, index) => (
        <TouchableOpacity 
            key={index} 
            style={{ backgroundColor: "white", borderRadius: 12, padding: 12, shadowColor: "#000", shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.2, shadowRadius: 4, elevation: 5, width: 168 }}
            onPress={() => navigation.navigate('Details', {
                name: coffee.name,
                image: coffee.image,
                description: coffee.description,
                label: coffee.label,
                title: coffee.title,
                price: coffee.price,
                rating: coffee.rating
            })}
        >
            <Image source={coffee.image} style={{ width: "100%", height: 180, borderRadius: 8 }} />
            <Text style={{ marginTop: 8, fontWeight: "bold", fontSize: 16 }}>{coffee.name}</Text>
            <Text style={{ color: "#A2A2A2", fontSize: 14 }}>{coffee.title}</Text>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 8 }}>
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>${coffee.price}</Text>
                <MaterialIcons name="add-box" size={26} color="#C67C4E" />
            </View>
            <Text style={{ position: "absolute", top: 12, right: 9, color: "white", paddingHorizontal: 6,  }}>⭐ {coffee.rating}</Text>
        </TouchableOpacity>
    ))}
    </View>
    </ScrollView>
</View>
    
  )
}

const Tab = createBottomTabNavigator();

export function HomeScreen() {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
                let iconName: any;

                if (route.name === 'Home') {
                    iconName = 'home';
                } else if (route.name === 'Favorite') {
                    iconName = 'heart';
                } else if (route.name === 'Bag') {
                    iconName = 'bag-handle';
                } else if (route.name === 'Updates') {
                    iconName = 'notifications';
                }

                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#C67C4E',
            tabBarInactiveTintColor: 'gray',
            headerShown: false,
        })}
    >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Favorite" component={Favorite} />
            <Tab.Screen name="Bag" component={Bag}  />
            <Tab.Screen name="Updates" component={Updates}  />

            {/* <Tab.Screen name="notifications" component={Cart} /> */}
        
        </Tab.Navigator>
    );
}