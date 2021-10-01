import React from 'react';
import { View, Text, Pressable } from 'react-native';
import StyleSheet from 'react-native-media-query';

const defaultProps = {
    title: "Set 'title' prop",
    username: "Set 'username' prop",
    goto: { label: "Set 'goto.label' prop", onPress: () => null },
    tabs: [{ label: "Set 'tab[idx].label' prop", onPress: () => null }],
};

const WebHeader = ({ title, goto = defaultProps.goto, username, tabs = [] }) => {
    return (
        <>
            <View style={[styles.container, styles.layout]} dataSet={{ media: ids.container }}>
                <Text style={styles.title} dataSet={{ media: ids.title }}>
                    {title}
                </Text>
                <Text style={styles.username} dataSet={{ media: ids.username }}>
                    Welcome, {username}
                </Text>
                <Text style={styles.goto} dataSet={{ media: ids.goto }} onPress={goto.onPress}>
                    Go to {goto.label}
                </Text>
            </View>
            <View style={[styles.layout, styles.tabSection]} dataSet={{ media: ids.tabSection }}>
                {tabs.map(tab => (
                    <Pressable onPress={tab.onPress}>
                        <Text style={styles.tab} dataSet={{ media: ids.tab }}>
                            {tab.label}
                        </Text>
                    </Pressable>
                ))}
            </View>
        </>
    );
};

WebHeader.defaultProps = defaultProps;

const { ids, styles } = StyleSheet.create({
    layout: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: '2vh',
        paddingBottom: '2vh',
        paddingLeft: '10vw',
        paddingRight: '10vw',
    },
    container: {
        backgroundColor: '#F0F0F0',
        justifyContent: 'space-between',
        height: '6vh',
        '@media (max-width: 768px)': {
            backgroundColor: '#FFF',
            height: '12vh',
            paddingLeft: '3vw',
            paddingRight: '3vw',
        },
    },
    title: {
        display: 'flex',
        alignItems: 'center',
        color: '#717171',
        fontSize: 20,
        '@media (max-width: 768px)': {
            display: 'flex',
            alignItems: 'flex-end',
        },
    },
    username: {
        display: 'flex',
        alignItems: 'center',
        color: '#717171',
        fontSize: 15,
        '@media (max-width: 768px)': {
            display: 'none',
        },
    },
    goto: {
        display: 'flex',
        color: '#318CE6',
        '@media (min-width: 768px)': {
            display: 'none',
        },
    },
    tabSection: {
        display: 'flex',
        backgroundColor: '#FFF',
        borderBottom: '2px solid #F0F0F0',
        '@media (max-width: 768px)': {
            display: 'none',
        },
    },
    tab: { display: 'flex', marginRight: '2vh', color: '#717171' },
});

export default WebHeader;