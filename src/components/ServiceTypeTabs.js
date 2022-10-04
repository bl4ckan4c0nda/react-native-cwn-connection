import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Animated, {
    useSharedValue,
    withTiming,
    useAnimatedStyle,
} from 'react-native-reanimated';


import { colors, FONTS } from '../theme';

function ServiceTypeTabs({ onSort }) {
    const [selectedType, setSelectedType] = useState({ dedicate: true })

    const offsetLeft = useSharedValue(11)

    const findDimensions = (layout) => {
        const { x, y, width, height } = layout
        offsetLeft.value = width
    }

    const animatedStyles = useAnimatedStyle(() => {
        return {
            left: selectedType.dedicate ? withTiming(offsetLeft.value / 40) : withTiming(offsetLeft.value / 2)
        }
    })

    return (
        <View style={styles.container} onLayout={(event) => findDimensions(event.nativeEvent.layout)}>
            <Animated.View style={[styles.selectedBox, animatedStyles]} />
            <TouchableWithoutFeedback
                onPress={() => {
                    onSort(true)
                    setSelectedType({ dedicate: true })
                }}>
                <View style={styles.col}>
                    <Text style={styles.text}>اختصاصی</Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
                onPress={() => {
                    onSort(false)
                    setSelectedType({ dedicate: false })
                }}>
                <View style={styles.col}>
                    <Text style={styles.text}>اشتراکی</Text>
                </View>
            </TouchableWithoutFeedback>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        backgroundColor: colors.gray,
        marginBottom: 20,
        borderRadius: 10
    },
    selectedBox: {
        width: "48%",
        height: "75%",
        position: 'absolute',
        backgroundColor: colors.lightGray,
        borderRadius: 10
    },
    col: {
        width: "50%",
    },
    text: {
        color: colors.white,
        ...FONTS.body4,
        textAlign: 'center'
    }
})

export default ServiceTypeTabs;