import { View, TouchableOpacity, Switch } from "react-native";
import { SafeViewComponent } from "../../components/safeview";
import { BackButton } from "../../components/back";
import { Ionicons } from "@expo/vector-icons";
import { CustomButton } from "../../components/button";
import { TextWrapper } from "../../components/textwrapper";
import tw from "twrnc";
import { useState } from "react";
import { router } from "expo-router";

export default function SettingsPage() {
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false);

  // Toggle notification switch
  const toggleSwitch = () => setIsNotificationsEnabled(!isNotificationsEnabled);

  return (
    <SafeViewComponent>
      <BackButton text="Settings" />

      <View style={tw`p-4 mt-4`}>
        {/* Change Password Pressable */}
        <TouchableOpacity
          style={tw`bg-[#F0F5FA] p-4  flex-row justify-between rounded-lg mb-4`}
          onPress={() => router.push("/profile/password")}
        >
          <TextWrapper textSize="xl" fontWeight="bold">
            Change Password
          </TextWrapper>
          <Ionicons name="chevron-forward" color={"#2887F1"} size={24} />
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`bg-[#F0F5FA] p-4  flex-row justify-between rounded-lg mb-4`}
        >
          <TextWrapper textSize="xl" fontWeight="bold">
            Change Language
          </TextWrapper>
          <Ionicons name="chevron-forward" color={"#2887F1"} size={24} />
        </TouchableOpacity>

        {/* Toggle Notifications */}
        <View
          style={tw`flex-row items-center justify-between bg-[#F0F5FA] p-4 rounded-lg`}
        >
          <TextWrapper textSize="xl" fontWeight="bold">
            Notifications
          </TextWrapper>
          <Switch
            value={isNotificationsEnabled}
            onValueChange={toggleSwitch}
            thumbColor={isNotificationsEnabled ? "#2887F1" : "#f4f3f4"}
            trackColor={{ false: "#fff", true: "#2887F1" }}
          />
        </View>
      </View>
    </SafeViewComponent>
  );
}
