import React, { useEffect, useState } from "react";

import { View, Text, FlatList, SafeAreaView } from "react-native";

import { COLORS, NFTData } from "../constants";
import { NFTCard, HomeHeader, FocusesStatusBar } from "../components";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusesStatusBar backgroundColor={COLORS.primary} />
    </SafeAreaView>
  );
};

export default Home;
