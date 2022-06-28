import { useState } from "react";
import { View, SafeAreaView, FlatList, Text, StyleSheet } from "react-native";

import { COLORS, NFTData } from "../constants";
import { NFTCard, HomeHeader, FocusedStatusBar } from "../components";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FocusedStatusBar background={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={NFTData}
            renderItem={({ item }) => <Text>{item.name}</Text>}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader />}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({ container: { flex: 1 } });
