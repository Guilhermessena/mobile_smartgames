import React from "react";
import { View, Text, StyleSheet } from "react-native";

export function GameHeader() {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>Smart Games Ltda</Text>
            </View>

        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F8F9FA",
        paddingBottom: 5,
    },

    title: {
        alignSelf: "center",
        fontSize: 36,
        fontWeight: "bold",
        color: "black",
    },
});