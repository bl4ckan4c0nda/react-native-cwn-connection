import React from 'react';
import { View, StyleSheet } from "react-native"
import Constants from 'expo-constants';

import { colors } from '../theme';

const Screen = ({ children, style, ...otherProps }) => {
    return (
        <View style={[styles.screen, style]} {...otherProps}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: colors.background,
    }
})

export default Screen;