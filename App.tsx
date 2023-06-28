import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Home } from "./src/pages/Home";
import { Login } from "./src/components/Login/Login";
import { Footer } from "./src/components/Footer/Footer";


const App = () => {
  
  return(
      <View style={styles.container}>
          <Home/>
          <Login/>
          <Footer/>
      </View>
  )
}

export default App


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f4f4f4',
  }
  
})