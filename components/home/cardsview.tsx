import { ScrollView } from "react-native";
import { PlayerCard } from "./card";
import tw from "twrnc";

export const CardView = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
      <PlayerCard />
    </ScrollView>
  );
};
