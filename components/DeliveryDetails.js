import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { theme } from "../themes/theme";

const DeliveryDetails = () => {
  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>DELIVERY TO</Text>
        <Text style={styles.detail}>Green Way 3000, Sylhet</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>WITHIN</Text>
        <Text style={styles.detail}>1 Hour</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 29,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  detailsContainer: {
    gap: 4,
  },
  label: {
    fontSize: 11,
    fontFamily: theme.textVariants.bold,
    color: theme.colors.black1,
    opacity: 0.5,
  },
  detail: {
    fontSize: theme.textVariants.xs,
    color: theme.colors.black1,
  },
});

export default DeliveryDetails;
