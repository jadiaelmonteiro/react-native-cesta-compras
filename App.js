import React from "react";
import Cesta from "./src/views/Cesta";
import { SafeAreaView, Text, StatusBar } from "react-native"

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta />
    </SafeAreaView>
  )
};