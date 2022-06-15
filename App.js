import React from "react";
import Cesta from "./src/views/Cesta";
import MeuComponente from "./components/ComponenteClass";
import { View, Text, StyleSheet, StatusBar } from "react-native"

export default function App() {
  return (
    <View>
      <StatusBar barStyle='light-content' />
      <Text style={stles.container}>
        Jadiael Monteiro
      </Text>
      <Cesta></Cesta>
      <MeuComponente></MeuComponente>
    </View>
  );
}

const stles = StyleSheet.create({
  container: {
    alignItems: 'center',
    //flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    fontSize: 50,
  }
})