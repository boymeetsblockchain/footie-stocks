import { Image, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TextWrapper } from "../textwrapper";
import tw from "twrnc";

// Sample data array
const stocks = [
  {
    id: 1,
    name: "P.Foden",
    role: "Midfielder",
    price: "$85.18",
    change: "-21.00%",
    changeColor: "red",
    icon: require("../../assets/foden.png"),
    statusIcon: require("../../assets/green.png"),
  },
  {
    id: 2,
    name: "K.De Bruyne",
    role: "Midfielder",
    price: "$120.50",
    change: "+15.00%",
    changeColor: "green",
    icon: require("../../assets/football1.png"),
    statusIcon: require("../../assets/green.png"),
  },
  {
    id: 3,
    name: "Bruno",
    role: "Midfielder",
    price: "$120.50",
    change: "+15.00%",
    changeColor: "green",
    icon: require("../../assets/bruno.webp"),
    statusIcon: require("../../assets/red.png"),
  },
];

export const Available = () => {
  return (
    <View style={tw`gap-y-4`}>
      {/* Header */}
      <View style={tw`flex-row items-center`}>
        <TextWrapper
          fontWeight="bold"
          textSize="2xl"
          style={tw`text-gray-800 mt-2`}
        >
          Available Stocks
        </TextWrapper>
        <Ionicons
          name="information-circle-outline"
          color={"#6B7280"}
          size={22}
          style={tw`ml-1`}
        />
      </View>

      {/* Filter Buttons */}
      <View style={tw`flex-row gap-x-4 items-center `}>
        <TextWrapper
          fontWeight="bold"
          textSize="lg"
          style={tw`bg-[#2F66F6] text-center py-2 px-4 rounded-md`}
          color="white"
        >
          All
        </TextWrapper>
        <TextWrapper
          color="red"
          textSize="lg"
          style={tw`bg-white rounded-md  border border-gray-300 py-2 px-4`}
        >
          Most Loses
        </TextWrapper>
        <TextWrapper
          color="green"
          textSize="lg"
          style={tw`bg-white rounded-md  border border-gray-300 py-2 px-4`}
        >
          Top Gainers
        </TextWrapper>
      </View>

      {/* Dynamic Stock List */}
      {stocks.map((stock) => (
        <View
          key={stock.id}
          style={tw`flex-row items-center justify-between bg-white py-3 rounded-sm border-b border-gray-200 mb-1`}
        >
          <View style={tw`items-center  justify-center`}>
            <Image source={stock.icon} style={tw`h-16 w-16 rounded-full`} />
          </View>
          <View style={tw` `}>
            <TextWrapper fontWeight="bold" textSize="lg">
              {stock.name}
            </TextWrapper>
            <TextWrapper color="gray">{stock.role}</TextWrapper>
          </View>
          <View style={tw`items-center flex-1`}>
            <Image source={stock.statusIcon} style={tw`h-8 w-8`} />
          </View>
          <View style={tw` items-end`}>
            <TextWrapper fontWeight="bold" textSize="lg">
              {stock.price}
            </TextWrapper>
            <TextWrapper color={stock.changeColor}>{stock.change}</TextWrapper>
          </View>
        </View>
      ))}
    </View>
  );
};
