import React, { useState } from 'react';
import { Text, View, FlatList, Image, TouchableOpacity, SafeAreaView, Button, Alert } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../Navigation/Stack'; 
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

// type FavoriteScreenNavigationProp = NativeStackScreenProps<RootStackParamList, 'Favorite'>;

const Favorite = ({ navigation, route }: any) => {
  const { name, image, price, title, selectedSize } = route.params || {};

  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  
  const handleSelect = (id: number) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(item => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  
  const handleAddToCart = () => {
    const itemsToAdd = selectedItems.length ? [{ id: 1, name, image, price, quantity: 1, title }] : [];
    console.log('Adding to cart:', itemsToAdd);
    Alert.alert("❤ items added to cart. Check Bag");

  
    navigation.navigate("Bag", {
      items: itemsToAdd, 
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#C67C4E" }}>
      <View className="flex-1 p-4 mt-2">

        <View className='flex flex-row items-center mb-8 gap-32'>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                  <FontAwesomeIcon icon={faAngleLeft} size={20} />
                </TouchableOpacity>
        <Text className="text-2xl font-bold ">Favorites</Text>
        </View>

        {/* Check if item exists */}
        {name && image && price ? (
          <View className="flex-row items-center gap-4 p-3 bg-white rounded-lg mb-2 relative">
            <Checkbox
              status={selectedItems.length > 0 ? 'checked' : 'unchecked'}
              onPress={() => handleSelect(1)} // Handle selection
              color="#C67C4E"
            />
            <Image source={image} className="w-12 h-12 rounded-md" />
            <View className="flex-1">
              <Text className="text-lg font-semibold">{name}</Text>
              <Text className="text-sm text-gray-600">{title}</Text>
              <Text className="text-sm text-gray-600">Size:{selectedSize}</Text>
              <Text className="text-sm text-gray-600">Price: ${price}</Text>

            
              {/* <View className="flex-row items-center mt-2 gap-2">
                <TouchableOpacity>
                  <MaterialIcons name="remove-circle-outline" size={24} color="#C67C4E" />
                </TouchableOpacity>

                <Text className="text-lg mx-2">1</Text>

                <TouchableOpacity>
                  <MaterialIcons name="add-circle-outline" size={24} color="#C67C4E" />
                </TouchableOpacity>
              </View> */}
            </View>
          </View>
        ) : (
          <Text className="text-black text-center mb-5">No favorite items yet</Text>
        )}

        <Button
          title="Add to Cart"
          onPress={handleAddToCart}
          disabled={selectedItems.length === 0}
          color="black"
        />
      </View>
               
    </SafeAreaView>
  );
};

export default Favorite;
