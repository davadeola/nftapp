import { StatusBar } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import React from "react";

const FocusesStatusBar = (props) => {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar animated={true} {...props} /> : null;
};

export default FocusesStatusBar;
