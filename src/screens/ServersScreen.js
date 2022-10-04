import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Screen from '../components/Screen';
import ServerListItem from '../components/ServerListItem';
import ServiceTypeTabs from '../components/ServiceTypeTabs';
import Icon from '../components/Icon';
import Button from '../components/Button';

import { colors, icons } from '../theme';

import Servers from "../data/Servers"

function ServersScreen() {
    const navigation = useNavigation();

    const [selectedServer, setSelectedServer] = useState(false)
    const [serverLists, setServerLists] = useState([])

    useEffect(() => {
        getServerLists(Servers)
    }, [])

    const getServerLists = (servers) => {
        setServerLists(servers.filter(sv => sv.dedicate))
    }

    const handleSelect = (item) => {
        setSelectedServer(item)
    }

    const handleSort = (dedicate) => {
        const cloneServerLists = [...Servers]
        setServerLists(cloneServerLists.filter(sv => sv.dedicate === dedicate))
    }

    return (
        <Screen>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20 }}>
                <Icon icon={icons.faAngleLeft} onPress={() => navigation.goBack()} />
                <Icon icon={icons.faArrowsRotate} />
            </View>
            <ServiceTypeTabs onSort={handleSort} />
            <FlatList
                style={{ marginBottom: 140 }}
                data={serverLists}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <ServerListItem
                        flag={item.flag}
                        name={item.name}
                        ping={item.ping}
                        dedicate={item.dedicate}
                        ip={item.ip}
                        selected={selectedServer.id === item.id}
                        onPress={() => handleSelect(item)} />
                )}
            />
            <View style={{
                backgroundColor: colors.gray,
                position: 'absolute',
                bottom: 0,
                right: 0,
                left: 0,
                height: 140,
                justifyContent: 'center',
                paddingHorizontal: 20

            }}>
                <Button style={{}} title="خرید سرویس آیپی ثابت" />
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {}
})

export default ServersScreen;