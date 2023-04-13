import React from "react";
import { View } from "react-native";
import MainMenu from "./MainMenu";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <MainMenu navigation={navigation} />
    </View>
  );
};

export default HomeScreen;
