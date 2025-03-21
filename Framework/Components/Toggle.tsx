import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";

interface ToggleProps {
  onToggle: (value: string) => void;
}

const Toggle: React.FC<ToggleProps> = ({ onToggle }) => {
  const [selected, setSelected] = useState("Deliver");

  const handlePress = (value: string) => {
    setSelected(value);
    onToggle(value); // Notify the parent component
  };

  return (
    <View className="flex-row justify-between bg-gray-200 p-1 rounded-lg">
      {/* Deliver Button */}
      <TouchableOpacity
        className={`flex-1 p-3 rounded-lg ${
          selected === "Deliver" ? "bg-[#C67C4E]" : "bg-transparent"
        }`}
        onPress={() => handlePress("Deliver")}
      >
        <Text className={`text-center ${selected === "Deliver" ? "text-white" : "text-black"}`}>
          Deliver
        </Text>
      </TouchableOpacity>

      {/* Pick Up Button */}
      <TouchableOpacity
        className={`flex-1 p-3 rounded-lg ${
          selected === "Pick Up" ? "bg-[#C67C4E]" : "bg-transparent"
        }`}
        onPress={() => handlePress("Pick Up")}
      >
        <Text className={`text-center ${selected === "Pick Up" ? "text-white" : "text-black"}`}>
          Pick Up
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Toggle;
