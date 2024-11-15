import { View, ScrollView } from "react-native";
import { SafeViewComponent } from "../../../components/safeview";
import { Ionicons } from "@expo/vector-icons";
import { TextWrapper } from "../../../components/textwrapper";
import tw from "twrnc";
import { Header } from "../../../components/home/header";
import { PlayerCard } from "../../../components/home/card";
import { CardView } from "../../../components/home/cardsview";
import { Player } from "../../../components/home/player";
import { PlayerViewCards } from "../../../components/home/playerview";

export default function Homepage() {
  return (
    <SafeViewComponent>
      <Header />

      {/* Live Sale Info Section */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={tw`flex-1 h-auto`}>
          <View style={tw` mt-5`}>
            <TextWrapper
              fontWeight="bold"
              textSize="lg"
              style={tw`flex-row items-center mb-2 text-gray-800`}
            >
              Live Sale Info{" "}
              <Ionicons
                name="information-circle-outline"
                color={"#6B7280"}
                size={22}
                style={tw`ml-1`}
              />
            </TextWrapper>
          </View>

          <View>
            <CardView />
          </View>

          {/* Another Section for Content */}
          <View style={tw` mt-1`}>
            <TextWrapper
              fontWeight="bold"
              textSize="lg"
              style={tw`flex-row items-center   text-gray-800`}
            >
              All Player{" "}
              <Ionicons
                name="information-circle-outline"
                color={"#6B7280"}
                size={22}
                style={tw`ml-1`}
              />
            </TextWrapper>
            <TextWrapper fontWeight="bold" textSize="base" color="gray">
              Total Market Cap: $2,172,272
            </TextWrapper>
            <PlayerViewCards />
          </View>
        </View>
      </ScrollView>
    </SafeViewComponent>
  );
}
