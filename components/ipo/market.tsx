import { Modal, ScrollView, TouchableOpacity, View } from "react-native";
import { TextWrapper } from "../textwrapper";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";
import { useState } from "react";

export const Market = () => {
  const [isBuyModalVisible, setIsBuyModalVisible] = useState(false);

  const openBuyModal = () => setIsBuyModalVisible(true);
  const closeBuyModal = () => setIsBuyModalVisible(false);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={tw`p-4 bg-white rounded-lg shadow-lg`}>
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
            onPress={openBuyModal}
          >
            <TextWrapper
              style={tw`text-center`}
              color="white" // Change text color to white for better contrast
              fontWeight="bold"
            >
              Buy
            </TextWrapper>
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        visible={isBuyModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={closeBuyModal}
      >
        <View
          style={tw`flex-1 justify-center items-center bg-black bg-opacity-70`}
        >
          <View style={tw`bg-white p-6 rounded-lg w-11/12 shadow-md`}>
            <View style={tw`items-center mb-4`}>
              <View
                style={tw`bg-[#2887F1] rounded-full h-20 w-20 items-center justify-center mb-2`}
              >
                <Ionicons name="checkmark" size={40} color={"white"} />
              </View>
            </View>
            <TextWrapper
              fontWeight="bold"
              color="#344154"
              textSize="lg"
              style={tw`mb-2n text-center`}
            >
              Success!!!
            </TextWrapper>
            <TextWrapper style={tw`text-center text-gray-600 mb-4`}>
              You've bought IPO stock! Your football stocks 🤗 🤩 portfolio is
              growing!
            </TextWrapper>
            <TouchableOpacity
              style={tw`bg-blue-600 rounded-lg py-2 mt-4`} // Darker blue for better visibility
              onPress={closeBuyModal}
            >
              <TextWrapper style={tw`text-white font-bold text-center`}>
                Done
              </TextWrapper>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};
