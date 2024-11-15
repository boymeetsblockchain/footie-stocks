import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
  Modal,
} from "react-native";
import tw from "twrnc";
import { TextWrapper } from "../../components/textwrapper";
import { SafeViewComponent } from "../../components/safeview";
import { Ionicons } from "@expo/vector-icons";
import { Header } from "../../components/ipo/header";
import { Market } from "../../components/ipo/market";
import { router } from "expo-router";
import { Limit } from "../../components/ipo/buynow";

export default function IPOView() {
  const [activeTab, setActiveTab] = useState<"Limit" | "Market">("Limit");
  const [buyModalVisible, setBuyModalVisible] = useState(false);

  const handleOpenBuyModal = () => setBuyModalVisible(true);
  const handleCloseBuyModal = () => setBuyModalVisible(false);

  return (
    <SafeViewComponent>
      <Header onPress={() => {}} />
      <View style={tw`bg-white p-4 rounded-lg shadow-md my-2 `}>
        <View
          style={tw`bg-[#2987F0] rounded-md flex-row p-4 justify-around items-center gap-x-3 relative`}
        >
          <Image
            source={require("../../assets/football1.png")}
            style={tw`h-30 w-30 rounded-md`}
            resizeMode="contain"
          />
          <View>
            <TextWrapper textSize="lg" fontWeight="bold" color="white">
              Player
            </TextWrapper>
            <TextWrapper textSize="2xl" fontWeight="bold" color="white">
              3.45
            </TextWrapper>
            <TextWrapper textSize="sm" color="white">
              Position: Midfielder
            </TextWrapper>
            <TextWrapper textSize="sm" color="white">
              S SZmodics
            </TextWrapper>
          </View>
          <TouchableOpacity
            style={tw`bg-green-500 rounded-full p-2 absolute top-2 right-3`}
            onPress={handleOpenBuyModal}
          >
            <Ionicons name="add" size={12} color="#2987F0" />
          </TouchableOpacity>
        </View>

        {/* Info Section */}
        <View style={tw`mt-3`}>
          <TextWrapper color="black" fontWeight="bold" textSize="lg">
            Price: $0.76
          </TextWrapper>
        </View>
      </View>
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
      <View style={tw`flex-1`}>
        {activeTab === "Limit" ? <Limit /> : <Market />}
      </View>
    </SafeViewComponent>
  );
}
