import React from "react"
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from "react-native"

import { colors, FONTS } from "../theme"
import Screen from "../components/Screen"
import TopBar from "../components/TopBar"
import ChangeServerButton from "../components/ChangeServerButton"
import ConnectToServerButton from "../components/ConnectToServerButton"
import ConnectedServer from "../components/ConnectedServer"

const HomeScreen = () => {
    return (
        <Screen style={styles.container}>
            <TopBar />
            <ConnectToServerButton />
            <Text style={styles.connectionStatusText}>در حال حاضر متصل هستید</Text>
            <ConnectedServer location="any" />
            <ChangeServerButton style={styles.changeServerButton} />
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    changeServerButton: {
        position: "absolute",
        bottom: 50,
        width: "100%",
        alignSelf: 'center'
    },
    connectionStatusText: {
        textAlign: 'center',
        ...FONTS.body3,
        color: colors.white,
        marginVertical: 20
    }
})

export default HomeScreen;