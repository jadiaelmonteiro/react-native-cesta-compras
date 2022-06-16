import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

import Texto from '../../../components/Texto';

export default function Detalhes( {nome, logoFazenda, nomeFazenda, descricao, preco} ) {
  return <>
    <Texto style={styles.titleCesta}> {nome} </Texto>

    <View style={styles.fazenda}>
      <Image source={logoFazenda} style={styles.imageFazenda} />
      <Texto style={styles.titleFazenda}> {nomeFazenda} </Texto>
    </View>

    <Texto style={styles.descricao}> {descricao} </Texto>
    <Texto style={styles.preco}> {preco} </Texto>
  </>
}

const styles = StyleSheet.create({
  titleCesta: {
    color: "#464646",
    fontSize: 26,
    lineHeight: 42,
    fontWeight: "bold",
  },
  fazenda: {
    flexDirection: "row",
    paddingVertical: 12,
  },
  imageFazenda: {
    width: 32,
    height: 32,
  },
  titleFazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  descricao: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
  },
  preco: {
    color: "#2A9F85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  }
})