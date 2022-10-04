import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from "expo-linear-gradient"

import { colors, FONTS } from "../theme"

function Button({ title, style, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <LinearGradient colors={colors.secondaryGradient} start={{ x: 0, y: 0 }} end={{ x: 0.8, y: 0 }} style={[styles.container, style]}>
                <Text style={styles.text}>{title}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 18,
        borderRadius: 18,
    },
    text: {
        ...FONTS.body3,
        color: colors.white,
        textAlign: 'center'
    }
})

export default Button;