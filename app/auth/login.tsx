import { View, Text, TouchableOpacity } from "react-native";
import { SafeViewComponent } from "../../components/safeview";
import { BackButton } from "../../components/back";
import tw from "twrnc";
import { EmailInput, PasswordInput } from "../../components/inputs";
import { TextWrapper } from "../../components/textwrapper";
import { CustomButton } from "../../components/button";
import { router } from "expo-router";

export default function RegisterPage() {
  return (
    <SafeViewComponent>
      <BackButton text="Sign In to Trade" />
      <View style={tw`gap-y-3 flex-1`}>
        <EmailInput label="Email Address" placeholder="Enter Your Email" />
        <PasswordInput label="Password" placeholder="Enter Your Password" />
        <TouchableOpacity onPress={() => router.push("/auth/forgot")}>
          <TextWrapper
            fontWeight="bold"
            textSize="xl"
            color="#2887F1"
            style={tw`text-right`}
          >
            Forgot-Password
          </TextWrapper>
        </TouchableOpacity>
      </View>

      <View>
        <CustomButton onPress={() => router.push("/home")} title="Continue" />
      </View>
    </SafeViewComponent>
  );
}
