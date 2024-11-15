import { View, ScrollView, Image } from "react-native";
import { SafeViewComponent } from "../../components/safeview";
import { TextWrapper } from "../../components/textwrapper";
import tw from "twrnc";
import { BackButton } from "../../components/back";

export default function Transaction() {
  return (
    <SafeViewComponent>
      <BackButton text="Transaction" />
      <ScrollView contentContainerStyle={tw`p-4 gap-y-3`}>
        {/* Deposit Transaction */}
        <View
          style={tw`bg-gray-100 flex-row items-center w-full justify-between p-3 rounded-md`}
        >
          <View style={tw`flex-row items-center gap-x-2`}>
            <Image
              source={require("../../assets/success.png")}
              style={tw`w-6 h-6`}
              accessibilityLabel="Success icon"
            />
            <View>
              <TextWrapper fontWeight="bold">Deposit</TextWrapper>
              <TextWrapper style={tw`text-gray-500`}>
                10/04/2022 22:04
              </TextWrapper>
            </View>
          </View>
          <View>
            <TextWrapper fontWeight="bold">$80,000</TextWrapper>
            <TextWrapper color="#2887F1">Completed</TextWrapper>
          </View>
        </View>

        {/* Withdraw Transaction */}
        <View
          style={tw`bg-gray-100 flex-row items-center w-full justify-between p-3 rounded-md`}
        >
          <View style={tw`flex-row items-center gap-x-2`}>
            <Image
              source={require("../../assets/failed.png")}
              style={tw`w-6 h-6`}
              accessibilityLabel="Failed icon"
            />
            <View>
              <TextWrapper fontWeight="bold">Withdraw</TextWrapper>
              <TextWrapper style={tw`text-gray-500`}>
                10/04/2022 22:10
              </TextWrapper>
            </View>
          </View>
          <View>
            <TextWrapper fontWeight="bold">-$20,000</TextWrapper>
            <TextWrapper color="#DC3027">Completed</TextWrapper>
          </View>
        </View>

        {/* Buy Transaction */}
        <View
          style={tw`bg-gray-100 flex-row items-center w-full justify-between p-3 rounded-md`}
        >
          <View style={tw`flex-row items-center gap-x-2`}>
            <Image
              source={require("../../assets/success.png")}
              style={tw`w-6 h-6`}
              accessibilityLabel="Success icon"
            />
            <View>
              <TextWrapper fontWeight="bold">Buy</TextWrapper>
              <TextWrapper style={tw`text-gray-500`}>
                10/04/2022 22:20
              </TextWrapper>
            </View>
          </View>
          <View>
            <TextWrapper fontWeight="bold">$5,000</TextWrapper>
            <TextWrapper color="#10B981">Completed</TextWrapper>
          </View>
        </View>

        {/* Sell Transaction */}
        <View
          style={tw`bg-gray-100 flex-row items-center w-full justify-between p-3 rounded-md`}
        >
          <View style={tw`flex-row items-center gap-x-2`}>
            <Image
              source={require("../../assets/success.png")}
              style={tw`w-6 h-6`}
              accessibilityLabel="Success icon"
            />
            <View>
              <TextWrapper fontWeight="bold">Sell</TextWrapper>
              <TextWrapper style={tw`text-gray-500`}>
                10/04/2022 22:30
              </TextWrapper>
            </View>
          </View>
          <View>
            <TextWrapper fontWeight="bold">$3,000</TextWrapper>
            <TextWrapper color="#FBBF24">Completed</TextWrapper>
          </View>
        </View>

        {/* Failed Transaction */}
        <View
          style={tw`bg-gray-100 flex-row items-center w-full justify-between p-3 rounded-md`}
        >
          <View style={tw`flex-row items-center gap-x-2`}>
            <Image
              source={require("../../assets/failed.png")}
              style={tw`w-6 h-6`}
              accessibilityLabel="Failed icon"
            />
            <View>
              <TextWrapper fontWeight="bold">Deposit</TextWrapper>
              <TextWrapper style={tw`text-gray-500`}>
                10/04/2022 22:40
              </TextWrapper>
            </View>
          </View>
          <View>
            <TextWrapper fontWeight="bold">$10,000</TextWrapper>
            <TextWrapper color="red">Failed</TextWrapper>
          </View>
        </View>
      </ScrollView>
    </SafeViewComponent>
  );
}
