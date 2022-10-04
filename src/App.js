import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// assets
import { imageAssets } from './theme/images'
import { fontAssets } from './theme/fonts'

import IntroScreen from './screens/IntroScreen'
import HomeScreen from './screens/HomeScreen'
import ServersScreen from './screens/ServersScreen'

const Stack = createNativeStackNavigator();

const App = () => {
    const [didLoad, setDidLoad] = useState(false)

    // assets preloading
    const handleLoadAssets = async () => {
        await Promise.all([...fontAssets, ...imageAssets])
        setDidLoad(true)
    }

    useEffect(() => {
        handleLoadAssets()
    }, [])

    return didLoad ? (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                />
                <Stack.Screen
                    name="Servers"
                    component={ServersScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    ) : (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>didn't load yet</Text></View>
    )
}

export default App