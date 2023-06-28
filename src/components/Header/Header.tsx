import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.secondContainer}>
                <Image
                    style={styles.image}
                    source={require('../../assets/todo-logo.png')}
                />

                <Text style={styles.title}>Todo-List App</Text>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        marginVertical: 30,
    },
    secondContainer: {
        gap: 10
    },
    title: {
        fontSize: 21,
        fontWeight: 'bold',
    },
    image: {
        width: 80,
        height: 80,
        alignSelf: 'center'
    }
})