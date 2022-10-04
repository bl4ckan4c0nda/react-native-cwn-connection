import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { colors } from "../theme"

function Icon({ size = 25, style, icon, color = colors.muted, bgColor = colors.gray, onPress, ...props }) {
    return (
        <TouchableOpacity activeOpacity={0.2} onPress={onPress}>
            <View style={[styles.container, style, { backgroundColor: bgColor }]} {...props}>
                <FontAwesomeIcon icon={icon} size={size} color={color} />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderRadius: 10
    }
})

export default Icon;