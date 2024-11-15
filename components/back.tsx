import { View, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";
import { TextWrapper } from "./textwrapper";
import { useNavigation } from "@react-navigation/native";

export const BackButton = ({ text }: { text: string }) => {
  const navigation = useNavigation();

  return (
    <View
      style={tw`flex-row justify-between items-center py-4 my-2 mx-auto w-full bg-white`}
    >
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-outline" size={32} color="black" />
      </TouchableOpacity>
      <TextWrapper fontWeight="bold" textSize="xl">
        {text}
      </TextWrapper>
      <View />
    </View>
  );
};
