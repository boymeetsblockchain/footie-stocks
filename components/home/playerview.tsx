import { ScrollView, View } from "react-native";
import { Player } from "./player";

export const PlayerViewCards = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <Player />
        <Player />
        <Player />
      </View>
    </ScrollView>
  );
};
