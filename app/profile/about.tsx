import { View, Text, ScrollView } from "react-native";
import { SafeViewComponent } from "../../components/safeview";
import { BackButton } from "../../components/back";
import tw from "twrnc";
import { TextWrapper } from "../../components/textwrapper";
export default function About() {
  return (
    <SafeViewComponent>
      <BackButton text="About" />
      <ScrollView>
        <View style={tw`gap-y-4`}>
          <TextWrapper>
            Footiestocks app is a unique platform that lets users trade virtual
            stocks of football players and teams, mimicking the dynamics of a
            traditional stock market. It provides football fans with a chance to
            leverage their knowledge of the sport by buying, selling, and
            trading stocks based on the real-life performance of players and
            teams. Key Features
          </TextWrapper>
          <TextWrapper>
            Users can actively trade stocks with prices fluctuating in
            real-time, influenced by various factors like match results, player
            form, injuries, transfers, and other events. The app offers detailed
            data, analytics, and insights, including statistics, news updates,
            and performance trends to help users make well-informed decisions.
            Social features like leaderboards, forums, and challenges foster a
            sense of community and allow users to share strategies and
            experiences.
          </TextWrapper>
          <TextWrapper color="#0CF2FF" fontWeight="bold" textSize="xl">
            What Users Need to Know
          </TextWrapper>
          <View style={tw`px-4 gap-y-5`}>
            <TextWrapper>
              Understand the Risks: As with any trading platform, there are
              inherent risks. Stock values can change rapidly due to
              unpredictable events such as injuries or unexpected match
              outcomes. Users should be aware of these risks and only invest
              what they are prepared to lose.
            </TextWrapper>
            <TextWrapper>
              Stay Updated: Keeping track of football news, player updates, and
              match schedules is essential. The app provides information, but
              users should also rely on other trusted football sources to stay
              informed.
            </TextWrapper>
            <TextWrapper>
              Develop a Strategy: Successful trading requires strategic
              planning, whether holding stocks long-term or capitalizing on
              short-term fluctuations. Diversifying investments can help
              minimize risk.
            </TextWrapper>
            <TextWrapper>
              Learn the Basics: Users should understand the mechanics of trading
              on the app, including placing orders, tracking stock performance,
              and withdrawing profits
            </TextWrapper>
          </View>
          <TextWrapper>
            The Footiestocks app offers an exciting, strategic way to connect
            with football, providing both entertainment and the potential for
            profi
          </TextWrapper>
        </View>
      </ScrollView>
    </SafeViewComponent>
  );
}
