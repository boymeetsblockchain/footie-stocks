import { View, ScrollView, Image, TouchableOpacity } from "react-native";
import { SafeViewComponent } from "../../components/safeview";
import { TextWrapper } from "../../components/textwrapper";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";
import { BackButton } from "../../components/back";
import { router } from "expo-router";

export default function ProfilePage() {
  const options = [
    {
      name: "Edit Personal Details",
      icon: "person-outline",
      link: "/profile/edit",
    },
    { name: "Settings", icon: "settings-outline", link: "/profile/settings" },
    {
      name: "Transactions",
      icon: "cash-outline",
      link: "/profile/transactions",
    },
    { name: "Order History", icon: "time-outline", link: "/profile/order" },
    { name: "Support", icon: "help-circle-outline", link: "/profile/support" },
    {
      name: "About",
      icon: "information-circle-outline",
      link: "/profile/about",
    },
    { name: "Privacy Policy & Terms", icon: "document-text-outline" },
    { name: "Sign Out", icon: "log-out-outline", color: "#DC3027", link: "/" },
  ];

  return (
    <SafeViewComponent>
      <BackButton text="Profile" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={tw`items-center mt-4`}>
          <Image
            source={require("../../assets/bruno.webp")}
            style={tw`h-40 w-40 rounded-full`}
            resizeMode="cover"
          />
          <TextWrapper textSize="xl" fontWeight="bold" style={tw`mt-3`}>
            Bruno Fernandes
          </TextWrapper>
        </View>

        <View style={tw`mt-6 mx-4`}>
          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={tw`flex-row items-center justify-between py-4 border-b border-gray-200`}
              onPress={() => router.push(`${option.link}`)}
            >
              <View style={tw`flex-row items-center`}>
                <Ionicons
                  name={option.icon as any}
                  size={24}
                  color={option.color || "#6B7280"}
                  style={tw`mr-3`}
                />
                <TextWrapper
                  textSize="lg"
                  fontWeight="bold"
                  style={[
                    tw`text-gray-800`,
                    option.color && { color: option.color },
                  ]}
                >
                  {option.name}
                </TextWrapper>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color="#6B7280"
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeViewComponent>
  );
}
