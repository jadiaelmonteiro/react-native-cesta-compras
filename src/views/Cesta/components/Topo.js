import React from 'react';
import { Dimensions, Image, StyleSheet} from 'react-native';

import Texto from '../../../components/Texto';
import topo from '../../../assets/topo.png';

const width = Dimensions.get('screen').width;

export default function Topo( {titulo} ) {
    return <>
        <Image source={topo} style={styles.topo}/>
        <Texto style={styles.title}> {titulo} </Texto>
    </>
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
})