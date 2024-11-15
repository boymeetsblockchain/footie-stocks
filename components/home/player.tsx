import { Image, Pressable, View } from "react-native";
import tw from "twrnc";
import { TextWrapper } from "../textwrapper";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export const Player = () => {
  return (
    <Pressable
      style={tw`border border-gray-200 rounded-lg px-4 py-3 bg-white my-2`}
      onPress={() => router.push("/player/")}
    >
      {/* Top Section: Player Info and Add Button */}
      <View style={tw`flex-row items-center justify-between`}>
        <Image
          source={require("../../assets/foden.png")}
          style={tw`w-14 h-14 rounded-full border border-gray-300`}
        />

        <View style={tw`flex-1 ml-2`}>
          <TextWrapper
            fontWeight="bold"
            textSize="lg"
            style={tw`text-gray-800`}
          >
            P.Foden
          </TextWrapper>
          <TextWrapper textSize="xs" color="gray-500">
            Position: <TextWrapper fontWeight="bold">Midfielder</TextWrapper>
          </TextWrapper>
        </View>

        {/* Smaller Plus Icon */}
        <Pressable
          style={tw`bg-green-500 h-5 w-5 items-center justify-center rounded-full`}
          onPress={() => alert("Added to watch list")}
        >
          <Ionicons name="add" size={12} color={"white"} />
        </Pressable>
      </View>

      {/* Player Stats Section */}
      <View
        style={tw`mt-4 border-t border-gray-100 pt-3 flex-row justify-between`}
      >
        <View style={tw`flex-1`}>
          <TextWrapper textSize="xs" color="gray-600">
            Total Supply:
          </TextWrapper>
          <TextWrapper fontWeight="bold" textSize="sm" color="gray-800">
            25,873.58
          </TextWrapper>
          <TextWrapper textSize="xs" color="gray-600" style={tw`mt-2`}>
            24 Hour Change:
          </TextWrapper>
          <TextWrapper fontWeight="bold" textSize="sm" color="green">
            +15.67%
          </TextWrapper>
        </View>

        <View style={tw`flex-1`}>
          <TextWrapper textSize="xs" color="gray-600">
            Player Per Stock:
          </TextWrapper>
          <TextWrapper fontWeight="bold" textSize="sm" color="black">
            $6.08
          </TextWrapper>
          <TextWrapper textSize="xs" color="gray-600" style={tw`mt-2`}>
            Market Cap:
          </TextWrapper>
          <TextWrapper fontWeight="bold" textSize="sm" color="gray-800">
            $56,558
          </TextWrapper>
        </View>
      </View>

      {/* Pricing Section */}
      <View
        style={tw`mt-4 border-t border-gray-100 pt-3 flex-row gap-x-6  justify-between`}
      >
        <View style={tw`flex-1`}>
          <TextWrapper textSize="sm" color="gray-600">
            Buy Price
          </TextWrapper>
          <Pressable style={tw`bg-green-600 rounded-lg py-1 mt-1`}>
            <TextWrapper
              color="black"
              style={tw`text-center`}
              fontWeight="bold"
              textSize="sm"
            >
              $25.54
            </TextWrapper>
          </Pressable>
        </View>

        <View style={tw`flex-1`}>
          <TextWrapper textSize="sm" color="gray-600">
            Sell Price
          </TextWrapper>
          <Pressable style={tw`bg-red-600 rounded-lg py-1 mt-1`}>
            <TextWrapper
              color="black"
              fontWeight="bold"
              textSize="sm"
              style={tw`text-center`}
            >
              $25.24
            </TextWrapper>
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};
