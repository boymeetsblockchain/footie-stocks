import { View, TextInput, Pressable, ScrollView } from "react-native";
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
      <ScrollView contentContainerStyle={tw`px-4 pb-8 flex-grow`}>
        {/* Account Information Form */}
        <View style={tw`my-6`}>
          <TextWrapper fontWeight="bold" style={tw`mb-2`}>
            Account Name
          </TextWrapper>
          <TextInput
            placeholder="John Doe"
            style={tw`border w-full border-gray-300 rounded-lg p-3 text-base mb-4`}
          />

          <TextWrapper fontWeight="bold" style={tw`mb-2`}>
            Account Number
          </TextWrapper>
          <TextInput
            placeholder="0000 0000 0000"
            keyboardType="phone-pad"
            style={tw`border w-full border-gray-300 rounded-lg p-3 text-base mb-4`}
          />

          <TextWrapper fontWeight="bold" style={tw`mb-2`}>
            Bank Name
          </TextWrapper>
          <TextInput
            placeholder="Union Bank"
            style={tw`border w-full border-gray-300 rounded-lg p-3 text-base mb-4`}
          />

          <TextWrapper fontWeight="bold" style={tw`mb-2`}>
            ACH Routing
          </TextWrapper>
          <TextInput
            placeholder="XXXX XXXX XXXX XXXX"
            style={tw`border w-full border-gray-300 rounded-lg p-3 text-base mb-8`}
          />

          <TextWrapper fontWeight="bold" style={tw`mb-2`}>
            Amount
          </TextWrapper>
          <TextInput
            placeholder="$"
            keyboardType="numeric"
            style={tw`border w-full border-gray-300 rounded-lg p-3 text-base mb-8`}
          />
        </View>

        {/* Change Payment Method Link */}
        <Pressable
          style={tw`mb-6`}
          onPress={() => router.push("/portfolio/withdraw")}
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
