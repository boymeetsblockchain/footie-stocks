import React, { useState } from "react";
import { TextInput, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";
import { TextWrapper } from "./textwrapper"; // Assuming you're using a custom TextWrapper component

interface InputProps {
  label: string;
  placeholder: string;
  secureTextEntry?: boolean;
  onChangeText: (text: string) => void;
  value: string;
  showPasswordToggle?: boolean;
}

const CustomTextInput: React.FC<InputProps> = ({
  label,
  placeholder,
  secureTextEntry = false,
  onChangeText,
  value,
  showPasswordToggle = false,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <View style={tw`mb-4`}>
      {/* Label */}
      <TextWrapper style={tw`mb-2`} fontWeight="bold">
        {label}
      </TextWrapper>

      {/* Input Field */}
      <View style={tw`flex-row items-center border border-gray-300 rounded-md`}>
        <TextInput
          placeholder={placeholder}
          secureTextEntry={secureTextEntry && !showPassword}
          onChangeText={onChangeText}
          value={value}
          style={[
            { fontFamily: "Manrope-Regular", fontSize: 16 },
            tw`flex-1 py-2 px-4`,
          ]}
        />

        {/* Show/Hide Password Toggle (only for password fields) */}
        {showPasswordToggle && (
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={tw`pr-4`}
          >
            <Ionicons
              name={showPassword ? "eye-off-outline" : "eye-outline"}
              size={24}
              color="gray"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

// Email Input with dynamic label and placeholder
export const EmailInput = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => {
  const [email, setEmail] = useState<string>("");

  return (
    <CustomTextInput
      label={label}
      placeholder={placeholder}
      onChangeText={setEmail}
      value={email}
    />
  );
};

// Password Input with dynamic label and placeholder
export const PasswordInput = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => {
  const [password, setPassword] = useState<string>("");

  return (
    <CustomTextInput
      label={label}
      placeholder={placeholder}
      secureTextEntry={true}
      onChangeText={setPassword}
      value={password}
      showPasswordToggle={true}
    />
  );
};

export const EmailAndPasswordInputs = () => {
  return (
    <View style={tw`p-4`}>
      {/* Email Input */}
      <EmailInput label="Email" placeholder="Enter your email" />

      {/* Password Input */}
      <PasswordInput label="Password" placeholder="Enter your password" />
    </View>
  );
};
