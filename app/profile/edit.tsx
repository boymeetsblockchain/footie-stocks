import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { TextWrapper } from "../../components/textwrapper";
import tw from "twrnc";
import { SafeViewComponent } from "../../components/safeview";
import { BackButton } from "../../components/back";

export default function EditProfilePage() {
  return (
    <SafeViewComponent>
      <BackButton text="Edit Profile" />
      <ScrollView>
        <View style={tw`p-4`}>
          {/* Profile Image and Name */}
          <View style={tw`items-center mt-4`}>
            <Image
              source={require("../../assets/bruno.webp")}
              style={tw`h-40 w-40 rounded-full`}
              resizeMode="cover"
            />
            <TextWrapper textSize="xl" fontWeight="bold" style={tw`mt-3`}>
              Bruno Fernandes
            </TextWrapper>
          </View>

          {/* Edit Profile Form */}
          <View style={tw`mt-6`}>
            <TextWrapper
              textSize="sm"
              fontWeight="bold"
              style={tw`mb-1 text-gray-600`}
            >
              First Name
            </TextWrapper>
            <TextInput
              placeholder="Enter First Name"
              style={tw`border border-gray-300 rounded-lg p-3 mb-4`}
            />

            <TextWrapper
              textSize="sm"
              fontWeight="bold"
              style={tw`mb-1 text-gray-600`}
            >
              Last Name
            </TextWrapper>
            <TextInput
              placeholder="Enter Last Name"
              style={tw`border border-gray-300 rounded-lg p-3 mb-4`}
            />

            <TextWrapper
              textSize="sm"
              fontWeight="bold"
              style={tw`mb-1 text-gray-600`}
            >
              Date of Birth
            </TextWrapper>
            <TextInput
              placeholder="DD/MM/YYYY"
              style={tw`border border-gray-300 rounded-lg p-3 mb-4`}
            />

            <TextWrapper
              textSize="sm"
              fontWeight="bold"
              style={tw`mb-1 text-gray-600`}
            >
              Gender
            </TextWrapper>
            <TextInput
              placeholder="Enter Gender"
              style={tw`border border-gray-300 rounded-lg p-3 mb-4`}
            />

            <TextWrapper
              textSize="sm"
              fontWeight="bold"
              style={tw`mb-1 text-gray-600`}
            >
              Email
            </TextWrapper>
            <TextInput
              placeholder="Enter Email"
              keyboardType="email-address"
              style={tw`border border-gray-300 rounded-lg p-3 mb-4`}
            />

            {/* Save Changes Button */}
            <TouchableOpacity style={tw`bg-blue-500 py-3 rounded-lg mt-6`}>
              <TextWrapper
                color="white"
                textSize="lg"
                fontWeight="bold"
                style={tw`text-center`}
              >
                Save Changes
              </TextWrapper>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeViewComponent>
  );
}
