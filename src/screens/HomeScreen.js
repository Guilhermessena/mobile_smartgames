import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProductsScreen from "./ProductsScreen";

export default function HomeScreen({ navigation }) {

  return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#F8F9FA" />
        <ProductsScreen navigation={navigation}/>
      </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});