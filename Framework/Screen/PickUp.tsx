import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Image } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleLeft, faCog } from "@fortawesome/free-solid-svg-icons";
import MapView, { Polyline, Marker } from "react-native-maps";

const Pickup = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 bg-white">
   
     

     
      <View className="flex-1">
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 37.7749,
            longitude: -122.4194,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Polyline
            coordinates={[{ latitude: 37.7749, longitude: -122.4194 }, { latitude: 37.7849, longitude: -122.4094 }]}
            strokeWidth={4}
            strokeColor="#C67C4E"
          />
          <Marker coordinate={{ latitude: 37.7849, longitude: -122.4094 }}>
            {/* <Image source={require("../assets/delivery-icon.png")} style={{ width: 30, height: 30 }} /> */}
          </Marker>
        </MapView>
      </View>

      
      <View className="p-5 bg-white shadow-md rounded-t-2xl">
        <Text className="text-lg font-bold text-gray-700">10 minutes left</Text>
        <Text className="text-gray-500">Delivery to <Text className="font-bold">Jl. Kpg Sutoyo</Text></Text>

        <View className="bg-gray-100 p-4 rounded-lg mt-4">
          <Text className="font-bold">Delivered your order</Text>
          <Text className="text-gray-500">We will deliver your goods to you in the shortest possible time.</Text>
        </View>

        
        <View className="flex-row items-center mt-4">
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/men/32.jpg" }}
            className="w-12 h-12 rounded-full"
          />
          <View className="ml-3">
            <Text className="font-bold">Brooklyn Simmons</Text>
            <Text className="text-gray-500">Personal Courier</Text>
          </View>
        </View>
      <TouchableOpacity onPress={() => navigation.goBack()} className=" flex-row mt-5 items-center bg-[#C67C4E] justify-center py-3 rounded-md">
          <FontAwesomeIcon icon={faAngleLeft} size={24} color="white"/>
          <Text className="text-white font-soraBold text-3xl">Go Back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Pickup;