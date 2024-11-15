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
      <View style={tw`justify-center flex-1 items-center gap-y-4 `}>
        <View>
          <Image source={require("../../assets/onboard2.png")} />
        </View>
        <TextWrapper fontWeight="bold" textSize="2xl" style={tw`text-center`}>
          Verify Your Email
        </TextWrapper>
        <TextWrapper color="gray" style={tw`text-center`} textSize="lg">
          A 4 digit code has been sent to the Email
        </TextWrapper>
        <TextWrapper
          style={tw`text-center mt-4`}
          textSize="lg"
          fontWeight="bold"
        >
          Kindly enter the code to continue.
        </TextWrapper>
        <View style={tw`gap-y-2`}>
          <OTPInputComp digits={4} onChangeText={() => {}} />
          <View style={tw`flex-row items-center justify-between`}>
            <TextWrapper style={tw``} fontWeight="bold" textSize="xl">
              Resend OTP
            </TextWrapper>
            <TextWrapper
              style={tw``}
              color="red"
              fontWeight="bold"
              textSize="xl"
            >
              00:59
            </TextWrapper>
          </View>
        </View>
      </View>
      <CustomButton onPress={() => router.push("/auth/login")} title="Done" />
    </SafeViewComponent>
  );
}
