import { View, ScrollView, Image } from "react-native";
import { SafeViewComponent } from "../../components/safeview";
import { TextWrapper } from "../../components/textwrapper";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";
import { BackButton } from "../../components/back";

export default function Transaction() {
  return (
    <SafeViewComponent>
      <BackButton text="Order History" />
      <ScrollView contentContainerStyle={tw`p-4 gap-y-4`}>
        {/* Deposit Transaction */}
        <View
          style={tw`bg-gray-100 flex-row items-center w-full justify-between p-4 h-16 rounded-md`}
        >
          <View style={tw`flex-row items-center gap-x-2`}>
            <Image
              source={require("../../assets/foden.png")}
              style={tw`h-10 w-10 rounded-full`}
            />
            <View>
              <TextWrapper fontWeight="bold">P Foden</TextWrapper>
              <TextWrapper style={tw`text-gray-500`}>
                10/04/2022 22:04
              </TextWrapper>
            </View>
            <TextWrapper color="green">Buy</TextWrapper>
          </View>
          <View>
            <TextWrapper fontWeight="bold">$80,000</TextWrapper>
            <TextWrapper color="#2887F1">Completed</TextWrapper>
          </View>
        </View>
        <View
          style={tw`bg-gray-100 flex-row items-center w-full justify-between p-4 h-16 rounded-md`}
        >
          <View style={tw`flex-row items-center gap-x-2`}>
            <Image
              source={require("../../assets/bruno.webp")}
              style={tw`h-10 w-10 rounded-full`}
            />
            <View>
              <TextWrapper fontWeight="bold">Bruno </TextWrapper>
              <TextWrapper style={tw`text-gray-500`}>
                10/04/2022 22:04
              </TextWrapper>
            </View>
            <TextWrapper color="red">Sell</TextWrapper>
          </View>
          <View>
            <TextWrapper fontWeight="bold">$80,000</TextWrapper>
            <TextWrapper color="#2887F1">Completed</TextWrapper>
          </View>
        </View>
        <View
          style={tw`bg-gray-100 flex-row items-center w-full justify-between p-4 h-16 rounded-md`}
        >
          <View style={tw`flex-row items-center gap-x-2`}>
            <Image
              source={require("../../assets/foden.png")}
              style={tw`h-10 w-10 rounded-full`}
            />
            <View>
              <TextWrapper fontWeight="bold">P Foden</TextWrapper>
              <TextWrapper style={tw`text-gray-500`}>
                10/04/2022 22:04
              </TextWrapper>
            </View>
            <TextWrapper color="green">Buy</TextWrapper>
          </View>
          <View>
            <TextWrapper fontWeight="bold">$80,000</TextWrapper>
            <TextWrapper color="#2887F1">Completed</TextWrapper>
          </View>
        </View>
        <View
          style={tw`bg-gray-100 flex-row items-center w-full justify-between p-4 h-16 rounded-md`}
        >
          <View style={tw`flex-row items-center gap-x-2`}>
            <Image
              source={require("../../assets/bruno.webp")}
              style={tw`h-10 w-10 rounded-full`}
            />
            <View>
              <TextWrapper fontWeight="bold">Bruno </TextWrapper>
              <TextWrapper style={tw`text-gray-500`}>
                10/04/2022 22:04
              </TextWrapper>
            </View>
            <TextWrapper color="red">Sell</TextWrapper>
          </View>
          <View>
            <TextWrapper fontWeight="bold">$80,000</TextWrapper>
            <TextWrapper color="#2887F1">Completed</TextWrapper>
          </View>
        </View>
        <View
          style={tw`bg-gray-100 flex-row items-center w-full justify-between p-4 h-16 rounded-md`}
        >
          <View style={tw`flex-row items-center gap-x-2`}>
            <Image
              source={require("../../assets/foden.png")}
              style={tw`h-10 w-10 rounded-full`}
            />
            <View>
              <TextWrapper fontWeight="bold">P Foden</TextWrapper>
              <TextWrapper style={tw`text-gray-500`}>
                10/04/2022 22:04
              </TextWrapper>
            </View>
            <TextWrapper color="green">Buy</TextWrapper>
          </View>
          <View>
            <TextWrapper fontWeight="bold">$80,000</TextWrapper>
            <TextWrapper color="#2887F1">Completed</TextWrapper>
          </View>
        </View>
        <View
          style={tw`bg-gray-100 flex-row items-center w-full justify-between p-4 h-16 rounded-md`}
        >
          <View style={tw`flex-row items-center gap-x-2`}>
            <Image
              source={require("../../assets/bruno.webp")}
              style={tw`h-10 w-10 rounded-full`}
            />
            <View>
              <TextWrapper fontWeight="bold">Bruno </TextWrapper>
              <TextWrapper style={tw`text-gray-500`}>
                10/04/2022 22:04
              </TextWrapper>
            </View>
            <TextWrapper color="red">Sell</TextWrapper>
          </View>
          <View>
            <TextWrapper fontWeight="bold">$80,000</TextWrapper>
            <TextWrapper color="#2887F1">Completed</TextWrapper>
          </View>
        </View>
      </ScrollView>
    </SafeViewComponent>
  );
}
