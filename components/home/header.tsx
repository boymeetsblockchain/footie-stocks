import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TextWrapper } from "../textwrapper";
import tw from "twrnc";
import { router } from "expo-router";

const stockData = [
  { name: "JGOMEZ", price: "$0.55", change: "0.00%", color: "black" },
  { name: "MOLISE", price: "$0.75", change: "-66.00%", color: "red" },
  { name: "CHUDSONODOI", price: "$8.99", change: "0.00%", color: "black" },
];

export const Header = () => {
  return (
    <View>
      <View style={tw`flex-row items-center  py-4 bg-white`}>
        {/* User Icon */}
        <TouchableOpacity
          style={tw`py-2`}
          onPress={() => router.push("/profile")}
        >
          <Image source={require("../../assets/football.png")} />
        </TouchableOpacity>

        {/* Search Bar */}
        <Pressable
          onPress={() => router.push("/player/search")}
          style={tw`flex-1 flex-row items-center bg-[#F0F5FA] rounded-lg px-3 mx-3`}
        >
          <Ionicons name="search-outline" size={16} color="gray" />
          <TextInput
            placeholder="Search Player"
            placeholderTextColor="gray"
            style={[
              { fontFamily: "Manrope-Regular" },
              tw`flex-1 ml-2 py-0.5 w-full text-base text-black`,
            ]}
          />
        </Pressable>

        {/* Notification Icon */}
        <View style={tw`flex-row`}>
          <TouchableOpacity style={tw``}>
            <Ionicons
              name="megaphone-outline"
              size={30}
              color="gray"
              onPress={() => router.push("/notifications")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={tw`p-1`}>
            <Ionicons
              name="notifications-outline"
              size={30}
              color="gray"
              onPress={() => router.push("/notifications")}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Live Price Slider */}
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={tw`bg-gray-200 z-10 border px-1 mt-[-20px]  border-gray-200 py-2 `}
      >
        {stockData.map((stock, index) => (
          <View key={index} style={tw`flex-row items-center px-4`}>
            <TextWrapper
              fontWeight="bold"
              textSize="sm"
              style={tw`text-gray-800`}
            >
              {stock.name}
            </TextWrapper>
            <TextWrapper textSize="sm" style={tw`ml-1 text-gray-800`}>
              {stock.price}
            </TextWrapper>
            <TextWrapper textSize="sm" style={tw`ml-1`} color={stock.color}>
              {stock.change}
            </TextWrapper>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
