import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Pressable,
  TextInput,
} from "react-native";
import { SafeViewComponent } from "../../components/safeview";
import { TextWrapper } from "../../components/textwrapper";
import { BackButton } from "../../components/back";
import tw from "twrnc";
import { router } from "expo-router";

export default function Deposit() {
  const [modalVisible, setModalVisible] = useState(false);

  const handleDepositWithBank = () => {
    setModalVisible(true);
  };

  return (
    <SafeViewComponent>
      <BackButton text="Deposit" />
      <View style={tw`p-4 gap-y-6`}>
        {/* Deposit with Bank/Card Option */}
        <View style={tw`shadow-md gap-y-3 rounded-lg p-5 bg-white`}>
          <TextWrapper
            fontWeight="bold"
            textSize="xl"
            style={tw`text-gray-800`}
          >
            Deposit with Card Bank
          </TextWrapper>
          <TextWrapper textSize="base" style={tw`text-gray-600`}>
            Deposit with your debit card, credit card, or Visa Card.
          </TextWrapper>
          <TouchableOpacity
            style={tw`bg-[#2887F1] py-3 px-4 rounded-md w-full mt-4`}
            onPress={handleDepositWithBank}
          >
            <TextWrapper color="white" style={tw`text-center`} textSize="lg">
              Deposit with bank or card
            </TextWrapper>
          </TouchableOpacity>
        </View>

        {/* Deposit with Crypto Option */}
        <View style={tw`shadow-md gap-y-3 rounded-lg p-5 bg-white`}>
          <TextWrapper
            fontWeight="bold"
            textSize="xl"
            style={tw`text-gray-800`}
          >
            Deposit with Crypto
          </TextWrapper>
          <TextWrapper textSize="base" style={tw`text-gray-600`}>
            Deposit with a wide range of cryptocurrencies.
          </TextWrapper>
          <TouchableOpacity
            style={tw`bg-gray-400 py-3 px-4 rounded-md w-full mt-4`}
            disabled
          >
            <TextWrapper color="white" style={tw`text-center`} textSize="lg">
              Deposit with Crypto (coming soon)
            </TextWrapper>
          </TouchableOpacity>
        </View>

        {/* KYC Reminder */}
        <View style={tw`mt-6`}>
          <Pressable style={tw`w-full bg-gray-300 py-2 px-4 rounded-lg`}>
            <TextWrapper color="red" style={tw`text-center`}>
              You must complete KYC before you can deposit
            </TextWrapper>
          </Pressable>
        </View>

        {/* Modal for Deposit with Bank/Card */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View
            style={tw`flex-1 justify-center items-center bg-black bg-opacity-50`}
          >
            <View style={tw`w-4/5 bg-white rounded-lg p-6 shadow-lg`}>
              <View style={tw`flex-row justify-between items-center mb-4`}>
                <TextWrapper fontWeight="bold" textSize="xl">
                  Complete KYC
                </TextWrapper>
                <Pressable onPress={() => setModalVisible(false)}>
                  <TextWrapper>X</TextWrapper>
                </Pressable>
              </View>

              {/* Form Fields */}
              <View style={tw`gap-y-3`}>
                <TextWrapper fontWeight="bold">Name</TextWrapper>
                <TextInput
                  placeholder="Enter your name"
                  style={tw`border border-gray-300 rounded-md p-2`}
                />

                <TextWrapper fontWeight="bold">Phone Number</TextWrapper>
                <TextInput
                  placeholder="Enter your phone number"
                  style={tw`border border-gray-300 rounded-md p-2`}
                  keyboardType="phone-pad"
                />

                <TextWrapper fontWeight="bold">Address</TextWrapper>
                <TextInput
                  placeholder="Enter your address"
                  style={tw`border border-gray-300 rounded-md p-2`}
                />

                <TextWrapper fontWeight="bold">Date of Birth</TextWrapper>
                <TextInput
                  placeholder="DD/MM/YYYY"
                  style={tw`border border-gray-300 rounded-md p-2`}
                  keyboardType="numeric"
                />
              </View>

              {/* Confirm Button */}
              <TouchableOpacity
                style={tw`bg-[#2887F1] py-3 px-4 rounded-md w-full mt-6`}
                onPress={() => {
                  setModalVisible(false);
                  alert("KYC information submitted!");
                  router.push("/deposit/payment");
                }}
              >
                <TextWrapper
                  color="white"
                  style={tw`text-center`}
                  textSize="lg"
                >
                  Submit
                </TextWrapper>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </SafeViewComponent>
  );
}
