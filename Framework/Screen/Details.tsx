import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useState } from "react";
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Navigation/Stack";

type DetailsProps = NativeStackScreenProps<RootStackParamList, "Details">;

const Details: React.FC<DetailsProps> = ({ route, navigation }) => {
  const { name, image, description, label, title, rating, price } = route.params;
  const [selectedSize, setSelectedSize] = useState("M");

  const sizes = ["S", "M", "L"];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F9F9F9" }}>
      <View className="mt-14 flex-row items-center justify-between mx-10 mb-7">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesomeIcon icon={faAngleLeft} size={20} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Text className="font-soraBold">Details</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <MaterialIcons name="favorite-border" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={{ flex: 1, padding: 20 }}>
          <Image source={image} style={{ width: "100%", height: 250, borderRadius: 12 }} />
          <Text style={{ fontSize: 24, marginTop: 20 }} className="font-soraBold">
            {name}
          </Text>

         

        <View className='flex-row justify-between '>
            <Text style={{ color: '#A2A2A2', marginVertical: 5 }} className='font-sora'>{label}</Text>
            <View className='flex-row items-center justify-between'>
                <Image source={require("../../assets/motorbike.png")} style={{width:"16%", height:20,}} tintColor={"#C67C4E"}/>
                <Image source={require("../../assets/beans.png")} style={{width:"15%", height:20}} tintColor={"#C67C4E"}/>
                <Image source={require("../../assets/package.png")} style={{width:"15%", height:20}} tintColor={"#C67C4E"}/>
            </View>
            </View>

          <Text style={{ fontSize: 16, color: "#C67C4E" }}>⭐ {rating}</Text>

          <View className="border-t-2 border-gray-200 mt-3 mb-5">
            <Text className="font-soraBold mt-3">Description:</Text>
            <Text style={{ marginVertical: 5 }} className="font-sora text-sm">
              {description}
            </Text>
          </View>

          <View>
            <Text className="font-soraBold mt-3">Size</Text>
            <View className="flex-row justify-evenly mt-3">
              {sizes.map((size) => (
                <TouchableOpacity
                  key={size}
                  onPress={() => setSelectedSize(size)}
                  className={`py-2 px-8 rounded-md text-sm ${
                    selectedSize === size ? "text-white border-[#C67C4E] border" : "bg-white text-black"
                  }`}
                >
                  <Text className="text-sm">{size}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View className="flex-row justify-between items-center mt-24">
            <View>
              <Text className="text-gray-400">Price</Text>
              <Text style={{ fontSize: 16, fontWeight: "bold" }} className="text-[#C67C4E]">${price}</Text>
            </View>

            <TouchableOpacity
              style={{ backgroundColor: "#C67C4E", borderRadius: 8, alignItems: "center" }}
              className="px-24 py-3"
              onPress={() =>
                navigation.navigate("Order", {
                  name,
                  image,
                  price,
                  title,
                })
              }
            >
              <Text style={{ color: "white", fontSize: 18 }} className="font-soraBold">
                Buy Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;
