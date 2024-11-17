import { View, ScrollView, Image, Pressable } from "react-native";
import { SafeViewComponent } from "../../components/safeview";
import { Header } from "../../components/ipo/header";
import tw from "twrnc";
import { TextWrapper } from "../../components/textwrapper";
import { router } from "expo-router";

type ClubCardProps = {
  image: any;
  name: string;
  goals: number;
};

function ClubCard({ image, name, goals }: ClubCardProps) {
  return (
    <View style={tw`bg-[#E7E4E8CC] p-2 rounded-md`}>
      <Image
        source={image}
        style={tw`w-10 h-10 mb-1`}
        accessibilityLabel={`${name} logo`}
      />
      <TextWrapper fontWeight="bold" textSize="xs">
        {name}
      </TextWrapper>
      <TextWrapper textSize="xs" color="#3C6EEA">
        {`${goals} goals`}
      </TextWrapper>
    </View>
  );
}

type PlayerCardProps = {
  image: any;
  name: string;
  position: string;
  change: number;
  buyPrice: number;
  sellPrice: number;
};

function PlayerCard({
  image,
  name,
  position,
  change,
  buyPrice,
  sellPrice,
}: PlayerCardProps) {
  return (
    <Pressable style={tw`mt-2`} onPress={() => router.push("/player/view")}>
      <View style={tw`flex-row justify-between bg-gray-50 py-2 items-center`}>
        <View style={tw`flex-row gap-x-2`}>
          <Image
            source={image}
            style={tw`w-8 h-8`}
            accessibilityLabel={`${name} image`}
          />
          <View style={tw` gap-y-1`}>
            <TextWrapper fontWeight="bold" textSize="xs">
              {name}
            </TextWrapper>
            <TextWrapper textSize="xs" color="gray">
              Position:{" "}
              <TextWrapper textSize="xs" fontWeight="bold">
                {position}
              </TextWrapper>
            </TextWrapper>
          </View>
        </View>
        <View style={tw`mr-16`}>
          <TextWrapper fontWeight="bold" textSize="xs">
            24 Hours Change
          </TextWrapper>
          <TextWrapper textSize="xs" color="#46B121">
            {`${change}%`}
          </TextWrapper>
        </View>
      </View>
      <View style={tw`flex-row justify-between mt-1`}>
        <View style={tw`flex-1 mr-0.5`}>
          <TextWrapper textSize="xs">Buy Price:</TextWrapper>
          <Pressable style={tw`bg-[#46B121] p-1 rounded w-full`}>
            <TextWrapper textSize="xs" style={tw`text-center`}>
              ${buyPrice}
            </TextWrapper>
          </Pressable>
        </View>
        <View style={tw`flex-1 ml-0.5`}>
          <TextWrapper textSize="xs">Sell Price:</TextWrapper>
          <Pressable style={tw`bg-[#DC3027] p-1 rounded w-full`}>
            <TextWrapper textSize="xs" style={tw`text-center`}>
              ${sellPrice}
            </TextWrapper>
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
}

export default function SearcHPage() {
  return (
    <SafeViewComponent>
      <Header onPress={() => {}} />
      <ScrollView>
        <View style={tw`gap-y-3 p-2`}>
          <TextWrapper fontWeight="bold" textSize="xl">
            Recommend Clubs
          </TextWrapper>
          <View style={tw`flex-row  justify-between   w-full mt-1`}>
            <ClubCard
              image={require("../../assets/mancity.png")}
              name="Man City"
              goals={20}
            />
            <ClubCard
              image={require("../../assets/liverpool.png")}
              name="Liverpool"
              goals={20}
            />

            <View style={tw`mr-15`}>
              <ClubCard
                image={require("../../assets/chelsea.png")}
                name="Chelsea"
                goals={20}
              />
            </View>
          </View>

          <TextWrapper fontWeight="bold" textSize="xl">
            Recommend Players
          </TextWrapper>
          <PlayerCard
            image={require("../../assets/foden.png")}
            name="P.Foden"
            position="M"
            change={15.45}
            buyPrice={25.54}
            sellPrice={25.54}
          />
          <PlayerCard
            image={require("../../assets/foden.png")}
            name="P.Foden"
            position="M"
            change={15.45}
            buyPrice={25.54}
            sellPrice={25.54}
          />
          <PlayerCard
            image={require("../../assets/foden.png")}
            name="P.Foden"
            position="M"
            change={15.45}
            buyPrice={25.54}
            sellPrice={25.54}
          />
        </View>
      </ScrollView>
    </SafeViewComponent>
  );
}
