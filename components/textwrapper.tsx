import React from "react";
import { Text, TextProps } from "react-native";

interface TextWrapperComponentProps extends TextProps {
  children: React.ReactNode;
  fontWeight?: "regular" | "bold" | "extraBold";
  textSize?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
  color?: string;
}

const sizePresets = {
  xs: 10,
  sm: 12,
  base: 14,
  lg: 16,
  xl: 18,
  "2xl": 24,
  "3xl": 30,
  "4xl": 36,
  "5xl": 48,
};

export const TextWrapper = React.forwardRef<Text, TextWrapperComponentProps>(
  (
    {
      children,
      fontWeight = "regular",
      textSize = "base",
      color = "#000",
      style,
      ...props
    },
    ref
  ) => {
    const getFontFamily = () => {
      switch (fontWeight) {
        case "bold":
          return "Manrope-Bold";
        case "extraBold":
          return "Manrope-ExtraBold";
        default:
          return "Manrope-Regular";
      }
    };

    const getFontSize = () => {
      return sizePresets[textSize] || sizePresets.base;
    };

    return (
      <Text
        ref={ref}
        style={[
          { fontFamily: getFontFamily(), fontSize: getFontSize(), color },
          style,
        ]}
        {...props}
      >
        {children}
      </Text>
    );
  }
);

// For better debugging
TextWrapper.displayName = "TextWrapper";
