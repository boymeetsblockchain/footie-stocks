import React, {
  useCallback,
  useMemo,
  useRef,
  useState,
  useEffect,
} from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ScrollView,
} from "react-native";
import tw from "twrnc";
import { SafeViewComponent } from "../../../components/safeview";
import { Header } from "../../../components/ipo/header";
import { PlayerIpocard } from "../../../components/ipo/playercard";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { TextWrapper } from "../../../components/textwrapper";
import { Ionicons } from "@expo/vector-icons";

export default function IPO() {
  const [modalVisible, setModalVisible] = useState(false);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [selectedFilter, setSelectedFilter] = useState("");

  // Show modal on page load
  useEffect(() => {
    setModalVisible(true);
  }, []);

  // Bottom sheet snap points
  const snapPoints = useMemo(() => ["25%", "50%"], []);

  const handleOpenModal = () => setModalVisible(true);
  const handleCloseModal = () => setModalVisible(false);

  // Open bottom sheet
  const handleOpenBottomSheet = () => bottomSheetRef.current?.expand();
  const handleCloseBottomSheet = () => bottomSheetRef.current?.forceClose();

  return (
    <SafeViewComponent>
      {/* Header */}
      <Header onPress={handleOpenBottomSheet} />

      {/* Player Cards */}
      <View style={tw`gap-y-4`}>
        <PlayerIpocard onPress={handleOpenModal} />
        <PlayerIpocard onPress={handleOpenModal} />
      </View>

      {/* IPO Info Modal */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <TextWrapper textSize="lg" fontWeight="bold">
                About IPO Trade
              </TextWrapper>
              <TouchableOpacity onPress={handleCloseModal}>
                <Ionicons name="close" size={24} color="#333" />
              </TouchableOpacity>
            </View>
            <ScrollView>
              <TextWrapper fontWeight="bold" textSize="base" style={tw`mb-4`}>
                An IPO (Initial Public Offering) is the first time a football
                club offers its shares to the public on a stock exchange. Think
                of it like when a club decides to sell a portion of itself to
                fans and investors to raise money. This is similar to how clubs
                generate funds from selling tickets or merchandise, but instead,
                they sell ownership shares.
              </TextWrapper>
              <TextWrapper fontWeight="bold" textSize="xl" style={tw`mb-4`}>
                How it Works:
              </TextWrapper>
              <TextWrapper fontWeight="bold" textSize="base" style={tw`mb-2`}>
                1. Going Public: When a football club goes public, it means it
                is allowing people (like you!) to buy shares and become partial
                owners. The club's stock becomes available on a stock market,
                where it can be bought and sold
              </TextWrapper>
              <TextWrapper fontWeight="bold" textSize="base" style={tw`mb-2`}>
                2. Raising Funds: By selling shares, the club raises money that
                can be used for different purposes, such as buying new players,
                upgrading the stadium, or improving club facilities.
              </TextWrapper>
              <TextWrapper fontWeight="bold" textSize="base" style={tw`mb-2`}>
                3. Your Role as an Investor: If you buy shares during an IPO,
                you get the opportunity to own a small part of the club. The
                value of your shares may go up or down depending on the club's
                performance on the field and in financial matters. As a
                shareholder, you might also get voting rights on some important
                club decisions
              </TextWrapper>
              <TextWrapper fontWeight="bold" textSize="base" style={tw`mb-2`}>
                4.Risks and Rewards: Investing in an IPO is exciting but comes
                with risks. If the club performs well and grows in value, your
                shares might be worth more in the future. However, if the club's
                performance declines, the value of your shares could drop
              </TextWrapper>
            </ScrollView>
          </View>
        </View>
      </Modal>

      {/* Bottom Sheet for Filters */}
      <BottomSheet ref={bottomSheetRef} index={-1} snapPoints={snapPoints}>
        <BottomSheetView style={styles.contentContainer}>
          <View style={styles.headerContainer}>
            <TextWrapper style={styles.filterTitle}>Filter Options</TextWrapper>
            <TouchableOpacity onPress={handleCloseBottomSheet}>
              <Ionicons name="close" size={24} color="#333" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={[
              styles.filterOption,
              selectedFilter === "Price - High to Low" && styles.selectedOption,
            ]}
            onPress={() => setSelectedFilter("Price - High to Low")}
          >
            <TextWrapper textSize="lg" style={tw`text-left`}>
              Price - High to Low
            </TextWrapper>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.filterOption,
              selectedFilter === "Price - Low to High" && styles.selectedOption,
            ]}
            onPress={() => setSelectedFilter("Price - Low to High")}
          >
            <TextWrapper textSize="lg" style={tw`text-left`}>
              Price - Low to High
            </TextWrapper>
          </TouchableOpacity>
          {/* Additional filter options... */}
        </BottomSheetView>
      </BottomSheet>
    </SafeViewComponent>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    maxHeight: "80%",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  contentContainer: {
    padding: 16,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  filterTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  filterOption: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  selectedOption: {
    backgroundColor: "#3C6EEA",
  },
});
