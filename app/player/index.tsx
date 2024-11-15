import React, { useState } from "react";
import { View, Image, Pressable } from "react-native";
import { SafeViewComponent } from "../../components/safeview";
import { TextWrapper } from "../../components/textwrapper";
import { Header } from "../../components/home/header";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";
import { Limit } from "../../components/player/limit";
import { Market } from "../../components/player/market";
import { router } from "expo-router";

export default function PlayerView() {
  const [activeTab, setActiveTab] = useState<"Limit" | "Market">("Limit");

  return (
    <SafeViewComponent>
      <Header />
      <View
        style={tw`border border-gray-200 rounded-lg p-4 bg-white  my-2 relative`}
      >
        {/* Top Section: Player Info and Add Button */}
        <View style={tw`flex-row items-center`}>
          <Image
            source={require("../../assets/foden.png")}
            style={tw`w-14 h-14 rounded-full border border-gray-300`}
          />

          <View style={tw`flex-1 ml-2`}>
            <TextWrapper
              fontWeight="bold"
              textSize="xl"
              style={tw`text-gray-800`}
            >
              P.Foden
            </TextWrapper>
            <TextWrapper textSize="sm" color="gray-500">
              Position: <TextWrapper fontWeight="bold">Midfielder</TextWrapper>
            </TextWrapper>
          </View>

          {/* Smaller Plus Button in the Top Right */}
          <Pressable
            style={tw`bg-green-500 h-6 w-6 items-center justify-center rounded-full shadow absolute top-2 right-2`}
            onPress={() => alert("Added to watch list")}
          >
            <Ionicons name="add" size={14} color={"white"} />
          </Pressable>
        </View>

        {/* Player Stats Section */}
        <View
          style={tw`mt-4 border-t border-gray-100 pt-3 flex-row justify-between`}
        >
          <View>
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
            <TextWrapper textSize="xs" color="black">
              Player Per Stock:
            </TextWrapper>
            <TextWrapper fontWeight="bold" textSize="sm" color="black">
              $6.08
            </TextWrapper>
          </View>
          <View style={tw`mr-25`}>
            <TextWrapper textSize="xs" color="black">
              Current Price
            </TextWrapper>
            <TextWrapper fontWeight="bold" textSize="sm" color="black">
              $6.08
            </TextWrapper>
            <TextWrapper textSize="xs" color="black" style={tw`mt-2`}>
              Market Cap:
            </TextWrapper>
            <TextWrapper fontWeight="bold" textSize="sm">
              $56,558
            </TextWrapper>
          </View>
        </View>
      </View>

      {/* Tab Switcher */}
      <View style={tw`flex-row items-center justify-between mx-1 my-3`}>
        <Pressable
          onPress={() => setActiveTab("Limit")}
          style={[tw`py-2 flex-1 items-center`, activeTab === "Limit" && tw``]}
        >
          <TextWrapper
            fontWeight="bold"
            textSize="xl"
            color={activeTab === "Limit" ? "black" : "gray"}
          >
            Limit
          </TextWrapper>
        </Pressable>

        <Pressable
          onPress={() => setActiveTab("Market")}
          style={[
            tw`py-2 flex-1 items-center`,
            activeTab === "Market" && tw` `,
          ]}
        >
          <TextWrapper
            fontWeight="bold"
            textSize="xl"
            color={activeTab === "Market" ? "black" : "gray"}
          >
            Market
          </TextWrapper>
        </Pressable>

        <Pressable
          style={tw`border ml-10  items-center py-1.5 px-3 rounded-md`}
          onPress={() => router.push("/deposit")}
        >
          <TextWrapper
            style={tw`text-center`}
            fontWeight="bold"
            textSize="xl"
            color="green-600"
          >
            Deposit
          </TextWrapper>
        </Pressable>
      </View>

      {/* Conditional Rendering of Tab Content */}
      <View style={tw`flex-1`}>
        {activeTab === "Limit" ? <Limit /> : <Market />}
      </View>
    </SafeViewComponent>
  );
}
