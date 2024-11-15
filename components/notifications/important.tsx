import { View } from "react-native";
import { TextWrapper } from "../textwrapper";
import tw from "twrnc";

export const Important = () => {
  return (
    <View style={tw` gap-y-3`}>
      <View
        style={tw`bg-gray-200 h-30  p-4 rounded-lg flex-row gap-x-3 items-start shadow-md`}
      >
        {/* Icon indicator */}
        <View style={tw`bg-[#2887F1] rounded-full h-6 w-6`} />

        {/* Text content */}
        <View style={tw`flex-1`}>
          <TextWrapper
            fontWeight="bold"
            textSize="lg"
            style={tw`text-gray-800`}
          >
            KYC Completion
          </TextWrapper>
          <TextWrapper textSize="sm" style={tw`text-gray-700 mt-1`}>
            Congratulations on successfully registering an app account
          </TextWrapper>
          <TextWrapper textSize="xs" style={tw`text-gray-500 mt-1`}>
            10/10/24
          </TextWrapper>
        </View>
      </View>
      <View
        style={tw`bg-gray-200 h-30  p-4 rounded-lg flex-row gap-x-3 items-start shadow-md`}
      >
        {/* Icon indicator */}
        <View style={tw`bg-gray-400 rounded-full h-6 w-6`} />

        {/* Text content */}
        <View style={tw`flex-1`}>
          <TextWrapper
            fontWeight="bold"
            textSize="lg"
            style={tw`text-gray-800`}
          >
            Account Creation
          </TextWrapper>
          <TextWrapper textSize="sm" style={tw`text-gray-700 mt-1`}>
            Congratulations on successfully registering an app account
          </TextWrapper>
          <TextWrapper textSize="xs" style={tw`text-gray-500 mt-1`}>
            10/10/24
          </TextWrapper>
        </View>
      </View>
    </View>
  );
};
