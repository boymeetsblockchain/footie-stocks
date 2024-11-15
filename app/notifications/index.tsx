import { View, Text, Pressable } from "react-native";
import tw from "twrnc";
import { BackButton } from "../../components/back";
import { SafeViewComponent } from "../../components/safeview";
import { TextWrapper } from "../../components/textwrapper";
import { useState } from "react";
import { Important } from "../../components/notifications/important";
import { News } from "../../components/notifications/news";
import { Blog } from "../../components/notifications/blog";

export default function Notifications() {
  const [activeTab, setActiveTab] = useState<"Important" | "News" | "Blog">(
    "Important"
  );

  return (
    <SafeViewComponent>
      <BackButton text="Notifications" />
      <View style={tw`flex-1`}>
        <View style={tw`flex-row items-center justify-between mx-4 my-2`}>
          <Pressable
            onPress={() => setActiveTab("Important")}
            style={[
              tw`py-2 flex-1 items-center`,
              activeTab === "Important" && tw`border-b-2 border-[#2887F1]`,
            ]}
          >
            <TextWrapper
              fontWeight="bold"
              textSize="lg"
              color={activeTab === "Important" ? "#2887F1" : "black"}
            >
              Important
            </TextWrapper>
          </Pressable>

          <Pressable
            onPress={() => setActiveTab("News")}
            style={[
              tw`py-2 flex-1 items-center`,
              activeTab === "News" && tw`border-b-2 border-[#2887F1]`,
            ]}
          >
            <TextWrapper
              fontWeight="bold"
              textSize="lg"
              color={activeTab === "News" ? "#2887F1" : "black"}
            >
              News
            </TextWrapper>
          </Pressable>

          <Pressable
            onPress={() => setActiveTab("Blog")}
            style={[
              tw`py-2 flex-1 items-center`,
              activeTab === "Blog" && tw`border-b-2 border-[#2887F1]`,
            ]}
          >
            <TextWrapper
              fontWeight="bold"
              textSize="lg"
              color={activeTab === "Blog" ? "#2887F1" : "black"}
            >
              Blogs
            </TextWrapper>
          </Pressable>
        </View>

        {/* Tab Content */}
        <View style={tw`flex-1 p-4`}>
          {activeTab === "Important" && <Important />}
          {activeTab === "News" && <News />}
          {activeTab === "Blog" && <Blog />}
        </View>
      </View>
    </SafeViewComponent>
  );
}
