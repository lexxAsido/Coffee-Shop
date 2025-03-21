import React, { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Navigation/Stack";
import { faAngleDown, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Toggle from "../Components/Toggle";
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';


type OrderProps = NativeStackScreenProps<RootStackParamList, "Order">;

const Order: React.FC<OrderProps> = ({ route, navigation }) => {
  const { name, image, price, title } = route.params;
  const [deliveryMethod, setDeliveryMethod] = useState("Deliver");
  const [count, setCount] = useState(1);

  const handleToggle = (value: string) => {
    setDeliveryMethod(value);

    if (value === "Pick Up") {
      navigation.navigate("PickUp"); 
    }
  };

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count > 1 ? count - 1 : 1);

  return (
    <SafeAreaView className="flex-1 bg-[#F9F9F9] p-5">
      <View className="mt-14 flex-row items-center gap-36 mb-7">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesomeIcon icon={faAngleLeft} size={20} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Text className="font-soraBold">Order</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Toggle onToggle={handleToggle} />
      </View>
      
    <ScrollView>
      {deliveryMethod === "Deliver" && (
        <View className="mt-5">
          <Text className="text-lg font-soraBold mb-5">Delivery Address</Text>
          <Text className="text-md font-soraBold mb-2">JI. Kpg Sutoyo</Text>
          <Text className="text-gray-500">Jl. Kpg Sutoyo, Bilzen, Tanjungbalai</Text>

          <View className="flex-row mt-4 gap-3">
            <View className="flex-row items-center gap-2 border rounded-full px-5 bg-white">
                <Feather name="edit" size={14} color="black" />
                <Text className="font-sora">Edit Address</Text>
            </View>

            <View className="flex-row items-center gap-2 border rounded-full px-5 bg-white">
                <Feather name="edit" size={14} color="black" />
                <Text>Add Note</Text>
            </View>
          </View>
        </View>
      )}

      <View className="flex-row justify-between my-7" style={{ backgroundColor: "white", borderRadius: 12, padding: 12, shadowColor: "#000", shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.2, shadowRadius: 4, elevation: 5, }}>
        <View className=" flex-row items-center">
          <Image source={image} className="w-16 h-16 rounded-lg" />
          <View className="ml-4">
            <Text className="text-lg font-bold">{name}</Text>
            <Text className="text-gray-500"> {title}</Text>
          </View>
        </View>

        <View className="flex-row items-center mt-4">
          <TouchableOpacity onPress={decreaseCount} className="px-4 py-2 bg-white rounded-lg">
            <Text className="text-lg font-bold">-</Text>
          </TouchableOpacity>

          <Text className="mx-4 text-lg font-bold">{count}</Text>

          <TouchableOpacity onPress={increaseCount} className="px-4 py-2 bg-white rounded-lg">
            <Text className="text-lg font-bold">+</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <View className="bg-white p-6 flex-row justify-between rounded-lg">

        <View className="flex-row gap-6">
        <MaterialCommunityIcons name="brightness-percent" size={24} color="#C67C4E" />
        <Text className="font-soraBold">1 Discount is Applies</Text>
        </View>
        <FontAwesomeIcon icon={faAngleRight} size={20} />
      </View>

   
      <View className="mt-5  pt-3">
        <Text className="text-lg font-bold">Payment Summary</Text>

        <View className="flex-row justify-between">
        <Text className="font-sora">Price </Text>
        <Text className="font-soraBold">${price * count}</Text>
        </View>
        <View className="flex-row justify-between mt-3">
        <Text className="font-sora">Delivery Fee</Text>
        <View className="flex-row items-center gap-2">
            <Text className="font-soraBold line-through text-gray-600">$2.0</Text>
            <Text className="font-soraBold text-black">$1.0</Text>
        </View>
        </View>


      </View>


      <View className="flex-row items-center justify-between mt-10">

      <View className="mt-5 flex-row  items-center gap-3">
        <Ionicons name="wallet-outline" size={24} color="#C67C4E" />
        <View>
            <Text className="font-soraBold">Cash/Wallet</Text>
            <Text className="font-soraBold text-sm text-[#C67C4E]">
             ${price * count + 1.0}
            </Text>
        </View>
        </View>
        <FontAwesomeIcon icon={faAngleDown} size={20} color="gray"/>
      </View>
      
      <TouchableOpacity className="bg-[#C67C4E] p-4 mt-5 rounded-xl">
        <Text className="text-white text-center font-bold">Order</Text>
      </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Order;