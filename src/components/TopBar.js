import React from "react"
import { LinearGradient } from 'expo-linear-gradient';
import { View, StyleSheet, TouchableWithoutFeedback, Text } from "react-native"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { icons, colors, FONTS } from "../theme";


const TopBar = () => {
    return (
        <View style={styles.container}>
            {/* Menu Icon */}
            <TouchableWithoutFeedback>
                <View style={styles.menuIcon}>
                    <FontAwesomeIcon icon={icons.faGrid2} color="white" size={20} />
                </View>
            </TouchableWithoutFeedback>

            {/* Buy Plan */}
            <TouchableWithoutFeedback>
                <LinearGradient colors={['#54c7fd', '#a28afa']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.buyPlan}>
                    <Text style={styles.buyPlanText}>خرید اشتراک</Text>
                    <FontAwesomeIcon icon={icons.faCrown} secondaryColor="orange" secondaryOpacity={1} color="#FFD700" size={20} style={styles.buyPlanIcon} />
                </LinearGradient>
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        marginTop: 15
    },
    menuIcon: {
        alignItems: "center",
        justifyContent: "center",
        width: 45,
        height: 45,
        borderRadius: 99,
        borderColor: colors.lightGray,
        borderWidth: 1,
    },
    buyPlan: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
        height: 45,
        borderRadius: 99,
        paddingHorizontal: 20,
    },
    buyPlanText: {
        ...FONTS.h4,
        color: colors.background
    },
    buyPlanIcon: {
        marginLeft: 5
    }
})

export default TopBar