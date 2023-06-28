import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Footer = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Todos os Direitos Reservados: Gabriel Braga</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    text: {
        fontWeight: 'bold'
    }
})