import { View, Image, Pressable } from "react-native";
import tw from "twrnc";
import { TextWrapper } from "../textwrapper";
import { Ionicons } from "@expo/vector-icons";

export const PlayerCard = () => {
  return (
    <View
      style={tw`border border-gray-200 rounded-lg mb-2 py-4 px-2 bg-white ml-2 w-72`}
    >
      {/* Top Row: Image, Player Name, Position, Add Button */}
      <View style={tw`flex-row items-center justify-between`}>
        {/* Player Image */}
        <Image
          source={require("../../assets/football1.png")}
          style={tw`w-16 h-16 rounded-full mr-3 border-2 border-gray-200`}
        />

        {/* Player Information */}
        <View style={tw`flex-1`}>
          <TextWrapper
            fontWeight="bold"
            textSize="xl"
            style={tw`text-gray-800`}
          >
            S SZmodics
          </TextWrapper>
          <TextWrapper textSize="sm" color="gray" style={tw`mt-1`}>
            Position: <TextWrapper fontWeight="bold">Midfielder</TextWrapper>
          </TextWrapper>
        </View>

        {/* Smaller Add Button */}
        <Pressable
          style={tw`bg-green-500 h-5 w-5 items-center justify-center rounded-full shadow-md`}
        >
          <Ionicons name="add" size={12} color={"white"} />
        </Pressable>
      </View>

      {/* Details Section */}
      <View style={tw`mt-4 border-t border-gray-200 pt-4`}>
        <TextWrapper textSize="sm" color="gray-700">
          Start Date:{" "}
          <TextWrapper fontWeight="bold" textSize="sm" color="gray-800">
            Thursday 16th September @ 12:00
          </TextWrapper>
        </TextWrapper>
        <TextWrapper textSize="sm" color="gray-700" style={tw`mt-1`}>
          Price:{" "}
          <TextWrapper fontWeight="bold" textSize="sm" color="gray-800">
            $0.76
          </TextWrapper>
        </TextWrapper>
        <TextWrapper textSize="sm" color="gray-700" style={tw`mt-1`}>
          Sold:{" "}
          <TextWrapper fontWeight="bold" textSize="sm" color="gray-800">
            0/200,000
          </TextWrapper>
        </TextWrapper>
      </View>

      {/* Status Badge */}
      <View style={tw`mt-4`}>
        <View style={tw`bg-[#8692A6] py-2 px-3 rounded-lg`}>
          <TextWrapper
            color="white"
            textSize="sm"
            style={tw`text-center font-bold`}
          >
            Unavailable
          </TextWrapper>
        </View>
      </View>
    </View>
  );
};
