import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from "expo-linear-gradient"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';


import { colors, FONTS, icons } from "../theme"

function ChangeServerButton({ ...props }) {
    const navigation = useNavigation();
    return (
        <View {...props}>
            <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Servers')}>
                <LinearGradient colors={colors.primaryGradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.container}>
                    {/* Location Icon */}
                    {/* Change Server Text */}
                    <View style={styles.rightSection}>
                        <View style={styles.locationIcon}>
                            <FontAwesomeIcon icon={icons.faLocationDot} color={colors.background} secondaryColor={colors.white} secondaryOpacity={1} size={12} />
                        </View>
                        <Text style={styles.changeServerText}>تغییر لوکیشن سرور</Text>
                    </View>

                    {/* Arrow left Icon */}
                    <View>
                        <FontAwesomeIcon icon={icons.faChevronLeft} size={12} color={colors.background} />
                    </View>
                </LinearGradient>
            </TouchableOpacity >
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
        width: "100%",
        height: 80,
        borderRadius: 18,
        paddingHorizontal: 20
    },
    rightSection: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
    },
    locationIcon: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.background,
        width: 25,
        height: 25,
        borderRadius: 99,
        marginLeft: 10
    },
    changeServerText: {
        ...FONTS.h3,
        color: colors.background,
    }
})

export default ChangeServerButton;