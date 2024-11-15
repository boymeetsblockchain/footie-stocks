import { Image, Pressable, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import { TextWrapper } from "../textwrapper";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

interface PlayerIpocardprops {
  onPress: () => void;
}

export const PlayerIpocard = ({ onPress }: PlayerIpocardprops) => {
  return (
    <Pressable
      style={tw`bg-white p-3 rounded-lg shadow-md my-1 relative`}
      onPress={() => router.push("/ipo")}
    >
      {/* Main Card */}
      <View
        style={tw`bg-[#2987F0] rounded-md flex-row p-3 justify-around items-center gap-x-2`}
      >
        <Image
          source={require("../../assets/football1.png")}
          style={tw`h-30 w-30 rounded-md`}
          resizeMode="contain"
        />
        <View>
          <TextWrapper textSize="sm" fontWeight="bold" color="white">
            Player
          </TextWrapper>
          <TextWrapper textSize="xl" fontWeight="bold" color="white">
            3.45
          </TextWrapper>
          <TextWrapper textSize="xs" color="white">
            Position: Midfielder
          </TextWrapper>
          <TextWrapper textSize="xs" color="white">
            S SZmodics
          </TextWrapper>
        </View>
        <TouchableOpacity
          onPress={onPress}
          style={tw`bg-green-500 rounded-full p-1 absolute top-3 right-2`}
        >
          <Ionicons name="add" size={12} color="#2987F0" />
        </TouchableOpacity>
      </View>

      {/* Info Section */}
      <View style={tw`mt-2`}>
        <Pressable onPress={onPress}>
          <TextWrapper color="#2987F0" textSize="sm" style={tw`mb-1`}>
            Learn more about football IPOs here!
          </TextWrapper>
        </Pressable>
        <TextWrapper color="black" fontWeight="bold" textSize="sm">
          Price: $0.76
        </TextWrapper>
      </View>

      {/* Action Buttons */}
      <View style={tw`flex-row items-center justify-between mt-3`}>
        <TouchableOpacity style={tw`bg-green-500 w-1/4 py-1 px-3 rounded-md`}>
          <TextWrapper
            color="white"
            fontWeight="bold"
            style={tw`text-center text-xs`}
          >
            Buy
          </TextWrapper>
        </TouchableOpacity>
        <TouchableOpacity style={tw`bg-[#FF3B30] py-1 px-3 w-1/3 rounded-md`}>
          <TextWrapper
            color="white"
            fontWeight="bold"
            style={tw`text-center text-xs`}
          >
            Sell
          </TextWrapper>
        </TouchableOpacity>
      </View>
    </Pressable>
  );
};
