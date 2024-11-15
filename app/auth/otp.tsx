import { View, Text, Image } from "react-native";
import { SafeViewComponent } from "../../components/safeview";
import { BackButton } from "../../components/back";
import tw from "twrnc";
import { TextWrapper } from "../../components/textwrapper";
import { OTPInputComp } from "../../components/otp";
import { CustomButton } from "../../components/button";
import { router } from "expo-router";

export default function VerifyOtp() {
  return (
    <SafeViewComponent>
      <BackButton text="Verification" />
      <View style={tw`justify-center items-center gap-y-4 px-4`}>
        {/* Enlarged Image with Extra Spacing Below */}
        <View>
          <Image
            source={require("../../assets/onboard2.png")}
            style={tw`w-40 h-40 mb-8`} // Adjust size and add bottom margin
            resizeMode="contain"
          />
        </View>

        {/* Title */}
        <TextWrapper fontWeight="bold" textSize="2xl" style={tw`text-center`}>
          Verify Your Email
        </TextWrapper>

        {/* Instruction Text */}
        <TextWrapper color="gray" style={tw`text-center mt-2`} textSize="lg">
          A 4-digit code has been sent to your email.
        </TextWrapper>
        <TextWrapper
          style={tw`text-center mt-2`}
          textSize="lg"
          fontWeight="bold"
        >
          Kindly enter the code to continue.
        </TextWrapper>

        {/* OTP Input and Resend Option */}
        <View style={tw`gap-y-2 mt-6`}>
          <OTPInputComp digits={4} onChangeText={() => {}} />
          <View style={tw`flex-row items-center justify-between mt-2`}>
            <TextWrapper fontWeight="bold" textSize="xl">
              Resend OTP
            </TextWrapper>
            <TextWrapper color="red" fontWeight="bold" textSize="xl">
              00:59
            </TextWrapper>
          </View>
        </View>
      </View>

      {/* Submit Button */}
      <CustomButton onPress={() => router.push("/auth/reset")} title="Done" />
    </SafeViewComponent>
  );
}
