import React from 'react';
import { View, Text } from 'react-native';
import StyleSheet from 'react-native-media-query';

const defaultProps = {
    title: "Set 'title' prop",
    username: "Set 'username' prop",
    goto: { label: "Set 'goto.label' prop", onPress: () => null },
};

const WebHeader = ({ title, goto = defaultProps.goto, username }) => {
    return (
        <View style={styles.container} dataSet={{ media: ids.container }}>
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
    );
};

WebHeader.defaultProps = defaultProps;

const { ids, styles } = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#F0F0F0',
        height: '6vh',
        paddingTop: '2vh',
        paddingBottom: '2vh',
        paddingLeft: '10vw',
        paddingRight: '10vw',
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
});

export default WebHeader;
