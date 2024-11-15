import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import tw from "twrnc";
import { TextWrapper } from "./textwrapper";

interface ButtonProps {
  onPress: () => void;
  title: string;
}
export const CustomButton = ({ onPress, title }: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={tw`bg-[#2887F1] py-3 px-6 rounded-xl`}
    >
      <TextWrapper
        fontWeight="bold"
        color="white"
        textSize="base"
        style={tw`text-white text-center `}
      >
        {title}
      </TextWrapper>
    </TouchableOpacity>
  );
};
