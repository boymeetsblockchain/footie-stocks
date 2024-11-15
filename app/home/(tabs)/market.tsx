import { View, Text, ScrollView, Image } from "react-native";
import { SafeViewComponent } from "../../../components/safeview";
import tw from "twrnc";
import { Header } from "../../../components/home/header";
import { TextWrapper } from "../../../components/textwrapper";
import { Player } from "../../../components/home/player";
import { Ionicons } from "@expo/vector-icons";

export const trades = [
  {
    time: "11:03:25 pm",
    type: "Buy",
    status: "New",
    token: "A wan Bissaka",
    price: "$40.49",
    amount: "60.48",
    total: "$100.000",
  },
  {
    time: "11:03:25 pm",
    type: "Sell",
    status: "Fulfill",
    token: "B Fernandes",
    price: "$40.49",
    amount: "60.48",
    total: "$100.000",
  },
  {
    time: "11:03:25 pm",
    type: "Buy",
    status: "New",
    token: "B Fernandes",
    price: "$40.49",
    amount: "60.48",
    total: "$100.000",
  },
  {
    time: "11:03:25 pm",
    type: "Buy",
    status: "New",
    token: "B Fernandes",
    price: "$40.49",
    amount: "60.48",
    total: "$100.000",
  },
  {
    time: "11:03:25 pm",
    type: "Sell",
    status: "New",
    token: "B Fernandes",
    price: "$40.49",
    amount: "60.48",
    total: "$100.000",
  },
  {
    time: "11:03:25 pm",
    type: "Buy",
    status: "New",
    token: "J Lerma",
    price: "$40.49",
    amount: "60.48",
    total: "$100.000",
  },
];

export default function Market() {
  return (
    <SafeViewComponent>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
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
            <TextWrapper
              fontWeight="extraBold"
              textSize="2xl"
              color="black"
              style={tw`mt-2`}
            >
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
                  style={tw`w-1/7 text-center text-black`}
                >
                  {header}
                </TextWrapper>
              ))}
            </View>

            {/* Table Rows */}
            {trades.map((trade, index) => (
              <View
                key={index}
                style={tw`flex-row flex-wrap py-2 border-b border-gray-200`}
              >
                <TextWrapper
                  textSize="xs"
                  style={tw`w-1/7 text-center text-black`}
                >
                  {trade.time}
                </TextWrapper>
                <TextWrapper
                  textSize="xs"
                  style={tw`w-1/7 text-center text-black`}
                >
                  {trade.type}
                </TextWrapper>
                <TextWrapper
                  textSize="xs"
                  style={tw`w-1/7 text-center text-black`}
                >
                  {trade.status}
                </TextWrapper>
                <TextWrapper
                  textSize="xs"
                  style={tw`w-1/7 text-center text-black`}
                >
                  {trade.token}
                </TextWrapper>
                <TextWrapper
                  textSize="xs"
                  style={tw`w-1/7 text-center text-black`}
                >
                  {trade.price}
                </TextWrapper>
                <TextWrapper
                  textSize="xs"
                  style={tw`w-1/7 text-center text-black`}
                >
                  {trade.amount}
                </TextWrapper>
                <TextWrapper
                  textSize="xs"
                  style={tw`w-1/7 text-center text-black`}
                >
                  {trade.total}
                </TextWrapper>
              </View>
            ))}
          </View>

          {/* Enlarged Chart Image */}
          <View style={tw`items-center mt-4`}>
            <Image
              source={require("../../../assets/chart.png")}
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
