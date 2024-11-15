import { useState } from "react";
import { View, TextInput, TouchableOpacity, Pressable } from "react-native";
import { SafeViewComponent } from "../../components/safeview";
import { TextWrapper } from "../../components/textwrapper";
import { BackButton } from "../../components/back";
import { CustomButton } from "../../components/button";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";
import { router } from "expo-router";

export default function ResetPasswordPage() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false); // State to toggle visibility of new password
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State to toggle visibility of confirm password

  const handleResetPassword = () => {
    if (newPassword === confirmPassword) {
      // Perform password reset logic here
      console.log("Password reset successfully");
      router.back();
    } else {
      console.log("Passwords do not match");
    }
  };

  return (
    <SafeViewComponent>
      <BackButton text="Change Password" />

      <View style={tw`p-4 mt-4 gap-y-6`}>
        {/* Heading */}

        {/* New Password Input */}
        <View>
          <TextWrapper fontWeight="bold" style={tw`mb-2`}>
            Old Password
          </TextWrapper>
          <View
            style={tw`flex-row items-center bg-[#F0F5FA] py-2 px-3  border border-[#2887F1] rounded-lg`}
          >
            <TextInput
              style={tw`flex-1 text-black `}
              placeholder="Enter new password"
              secureTextEntry={!showNewPassword}
              value={newPassword}
              onChangeText={setNewPassword}
              placeholderTextColor="grey"
            />
            <TouchableOpacity
              onPress={() => setShowNewPassword(!showNewPassword)}
            >
              <Ionicons
                name={showNewPassword ? "eye-outline" : "eye-off-outline"}
                size={24}
                color="grey"
              />
            </TouchableOpacity>
          </View>
          <Pressable onPress={() => router.push("/auth/password")}>
            <TextWrapper color="#2887F1" style={tw`text-right mt-2`}>
              Forgot Password ?
            </TextWrapper>
          </Pressable>
        </View>
        <View>
          <TextWrapper fontWeight="bold" style={tw`mb-2`}>
            New Password
          </TextWrapper>
          <View
            style={tw`flex-row items-center bg-[#F0F5FA] py-2 px-3  border border-[#2887F1] rounded-lg`}
          >
            <TextInput
              style={tw`flex-1 text-black`}
              placeholder="Enter new password"
              secureTextEntry={!showNewPassword}
              value={newPassword}
              onChangeText={setNewPassword}
              placeholderTextColor="grey"
            />
            <TouchableOpacity
              onPress={() => setShowNewPassword(!showNewPassword)}
            >
              <Ionicons
                name={showNewPassword ? "eye-outline" : "eye-off-outline"}
                size={24}
                color="grey"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Confirm Password Input */}
        <View>
          <TextWrapper fontWeight="bold" style={tw`mb-2`}>
            Confirm Password
          </TextWrapper>
          <View
            style={tw`flex-row items-center bg-[#F0F5FA] py-2 px-3 border border-[#2887F1] rounded-lg`}
          >
            <TextInput
              style={tw`flex-1 text-black`}
              placeholder="Confirm new password"
              secureTextEntry={!showConfirmPassword}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholderTextColor="grey"
            />
            <TouchableOpacity
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              <Ionicons
                name={showConfirmPassword ? "eye-outline" : "eye-off-outline"}
                size={24}
                color="grey"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Reset Password Button */}
        <CustomButton title="Change Password" onPress={handleResetPassword} />
      </View>
    </SafeViewComponent>
  );
}
