import { GameHeader } from "./components/GameHeader/GameHeader"
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import api from "./components/service/GameService";

export default function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    api
      .get("/games")
      .then((response) => setGames(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  function renderItem({ item }) {
    return (
      <View style={styles.containerGameItem}>
        <Image style={styles.contentImage} source={{ uri: item.linkImage }} />
        <View style={styles.contentGameItem}>
          <Text style={styles.titleGameItem}>{item.name}</Text>
          <Text style={styles.platformsGameItem}>
            {item.platforms}
          </Text>
          <Text style={styles.priceGameItem}>
            {item.price}
          </Text>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#F8F9FA" />
      <FlatList
        ListHeaderComponent={GameHeader}
        data={games}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  containerGameItem: {
    flexDirection: "row",
    backgroundColor: "#E8E8E8",
    alignItems: "top",
    justifyContent: "space-between",
    marginHorizontal: 16,
    marginVertical: 20,
    borderRadius: 15
  },

  contentGameItem: {
    flex: 1,
    marginLeft: 16,
  },
  contentImage: {
    height: 240,
    width: 180,
    borderRadius: 15
  },
  titleGameItem: {
    fontSize: 22,
    fontWeight: "bold",
    color: "black",
    paddingBottom: 8,
  },
  platformsGameItem: {
    fontSize: 16,
    fontWeight: "normal",
    color: "black",
    paddingBottom: 12,
  },
  priceGameItem: {
    fontSize: 20,
    fontWeight: "normal",
    color: "black",
  },
});