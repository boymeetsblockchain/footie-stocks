import React from "react";
import { View } from "react-native";
import { TextWrapper } from "../textwrapper";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";

const trades = [
  { time: "5:47:40 pm", price: "$2.50", type: "Sell" },
  { time: "5:47:40 pm", price: "$2.50", type: "Buy" },
  { time: "5:47:40 pm", price: "$2.50", type: "Buy" },
];

export const Recent = () => {
  return (
    <View style={tw`p-4 bg-white`}>
      {/* Header */}
      <View style={tw`flex-row items-center text-black`}>
        <TextWrapper fontWeight="bold" textSize="lg">
          Recent Trades{" "}
        </TextWrapper>
        <Ionicons
          name="information-circle-outline"
          color={"#6B7280"}
          size={16}
          style={tw`ml-1`}
        />
      </View>

      {/* Table Header */}
      <View style={tw`flex-row mt-4 pb-2 border-b border-gray-300`}>
        <TextWrapper
          fontWeight="bold"
          textSize="sm"
          style={tw`flex-1 text-gray-500`}
        >
          TIME
        </TextWrapper>
        <TextWrapper
          fontWeight="bold"
          textSize="sm"
          style={tw`flex-1 text-gray-500`}
        >
          PRICE
        </TextWrapper>
        <TextWrapper
          fontWeight="bold"
          textSize="sm"
          style={tw`flex-1 text-gray-500`}
        >
          TYPE
        </TextWrapper>
      </View>

      {/* Table Rows */}
      {trades.map((trade, index) => (
        <View key={index} style={tw`flex-row py-2 border-b border-gray-200`}>
          <TextWrapper textSize="sm" style={tw`flex-1 text-black`}>
            {trade.time}
          </TextWrapper>
          <TextWrapper
            textSize="sm"
            style={tw`flex-1 ${
              trade.type === "Buy" ? "text-green-600" : "text-red-600"
            } font-bold`}
          >
            {trade.price}
          </TextWrapper>
          <TextWrapper textSize="sm" style={tw`flex-1 text-black`}>
            {trade.type}
          </TextWrapper>
        </View>
      ))}
    </View>
  );
};
