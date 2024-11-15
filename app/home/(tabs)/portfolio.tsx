import { View, Text, ScrollView, Pressable } from "react-native";
import { SafeViewComponent } from "../../../components/safeview";
import tw from "twrnc";
import { Header } from "../../../components/home/header";
import { TextWrapper } from "../../../components/textwrapper";
import { Available } from "../../../components/portfolio/available";
import { router } from "expo-router";

export default function PortFolio() {
  return (
    <SafeViewComponent>
      <Header />
      <ScrollView>
        <View style={tw`gap-y-3`}>
          <View
            style={tw`bg-[#2887F2] w-full h-24 p-3 justify-center rounded-lg my-3`}
          >
            <TextWrapper color="white" fontWeight="bold" textSize="lg">
              Available Balance
            </TextWrapper>
            <TextWrapper color="white" fontWeight="extraBold" textSize="4xl">
              $0.00
            </TextWrapper>
          </View>
          <View style={tw`flex-row justify-between`}>
            <Pressable
              style={tw`border border-[#2887F2] p-1.5 rounded-md w-[45%]`}
              onPress={() => router.push("/portfolio/withdraw")}
            >
              <TextWrapper
                style={tw`text-center`}
                textSize="lg"
                fontWeight="bold"
              >
                Withdraw
              </TextWrapper>
            </Pressable>
            <Pressable
              style={tw`bg-[#2887F2] p-1.5 rounded-md w-[45%]`}
              onPress={() => router.push("/portfolio/deposit")}
            >
              <TextWrapper
                style={tw`text-center`}
                textSize="lg"
                color="white"
                fontWeight="bold"
              >
                Deposit
              </TextWrapper>
            </Pressable>
          </View>
          <Available />
        </View>
      </ScrollView>
    </SafeViewComponent>
  );
}
