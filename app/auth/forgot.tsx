import { View, Text } from "react-native";
import { SafeViewComponent } from "../../components/safeview";
import { BackButton } from "../../components/back";
import tw from "twrnc";
import { TextWrapper } from "../../components/textwrapper";
import { EmailInput } from "../../components/inputs";
import { CustomButton } from "../../components/button";
import { router } from "expo-router";
export default function ForgotPassword() {
  return (
    <SafeViewComponent>
      <BackButton text="Forgot Password" />
      <View style={tw`flex-1 my-5`}>
        <TextWrapper fontWeight="bold" textSize="2xl" style={tw`text-center`}>
          It happens... Please enter your email or phone number to reset the
          password.
        </TextWrapper>
        <EmailInput label="Email" placeholder="Enter your Email Address" />
      </View>
      <CustomButton title="Continue" onPress={() => router.push("/auth/otp")} />
    </SafeViewComponent>
  );
}
