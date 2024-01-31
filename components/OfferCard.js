import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageIcon from "../assets/images/ImageIcon.svg";
import { theme } from "../themes/theme";

const OfferCard = ({ cardColor }) => {
  return (
    <View style={[styles.card, { backgroundColor: cardColor }]}>
      <View>
        <ImageIcon />
      </View>
      <View style={{ marginLeft: 30 }}>
        <Text style={styles.getText}>Get</Text>
        <Text style={styles.saleText}>50% off</Text>
        <Text style={styles.onOrderText}>on first three orders</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#f0f0f0",
    padding: 20,
    borderRadius: 16,
    marginRight: 18,
    alignItems: "center",
    width: 269,
    height: 123,
  },
  getText: {
    fontSize: theme.textVariants.l,
    fontFamily: theme.textVariants.regular,
    textAlign: "left",
    color: "#FFF",
  },
  saleText: {
    fontSize: 26,
    fontFamily: theme.textVariants.bold,
    textAlign: "left",
    color: "#FFF",
  },
  onOrderText: {
    fontSize: 13,
    fontFamily: theme.textVariants.regular,
    textAlign: "left",
    color: "#FFF",
  },
});

export default OfferCard;
