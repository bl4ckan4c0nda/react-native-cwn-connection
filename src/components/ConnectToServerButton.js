import React from 'react';
import { View, StyleSheet, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { LinearGradient } from 'expo-linear-gradient';

import { icons, colors } from '../theme';

const { height: SCREEN_HEIGHT } = Dimensions.get('window')

function ConnectToServerButton() {
    return (
        <View style={styles.container}>
            <LinearGradient colors={['rgba(64,199,254,0.1)', 'rgba(136,143,250,0.1)']} style={styles.circleLg}>
                <LinearGradient colors={['rgba(64,199,254,0.3)', 'rgba(136,143,250,0.3)']} style={styles.circleMd}>
                    <LinearGradient colors={['rgba(64,199,254,0.5)', 'rgba(136,143,250,0.5)']} style={styles.circleSm}>
                        <TouchableWithoutFeedback onPress={() => console.log("tapped")}>
                            <LinearGradient colors={colors.primaryGradient} style={styles.mainCircle}>
                                <FontAwesomeIcon icon={icons.faPowerOff} size={40} color={colors.green} />
                            </LinearGradient>
                        </TouchableWithoutFeedback>
                    </LinearGradient>
                </LinearGradient>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        marginTop: 70
    },
    circleLg: {
        height: SCREEN_HEIGHT / 2.6,
        width: SCREEN_HEIGHT / 2.6,
        borderRadius: SCREEN_HEIGHT / 2.6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    circleMd: {
        height: SCREEN_HEIGHT / 3.2,
        width: SCREEN_HEIGHT / 3.2,
        borderRadius: SCREEN_HEIGHT / 3.2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    circleSm: {
        height: SCREEN_HEIGHT / 4.3,
        width: SCREEN_HEIGHT / 4.3,
        borderRadius: SCREEN_HEIGHT / 4.3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainCircle: {
        height: SCREEN_HEIGHT / 6.5,
        width: SCREEN_HEIGHT / 6.5,
        borderRadius: SCREEN_HEIGHT / 6.5,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default ConnectToServerButton;