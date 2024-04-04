import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, FlatList, TouchableWithoutFeedback } from "react-native";
import api from "../service/GameService";
import { GameHeader } from "../components/gameHeader/GameHeader";

export default function ProductsScreen({ navigation }) {
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
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate('Product', {
            idItem: item.id,
          });
        }}>
        <View style={styles.containerGameItem}>
          <Image style={styles.contentImage} source={{ uri: item.linkImage }} />
          <View style={styles.contentGameItem}>
            <Text style={styles.titleGameItem}>{item.name}</Text>
            <Text style={styles.platformsGameItem}>
              {item.platforms}
            </Text>
            <Text style={styles.priceGameItem}>
              {item.price.trim()}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
  return (
    <FlatList
      ListHeaderComponent={GameHeader}
      data={games}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
    />
  );
}

const styles = StyleSheet.create({
  containerGameItem: {
    flexDirection: "row",
    backgroundColor: "#F8F9FA",
    alignItems: "top",
    justifyContent: "space-between",
    marginHorizontal: 16,
    marginVertical: 20,
    borderRadius: 15,
    elevation: 10,
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
    fontSize: 24,
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