import { View, Text, TouchableOpacity } from "react-native";
import { SafeViewComponent } from "../../components/safeview";
import { BackButton } from "../../components/back";
import tw from "twrnc";
import { EmailInput, PasswordInput } from "../../components/inputs";
import { TextWrapper } from "../../components/textwrapper";
import { CustomButton } from "../../components/button";
import { router } from "expo-router";
import { useState } from "react";

export default function RegisterPage() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <SafeViewComponent>
      <BackButton text="Sign Up" />
      <View style={tw`gap-y-2 flex-1`}>
        <TextWrapper
          style={tw`mb-4 text-center `}
          textSize="3xl"
          fontWeight="bold"
        >
          Get in the Game: Sign Up for kickoff Socks
        </TextWrapper>
        <EmailInput label="Email" placeholder="Enter Your Email" />
        <PasswordInput label="Password" placeholder="Enter Your Password" />
        <PasswordInput
          label="Confirm Password"
          placeholder="Confirm Your Password"
        />

        {/* Terms and Conditions with Checkbox */}
        <View style={tw`flex-row items-center my-4`}>
          <TouchableOpacity
            style={tw`w-4 h-4 border border-gray-400 rounded mr-2 ${
              isChecked ? "bg-blue-600" : "bg-white"
            } flex items-center justify-center`}
            onPress={() => setIsChecked(!isChecked)}
          >
            {isChecked && (
              <Text style={tw`text-white text-center font-bold`}>✓</Text>
            )}
          </TouchableOpacity>
          <TextWrapper style={tw`text-xs`}>
            I have read and{" "}
            <TextWrapper color="#2887F1" style={tw`underline text-xs`}>
              agree to Terms
            </TextWrapper>{" "}
            &{" "}
            <TextWrapper color="#2887F1" style={tw`underline text-xs`}>
              {" "}
              Privacy Policy
            </TextWrapper>
          </TextWrapper>
        </View>
      </View>

      <View>
        <CustomButton
          onPress={() => {
            if (isChecked) {
              router.push("/auth/verify");
            } else {
              alert("Please agree to the Terms and Privacy Policy");
            }
          }}
          title="Continue"
        />
      </View>
    </SafeViewComponent>
  );
}
