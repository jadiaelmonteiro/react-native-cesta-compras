import React from "react";
import Cesta from "./src/views/Cesta";
import { SafeAreaView, StatusBar } from "react-native";
import mock from "./src/mocks/cesta"

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta {...mock}/>
    </SafeAreaView>
  )
};