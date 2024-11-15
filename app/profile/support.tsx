import { View, TouchableOpacity } from "react-native";
import { TextWrapper } from "../../components/textwrapper";
import tw from "twrnc";
import { BackButton } from "../../components/back";
import { SafeViewComponent } from "../../components/safeview";
import { Ionicons } from "@expo/vector-icons";

export default function Support() {
  return (
    <SafeViewComponent>
      <BackButton text="Support" />
      <View style={tw`items-center gap-y-4 p-4`}>
        <TextWrapper
          color="gray"
          fontWeight="bold"
          textSize="xl"
          style={tw`text-center`}
        >
          You can contact us through any of these mediums:
        </TextWrapper>

        {/* WhatsApp */}
        <TouchableOpacity
          style={tw`flex-row items-center justify-center gap-x-2 p-3 rounded-md bg-green-500 w-11/12`}
        >
          <Ionicons name="logo-whatsapp" size={24} color="white" />
          <TextWrapper color="white" fontWeight="bold">
            Connect on WhatsApp
          </TextWrapper>
        </TouchableOpacity>

        {/* Google */}
        <TouchableOpacity
          style={tw`flex-row items-center justify-center gap-x-2 p-3 rounded-md bg-red-500 w-11/12`}
        >
          <Ionicons name="logo-google" size={24} color="white" />
          <TextWrapper color="white" fontWeight="bold">
            Connect via Google
          </TextWrapper>
        </TouchableOpacity>

        {/* Facebook */}
        <TouchableOpacity
          style={tw`flex-row items-center justify-center gap-x-2 p-3 rounded-md bg-blue-600 w-11/12`}
        >
          <Ionicons name="logo-facebook" size={24} color="white" />
          <TextWrapper color="white" fontWeight="bold">
            Connect on Facebook
          </TextWrapper>
        </TouchableOpacity>
      </View>
    </SafeViewComponent>
  );
}
