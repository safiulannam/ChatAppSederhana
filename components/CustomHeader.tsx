import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CustomHeader = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: "70%",
    backgroundColor: "#008080",
    alignItems: "center",
    justifyContent: "center",
    width: 363,
  },
  headerText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default CustomHeader;
