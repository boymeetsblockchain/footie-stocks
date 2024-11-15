import { View, Text, TouchableOpacity } from "react-native";
import { SafeViewComponent } from "../../components/safeview";
import { BackButton } from "../../components/back";
import tw from "twrnc";
import { PasswordInput } from "../../components/inputs";
import { TextWrapper } from "../../components/textwrapper";
import { CustomButton } from "../../components/button";
import { router } from "expo-router";

export default function Reset() {
  return (
    <SafeViewComponent>
      <BackButton text="Reset Password" />
      <View style={tw`gap-y-2 flex-1`}>
        <PasswordInput label="Email Address" placeholder="Enter Your Email" />
        <PasswordInput label="Password" placeholder="Enter Your Password" />
      </View>

      <View>
        <CustomButton onPress={() => router.push("/auth/login")} title="Done" />
      </View>
    </SafeViewComponent>
  );
}
