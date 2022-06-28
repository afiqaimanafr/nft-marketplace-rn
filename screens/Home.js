import { useState } from "react";
import { View, SafeAreaView, FlatList, Text, StyleSheet } from "react-native";

import { COLORS, NFTData } from "../constants";
import { NFTCard, HomeHeader, FocusedStatusBar } from "../components";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FocusedStatusBar background={COLORS.primary} />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({ container: { flex: 1 } });
