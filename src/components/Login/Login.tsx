import React from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";

export const Login = () => {

    const handleButton = () => {

    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Username 
            </Text>
            <TextInput
            style={styles.inputArea}
            placeholder="Digite aqui seu Username: "
            />
            
            <Text style={styles.title}> 
                Password
            </Text>
            <TextInput
            style={styles.inputArea}
            placeholder="Digite aqui sua senha: "
            
            />

            <Button
            title="Logar"
            onPress={handleButton}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 60,
        flex: 1,
        gap: 15,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf: 'center',
        color: '#808080',
        

    },
    inputArea: {
        alignItems: 'center',
        marginBottom: 10,
    },
})