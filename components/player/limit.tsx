import { ScrollView, TouchableOpacity, View } from "react-native";
import { TextWrapper } from "../textwrapper";
import tw from "twrnc";
import { Recent } from "./recent";

export const Limit = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={tw` bg-white rounded-lg shadow-lg`}>
        {/* Available Token Header */}
        <TextWrapper
          fontWeight="bold"
          textSize="lg"
          style={tw`text-gray-800 mb-3`}
        >
          Cash Balance: $0.00 Eth
        </TextWrapper>

        {/* Amount Range Display */}
        <TextWrapper
          fontWeight="bold"
          style={tw`bg-gray-200 text-center py-2 rounded-md mb-2 text-gray-700`}
        >
          Amount 0.01-100001
        </TextWrapper>

        {/* Total Amount Section */}
        <TextWrapper
          fontWeight="bold"
          textSize="base"
          style={tw`text-gray-800 mt-2 mb-1`}
        >
          Total
        </TextWrapper>
        <TextWrapper
          fontWeight="bold"
          textSize="lg"
          style={tw`bg-gray-200 text-center py-2 rounded-md mb-4 text-gray-800`}
        >
          0.00000
        </TextWrapper>

        {/* Buy and Sell Buttons */}
        <View style={tw`flex-row justify-between mb-6`}>
          <TouchableOpacity
            style={tw`flex-1 py-3 rounded-md bg-green-600 mr-2`}
          >
            <TextWrapper
              style={tw`text-center`}
              color="white"
              fontWeight="bold"
            >
              Buy
            </TextWrapper>
          </TouchableOpacity>
          <TouchableOpacity style={tw`flex-1 py-3 rounded-md bg-red-600 ml-2`}>
            <TextWrapper
              style={tw`text-center`}
              color="white"
              fontWeight="bold"
            >
              Sell
            </TextWrapper>
          </TouchableOpacity>
        </View>

        {/* Recent Trades Section */}
        <Recent />
      </View>
    </ScrollView>
  );
};
