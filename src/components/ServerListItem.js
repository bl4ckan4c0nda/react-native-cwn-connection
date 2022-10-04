import React from 'react';
import { View, StyleSheet, Text, Image, TouchableWithoutFeedback } from 'react-native';
import CountryFlag from "react-native-country-flag";

import { colors, FONTS, images } from "../theme"

function ServerListItem({ flag, name, ping, ip, dedicate, selected, onPress }) {

    const borderColorStyles = () => {
        return {
            borderColor: selected ? colors.yellow : colors.lightGray,
            backgroundColor: selected ? colors.yellowOverlay : "transparent"
        }
    }
    const toggleColorStyles = () => {
        return {
            borderColor: selected ? colors.yellow : colors.lightGray,
            backgroundColor: selected ? colors.yellow : "transparent"
        }
    }


    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[styles.container, borderColorStyles()]}>
                {/* Flag, Country Name, IP */}
                <View style={styles.serverDetails}>
                    <CountryFlag isoCode={flag} size={34} style={styles.flag} />
                    <View>
                        <Text style={styles.countryName}>{name}</Text>
                        <Text style={styles.ip}>{ip}</Text>
                    </View>
                </View>

                {/* Toggle,Crown */}
                <View style={{ flexDirection: 'row-reverse', alignItems: 'center' }}>
                    <Image source={images.crown} />
                    <View style={[styles.toggle, toggleColorStyles()]}>
                        {selected && <View style={styles.smCircle} />}
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        padding: 15,
        borderRadius: 15,
        marginBottom: 20
    },
    serverDetails: {
        flexDirection: 'row-reverse',
        alignItems: 'center'
    },
    flag: {
        marginLeft: 10,
        borderRadius: 5
    },
    countryName: {
        textAlign: 'right',
        color: colors.white,
        ...FONTS.h4
    },
    ip: {
        color: colors.muted,
        ...FONTS.body4
    },
    toggle: {
        width: 25,
        height: 25,
        borderRadius: 25,
        borderWidth: 2,
        marginRight: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    smCircle: {
        width: 10,
        height: 10,
        borderRadius: 99,
        backgroundColor: colors.white
    }
})

export default ServerListItem;