import { ScrollView, View } from "react-native";
import { TextWrapper } from "../textwrapper";
import { Image } from "react-native";

import tw from "twrnc";
export const News = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <TextWrapper style={tw`text-center`} fontWeight="bold" textSize="2xl">
        Latest New
      </TextWrapper>
      <View style={tw`gap-y-2 my-2`}>
        <TextWrapper style={tw``} fontWeight="bold" textSize="xl">
          Stay ahead of the game with the latest news, updates, and insights
          from the football stocks market.{" "}
        </TextWrapper>
        <Image
          source={require("../../assets/blog.png")}
          style={tw`w-full h-40 rounded-md`}
          resizeMode="cover"
        />
      </View>
      <View style={tw`gap-y-2 my-2`}>
        <TextWrapper style={tw``} fontWeight="bold" textSize="xl">
          RISING STAR: Juventus' midfielder, Federico Chiesa, sees a 10%
          increase in stock value after impressive performance in Serie A.
        </TextWrapper>
        <Image
          source={require("../../assets/news.png")}
          style={tw`w-full h-40 rounded-md`}
          resizeMode="cover"
        />
      </View>
      <View style={tw`gap-y-2 my-2`}>
        <TextWrapper style={tw``} fontWeight="bold" textSize="xl">
          Stay ahead of the game with the latest news, updates, and insights
          from the football stocks market.{" "}
        </TextWrapper>
        <Image
          source={require("../../assets/blog.png")}
          style={tw`w-full h-40 rounded-md`}
          resizeMode="cover"
        />
      </View>
    </ScrollView>
  );
};
