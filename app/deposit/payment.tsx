import { View, Text, Image, TextInput } from "react-native";
import { SafeViewComponent } from "../../components/safeview";
import { BackButton } from "../../components/back";
import tw from "twrnc";
import { TextWrapper } from "../../components/textwrapper";
import { CustomButton } from "../../components/button";
import { router } from "expo-router";

export default function PaymentPage() {
  return (
    <SafeViewComponent>
      <BackButton text="Deposit" />
      <View style={tw`px-4 flex-1`}>
        {/* Payout Method Section */}
        <View
          style={tw`flex-row justify-between border p-4 border-dashed border-gray-300 rounded-lg my-4 bg-gray-100`}
        >
          <TextWrapper>Top up</TextWrapper>
          <View style={tw`flex-row gap-x-3 items-center`}>
            <Image
              style={tw`h-5 w-10 rounded-full`}
              source={require("../../assets/visa.png")}
              resizeMode="contain"
            />
            <Image
              style={tw`h-5 w-10 rounded-full`}
              source={require("../../assets/master.png")}
              resizeMode="contain"
            />
            <Image
              style={tw`h-5 w-10 rounded-full`}
              source={require("../../assets/amex.png")}
              resizeMode="contain"
            />
            <Image
              style={tw`h-5 w-10 rounded-full`}
              source={require("../../assets/Discover.png")}
              resizeMode="contain"
            />
          </View>
        </View>

        {/* Account Information Form */}
        <View style={tw`my-6`}>
          <TextWrapper fontWeight="bold" style={tw`mb-2`}>
            Name on Card
          </TextWrapper>
          <TextInput
            placeholder="John Doe"
            style={tw`border w-full border-gray-300 rounded-lg p-3 text-base mb-4`}
          />

          <TextWrapper fontWeight="bold" style={tw`mb-2`}>
            Card Number
          </TextWrapper>
          <TextInput
            placeholder="xxxx xxxx xxxx xxxx"
            keyboardType="numeric"
            style={tw`border w-full border-gray-300 rounded-lg p-3 text-base mb-4`}
          />

          {/* Expiration and CVC Section */}
          <View style={tw`flex-row gap-x-3`}>
            <View style={tw`flex-1`}>
              <TextWrapper fontWeight="bold" style={tw`mb-2`}>
                Expiration
              </TextWrapper>
              <TextInput
                placeholder="MM/YY"
                keyboardType="numeric"
                style={tw`border w-full border-gray-300 rounded-lg p-3 text-base`}
              />
            </View>
            <View style={tw`flex-1`}>
              <TextWrapper fontWeight="bold" style={tw`mb-2`}>
                CVC
              </TextWrapper>
              <TextInput
                placeholder="CVC"
                keyboardType="numeric"
                style={tw`border w-full border-gray-300 rounded-lg p-3 text-base`}
              />
            </View>
          </View>

          {/* Postal Code Section */}
          <View style={tw`my-6`}>
            <TextWrapper fontWeight="bold" style={tw`mb-2`}>
              Postal Code
            </TextWrapper>
            <TextInput
              placeholder="Postal Code"
              keyboardType="numeric"
              style={tw`border w-full border-gray-300 rounded-lg p-3 text-base`}
            />
          </View>
        </View>
      </View>

      <CustomButton
        title="Deposit"
        onPress={() => router.push("/deposit/success")}
      />
    </SafeViewComponent>
  );
}
