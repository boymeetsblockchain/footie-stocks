import { View, Text, ScrollView, Image } from "react-native";
import { SafeViewComponent } from "../../components/safeview";
import { PlayerCard } from "../../components/home/card";
import { Player } from "../../components/home/player";
import { TextWrapper } from "../../components/textwrapper";
import { trades } from "../home/(tabs)/market";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";

export default function Portfolio() {
  return (
    <SafeViewComponent>
      <ScrollView>
        <Player />

        <View style={tw`flex-1 gap-y-2 p-2`}>
          {/* Market Filter Section */}
          <View style={tw`my-1 flex-row gap-x-2 items-center`}>
            <TextWrapper
              fontWeight="bold"
              textSize="xs"
              style={tw`bg-[#2F66F6] text-center p-1 rounded-md`}
              color="white"
            >
              All
            </TextWrapper>
            <TextWrapper
              color="black"
              textSize="xs"
              style={tw`bg-gray-200 rounded-md shadow-md p-1`}
            >
              Most Trade
            </TextWrapper>
            <TextWrapper
              color="black"
              textSize="xs"
              style={tw`bg-gray-200 rounded-md shadow-md p-1`}
            >
              Most Lost
            </TextWrapper>
            <TextWrapper
              color="black"
              textSize="xs"
              style={tw`bg-gray-200 rounded-md shadow-md p-1`}
            >
              Top Gainers
            </TextWrapper>
          </View>

          {/* Market Activity Header and Table */}
          <View style={tw`gap-y-2`}>
            <TextWrapper fontWeight="extraBold" textSize="xl" color="black">
              Market Activity
            </TextWrapper>

            {/* Table Header */}
            <View
              style={tw`flex-row flex-wrap mt-2 py-1 border-b border-gray-300`}
            >
              {[
                "TIME",
                "TYPE",
                "STATUS",
                "TOKEN",
                "PRICE",
                "AMOUNT",
                "TOTAL",
              ].map((header, idx) => (
                <TextWrapper
                  key={idx}
                  fontWeight="bold"
                  textSize="xs"
                  style={tw`w-[14%] text-center text-black`} // Adjusted width
                >
                  {header}
                </TextWrapper>
              ))}
            </View>

            {trades?.map((trade, index) => (
              <View
                key={index}
                style={tw`flex-row flex-wrap py-2 border-b border-gray-200`}
              >
                <TextWrapper
                  textSize="xs"
                  style={tw`w-[14%] text-center text-black`}
                >
                  {trade.time}
                </TextWrapper>
                <TextWrapper
                  textSize="xs"
                  style={tw`w-[14%] text-center text-black`}
                >
                  {trade.type}
                </TextWrapper>
                <TextWrapper
                  textSize="xs"
                  style={tw`w-[14%] text-center text-black`}
                >
                  {trade.status}
                </TextWrapper>
                <TextWrapper
                  textSize="xs"
                  style={tw`w-[14%] text-center text-black`}
                >
                  {trade.token}
                </TextWrapper>
                <TextWrapper
                  textSize="xs"
                  style={tw`w-[14%] text-center text-black`}
                >
                  {trade.price}
                </TextWrapper>
                <TextWrapper
                  textSize="xs"
                  style={tw`w-[14%] text-center text-black`}
                >
                  {trade.amount}
                </TextWrapper>
                <TextWrapper
                  textSize="xs"
                  style={tw`w-[14%] text-center text-black`}
                >
                  {trade.total}
                </TextWrapper>
              </View>
            ))}
          </View>

          {/* Enlarged Chart Image */}
          <View style={tw`items-center mt-4`}>
            <Image
              source={require("../../assets/chart.png")}
              style={tw`w-full h-72`}
              resizeMode="contain"
            />
          </View>

          {/* Player Stock Section */}
          <View style={tw`mt-6 px-2`}>
            <View style={tw`flex-row items-center`}>
              <TextWrapper fontWeight="bold" textSize="2xl" color="black">
                Player Stock Market
              </TextWrapper>
              <Ionicons
                name="information-circle-outline"
                color={"#6B7280"}
                size={24}
                style={tw`ml-1`}
              />
            </View>
            <TextWrapper textSize="xs" color="gray-600" style={tw`mt-1`}>
              Real Time Price:
            </TextWrapper>
          </View>

          {/* Player Components */}
          <View style={tw`px-2`}>
            <Player />
            <Player />
            <Player />
          </View>
        </View>
      </ScrollView>
    </SafeViewComponent>
  );
}
