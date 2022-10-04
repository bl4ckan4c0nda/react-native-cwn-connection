import React, { useState } from 'react';
import CountryFlag from "react-native-country-flag";
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { colors, FONTS, icons } from '../theme';

function ConnectedServer({ location }) {
    if (!location) return (
        <View style={[styles.container, { justifyContent: 'center' }]}>
            <Text style={styles.countryText}>در حال حاضر سرویسی انتخاب نشده است</Text>
        </View>
    )
    return (
        <View style={styles.container}>
            {/* Flag & Country */}
            <View style={styles.rightSection}>
                <CountryFlag isoCode="de" size={20} style={styles.flagIcon} />
                <Text style={styles.countryText}>آلمان</Text>
            </View>
            {/* Ping Icon */}
            <View>
                <FontAwesomeIcon icon={icons.faSignalBarsGood} size={20} color={colors.white} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 50,
        borderWidth: 1,
        borderColor: colors.lightGray,
        borderRadius: 99,
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 25
    },
    rightSection: {
        flexDirection: 'row-reverse',
        alignItems: 'center'
    },
    flagIcon: {
        borderRadius: 3,
        marginLeft: 10
    },
    countryText: {
        ...FONTS.body4,
        color: colors.white,
    }

})

export default ConnectedServer;