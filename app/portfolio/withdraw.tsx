import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import { SafeViewComponent } from "../../components/safeview";
import { BackButton } from "../../components/back";
import tw from "twrnc";
import { TextWrapper } from "../../components/textwrapper";
import { CustomButton } from "../../components/button";
import { router } from "expo-router";

export default function PaymentPage() {
  return (
    <SafeViewComponent>
      <BackButton text="Withdraw" />
      <ScrollView contentContainerStyle={tw`px-4 pb-10 flex-grow `}>
        {/* Account Information Form */}
        <View style={tw`my-6`}>
          {/* Name on Card */}
          <TextWrapper fontWeight="bold" style={tw`mb-2 text-gray-700`}>
            Name on Card
          </TextWrapper>
          <TextInput
            placeholder="John Doe"
            style={tw`border w-full border-gray-300 rounded-md p-4 text-base mb-4 bg-gray-50`}
          />

          {/* Card Number with Brand Logos */}
          <TextWrapper fontWeight="bold" style={tw`mb-2 text-gray-700`}>
            Card Number
          </TextWrapper>
          <View
            style={tw`flex-row  border  justify-between border-gray-300 rounded-md px-2 py-3 mb-4 bg-gray-50`}
          >
            <TextInput
              placeholder="0000 0000 0000"
              keyboardType="phone-pad"
              style={tw`flex-grow text-base`}
            />
            <View style={tw`flex-row gap-x-2 ml-2`}>
              <Image
                source={require("../../assets/visa.png")}
                style={tw`w-10 h-5`}
                resizeMode="contain"
              />
              <Image
                source={require("../../assets/master.png")}
                style={tw`w-10 h-5`}
                resizeMode="contain"
              />
            </View>
          </View>

          {/* Amount */}
          <TextWrapper fontWeight="bold" style={tw`mb-2 text-gray-700`}>
            Amount
          </TextWrapper>
          <TextInput
            placeholder="$"
            keyboardType="numeric"
            style={tw`border w-full border-gray-300 rounded-md p-4 text-base mb-8 bg-gray-50`}
          />

          {/* Instruction Box */}
          <View style={tw`bg-[#E6F0FA] p-4 rounded-lg mb-6`}>
            <TextWrapper color="#2887F1" style={tw`text-sm leading-5`}>
              Please make sure this is your Dollar Account Card for this
              withdrawal. Alternatively, submit your Dollar Account details by
              clicking on "Change Payment Method".
            </TextWrapper>
          </View>
        </View>

        {/* Change Payment Method Link */}
        <Pressable
          style={tw`mb-6`}
          onPress={() => router.push("/portfolio/alternate")}
        >
          <TextWrapper
            color="#2887F2"
            fontWeight="bold"
            style={tw`underline text-center`}
          >
            Change Payment Method
          </TextWrapper>
        </Pressable>

        {/* Pay Button */}
        <CustomButton
          title="Pay"
          onPress={() => router.push("/portfolio/otp")}
        />
      </ScrollView>
    </SafeViewComponent>
  );
}
