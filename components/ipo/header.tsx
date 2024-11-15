import { View, TextInput, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import tw from "twrnc";

interface HeaderProps {
  onPress: () => void;
}
export const Header = ({ onPress }: HeaderProps) => {
  return (
    <View style={tw`flex-row items-center py-4  bg-white `}>
      {/* User Icon */}
      <TouchableOpacity style={tw`py-2`}>
        <Image source={require("../../assets/football.png")} />
      </TouchableOpacity>

      {/* Search Bar */}
      <View
        style={tw`flex-1 flex-row items-center bg-[#F0F5FA] rounded-lg px-3 mx-3`}
      >
        <Ionicons name="search-outline" size={16} color="gray" />
        <TextInput
          placeholder="Search Player"
          placeholderTextColor="gray"
          style={[
            { fontFamily: "Manrope-Regular" },
            tw`flex-1 ml-2 py-0.5 text-base text-black`,
          ]}
        />
      </View>

      {/* Notification Icon */}
      <TouchableOpacity style={tw`p-2`}>
        <Ionicons name="filter" size={30} color="gray" onPress={onPress} />
      </TouchableOpacity>
    </View>
  );
};
