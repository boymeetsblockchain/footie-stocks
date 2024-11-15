import { Image, Pressable, TouchableOpacity, View } from "react-native";
import { TextWrapper } from "../components/textwrapper";
import tw from "twrnc";
import { SafeViewComponent } from "../components/safeview";
import { CustomButton } from "../components/button";

import { router } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";
export default function WelcomePage() {
  return (
    <SafeViewComponent>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={tw`my-4`}>
          <View style={tw`mb-4 items-center`}>
            <Image source={require("../assets/onboard.png")} style={tw``} />
          </View>
          <TextWrapper
            textSize="3xl"
            fontWeight="extraBold"
            style={tw`text-center`}
          >
            Welcome to Footie Stocks
          </TextWrapper>
          <TextWrapper style={tw`text-center my-2`}>
            Get ready to level up your football passion and investment game!
            Kickoff stocks is the ultimate platform for football fans to buy,
            sell and trade.
          </TextWrapper>
          <View style={tw`gap-y-3`}>
            <CustomButton
              title="Get Started"
              onPress={() => router.push("/auth/register")}
            />
            <TouchableOpacity
              style={tw`bg-white w-full py-2 px-3  rounded-lg  border border-gray-200`}
            >
              <Pressable
                style={tw`flex-row gap-x-4 items-center justify-center`}
              >
                <Image
                  source={require("../assets/apple.png")}
                  style={tw`h-7 w-7`}
                />
                <TextWrapper fontWeight="bold" style={tw`text-base`}>
                  Sign in with Apple
                </TextWrapper>
              </Pressable>
            </TouchableOpacity>
            <TouchableOpacity
              style={tw`bg-white w-full py-2 px-3  rounded-lg  border border-gray-200 `}
            >
              <Pressable
                style={tw`flex-row gap-x-4 items-center justify-center`}
              >
                <Image
                  source={require("../assets/google.png")}
                  style={tw`h-7 w-7`}
                />
                <TextWrapper fontWeight="bold" style={tw`text-base`}>
                  Sign in with Google
                </TextWrapper>
              </Pressable>
            </TouchableOpacity>
          </View>
          <Pressable onPress={() => router.push("/auth/register")}>
            <TextWrapper style={tw`text-center text-[#6B7280] text-base`}>
              Don’t have an account?{" "}
              <TextWrapper fontWeight="bold" style={tw`text-[#2887F1]`}>
                Sign Up
              </TextWrapper>
            </TextWrapper>
          </Pressable>
        </View>
      </ScrollView>
    </SafeViewComponent>
  );
}
