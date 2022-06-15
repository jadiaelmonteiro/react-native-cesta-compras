import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Texto({ style, children }){
    let estilo = styles.texto;
    
    if (style?.fontWeight === 'bold') {
        estilo = styles.textoNegrito;
    }

    return <Text style={[style, estilo]}>{ children }</Text>
}

const styles = StyleSheet.create({
    texto: {
        fontFamily: "Montserrat-Regular",
        fontWeight: "normal",
    },
    textoNegrito: {
        fontFamily: "Montserrat-Bold",
        fontWeight: "normal",
    }

})