import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import Texto from "../components/Texto";

//import das imagens
import topo from '../../src/assets/topo.png';
import logo from '../../src/assets/logo.png';

const width = Dimensions.get('screen').width;

export default function Cesta() {
    return (
        <>
            <Image source={topo} style={styles.topo} />
            <Texto style={styles.title}> Detalhes da cesta</Texto>

            <View style={styles.viewCesta}>
                <Texto style={styles.titleCesta}>Cesta de Verduras</Texto>

                <View style={styles.fazenda}>
                    <Image source={logo} style={styles.imageFazenda} />
                    <Texto style={styles.titleFazenda}>Jenny Jack Farm</Texto>
                </View>

                <Texto style={styles.descricao}>
                    Uma cesta com produtos selecionados cuidadosamente
                    da fazenda direto para sua cozinha.
                </Texto>
                <Texto style={styles.preco}>R$ 40,00 </Texto>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width,
    },
    title: {
        width: "100%",
        position: "absolute", //texto absoluto a imagem
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16,
    },
    viewCesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
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
});