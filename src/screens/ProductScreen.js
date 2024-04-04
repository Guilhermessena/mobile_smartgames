import React, { useState, useEffect } from "react";
import { Text, StyleSheet, Image, View, useWindowDimensions, ScrollView } from "react-native";
import api from "../service/GameService";
import SelectPicker from "../components/select/SelectPicker";

export default function ProductScreen({ route }) {
    const [game, setGame] = useState({});
    const { idItem } = route.params;
    const window = useWindowDimensions();

    useEffect(() => {
        api
            .get("/games/get?id=" + idItem)
            .then((response) => setGame(response.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, []);


    return (
        <>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.titleGameItem}>{game.name}</Text>
                    <Text style={styles.platformsGameItem}>{game.platforms}</Text>
                    <View style={styles.containerImageGameItem}>
                        <Image
                            style={{
                                width: window.width - 60,
                                height: 520,
                                borderRadius: 12,
                            }}
                            source={{
                                uri: game.linkImage
                            }} />
                    </View>
                    <View style={styles.containerBottomGameItem}>
                        <Text style={styles.priceGameItem}>{game.price}</Text>
                        <Text style={styles.descriptionGameItem}>{game.description}</Text>
                        {/* <SelectPicker item={game.store} /> */}
                    </View>
                </View>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 30
    },
    containerImageGameItem: {
        backgroundColor: "#F8F9FA",
        alignItems: "center",
        elevation: 5,
        borderRadius: 12,
    },
    titleGameItem: {
        fontSize: 30,
        fontWeight: "bold",
        color: "black",
        marginTop: 20,
        paddingVertical: 8,
    },
    platformsGameItem: {
        fontSize: 20,
        fontWeight: "normal",
        color: "black",
        paddingBottom: 12,
    },
    priceGameItem: {
        fontSize: 24,
        fontWeight: "bold",
        color: "black",
        paddingTop: 30,
    },
    containerBottomGameItem: {
        alignItems: "left",
    },
    descriptionGameItem: {
        fontSize: 20,
        fontWeight: "normal",
        color: "black",
        textAlign: "justify",
        paddingTop: 5,
    },
});
