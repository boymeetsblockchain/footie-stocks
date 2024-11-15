import { View, Text } from "react-native";
import { SafeViewComponent } from "../../components/safeview";
import Feather from "@expo/vector-icons/Feather";
import tw from "twrnc";
import { TextWrapper } from "../../components/textwrapper";
import { CustomButton } from "../../components/button";
import { router } from "expo-router";
export default function SuccessPage() {
  return (
    <SafeViewComponent>
      <View style={tw`flex-1 items-center justify-center`}>
        <Feather name="check-circle" size={100} color="#2887F1" />
        <TextWrapper textSize="2xl" fontWeight="bold">
          Success
        </TextWrapper>
        <TextWrapper textSize="sm" style={tw`text-gray-600`}>
          You have been successfully withdraw 30$🤩🤩
        </TextWrapper>
      </View>
      <CustomButton onPress={() => router.push("/home")} title="Done" />
    </SafeViewComponent>
  );
}
