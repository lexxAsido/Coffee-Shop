import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, Platform, TextInput, Modal } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Navigation/Stack";
import { faAngleDown, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Toggle from "../Components/Toggle";
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

// type BagProps = NativeStackScreenProps<RootStackParamList, "Bag">;
// const Bag: React.FC<BagProps> = ({ route, navigation }) => {

  type CartItem = {
    id: number;
    name: string;
    image: any; 
    price: number;
    quantity: number;
    title: string;
  };
  

  const Bag = ({ navigation, route }: any) => {
  const items: CartItem[] = route?.params?.items ?? [];
  const [deliveryMethod, setDeliveryMethod] = useState("Deliver");
  const [count, setCount] = useState(1);
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [showNoteModal, setShowNoteModal] = useState(false);
  const [address, setAddress] = useState("JI. Kpg Sutoyo, Bilzen, Tanjungbalai");
  const [note, setNote] = useState("");

  const handleToggle = (value: string) => {
    setDeliveryMethod(value);
    if (value === "Pick Up") {
      navigation.navigate("PickUp");
    }
  };

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count > 1 ? count - 1 : 1);

  const handleEditAddress = () => {
    setShowAddressModal(true); 
  };

  const handleEditNote = () => {
    setShowNoteModal(true); 
  };

  const handleSaveAddress = (newAddress: string) => {
    setAddress(newAddress);
    setShowAddressModal(false);
  };

  const handleSaveNote = (newNote: string) => {
    setNote(newNote);
    setShowNoteModal(false); 
  };

  return (
    <SafeAreaView className="flex-1 bg-[#F9F9F9]" style={{paddingHorizontal: Platform.OS === "ios" ? 28 : 20}}>
      <View className="mt-5 flex-row items-center gap-36 mb-7">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesomeIcon icon={faAngleLeft} size={20} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="font-soraBold">Cart</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Toggle onToggle={handleToggle} />
      </View>

      <ScrollView>
        {deliveryMethod === "Deliver" && (
          <View className="mt-5">
            <Text className="text-lg font-soraBold mb-5">Delivery Address</Text>
            <Text className="text-md font-soraBold mb-2">{address}</Text>
            <View className="text-gray-500">
              <Text>{note}</Text>
              </View>

            <View className="flex-row mt-4 gap-3">
              <TouchableOpacity
                style={{
                  paddingHorizontal: Platform.OS === "ios" ? 18 : 12,
                  paddingVertical: Platform.OS === "ios" ? 5 : 3,
                }}
                className="flex-row items-center gap-2 border rounded-full bg-white"
                onPress={handleEditAddress} 
              >
                <Feather name="edit" size={14} color="black" />
                <Text className="font-sora">Edit Address</Text>
              </TouchableOpacity>

              <TouchableOpacity
                className="flex-row items-center gap-2 border rounded-full px-5 bg-white"
                onPress={handleEditNote} 
              >
                <Feather name="edit" size={14} color="black" />
                <Text>Add Note</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

      
        {items.length > 0 ? (
          items.map((item: CartItem) => (
            <View
              key={item.id}
              className="flex-row justify-between my-7"
              style={{
                backgroundColor: "white",
                borderRadius: 12,
                padding: 12,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
                elevation: 5,
              }}
            >
              <View className="flex-row items-center">
                <Image source={item.image} className="w-16 h-16 rounded-lg" />
                <View className="ml-4">
                  <Text className="text-lg font-bold">{item.name}</Text>
                  <Text className="text-gray-500"> {item.title}</Text>
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
          ))
        ) : (
          <Text className="text-center my-5 p-10 bg-[#C67C4E] rounded-lg text-white">No items found</Text>
        )}

        {/* Payment Summary */}
        <View className="bg-white p-6 flex-row justify-between rounded-lg">
          <View className="flex-row gap-6">
            <MaterialCommunityIcons name="brightness-percent" size={24} color="#C67C4E" />
            <Text className="font-soraBold">1 Discount is Applied</Text>
          </View>
          <FontAwesomeIcon icon={faAngleRight} size={20} />
        </View>
        <View className="mt-5 pt-3">
          <Text className="text-lg font-bold">Payment Summary</Text>

          <View className="flex-row justify-between">
            <Text className="font-sora">Price </Text>
            <Text className="font-soraBold">${items.reduce((acc: number, item: CartItem) => acc + item.price, 0) * count}</Text>
          </View>

          <View className="flex-row justify-between mt-3">
            <Text className="font-sora">Delivery Fee</Text>
            <View className="flex-row items-center gap-2">
              <Text className="font-soraBold line-through text-gray-600">$2.0</Text>
              <Text className="font-soraBold text-black">$1.0</Text>
            </View>
          </View>
        </View>

        <View className="flex-row items-center justify-between mt-2">
          <View className="mt-5 flex-row items-center gap-3">
            <Ionicons name="wallet-outline" size={24} color="#C67C4E" />
            <View>
              <Text className="font-soraBold">Cash/Wallet</Text>
              <Text className="font-soraBold text-sm text-[#C67C4E]">
              ${items.reduce((acc: number, item: CartItem) => acc + item.price, 0) * count + 1.0}
              </Text>
            </View>
          </View>
          <FontAwesomeIcon icon={faAngleDown} size={20} color="gray" />
        </View>

        {/* Save Button */}
        <TouchableOpacity className="bg-[#C67C4E] p-4 mt-5 rounded-xl">
          <Text className="text-white text-center font-bold">Order</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Edit Address Modal */}
      <Modal visible={showAddressModal} animationType="slide" transparent={true}>
        <View className="flex-1 justify-center items-center bg-black/70 bg-opacity-50">
          <View className="bg-white p-6 rounded-lg w-80">
            <Text className="text-lg font-bold mb-4">Edit Address</Text>
            <TextInput
              value={address}
              onChangeText={setAddress}
              placeholder="Enter new address"
              style={{ borderBottomWidth: 1, marginBottom: 20 }}
            />
            <TouchableOpacity
              onPress={() => handleSaveAddress(address)}
              className="bg-[#C67C4E] p-4 rounded-lg"
            >
              <Text className="text-white text-center">Save</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setShowAddressModal(false)}
              className="mt-3"
            >
              <Text className="text-center text-gray-500">Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Add Note Modal */}
      <Modal visible={showNoteModal} animationType="slide" transparent={true}>
        <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
          <View className="bg-white p-6 rounded-lg w-80">
            <Text className="text-lg font-bold mb-4">Add Note</Text>
            <TextInput
              value={note}
              onChangeText={setNote}
              placeholder="Enter note"
              style={{ borderBottomWidth: 1, marginBottom: 20 }}
            />
            <TouchableOpacity
              onPress={() => handleSaveNote(note)}
              className="bg-[#C67C4E] p-4 rounded-lg"
            >
              <Text className="text-white text-center">Save</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setShowNoteModal(false)}
              className="mt-3"
            >
              <Text className="text-center text-gray-500">Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Bag;
