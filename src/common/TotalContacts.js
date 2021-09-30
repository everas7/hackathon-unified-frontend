import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';
import { formatNumber } from '../lib/Formatters';

const getStats = contactStats => {
    if (!contactStats) {
        return { count: 0 };
    }

    return { count: contactStats.totalMarketableContacts };
};

const TotalContacts = ({ contactStats }) => {
    const { count } = getStats(contactStats);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Total Contacts</Text>

            <View style={styles.segment}>
                <Text style={styles.total}>
                    {formatNumber({ number: count })}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background_1,
        flex: 1,
        borderRadius: 10,
        marginBottom: 10,
        padding: 20,
    },
    title: {
        color: Colors.text_2,
        fontWeight: '500',
        fontSize: 16,
        marginBottom: 30,
    },
    segment: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginBottom: 10,
    },
    total: {
        color: Colors.text_1,
        fontWeight: '500',
        fontSize: 32,
    },
});

export default TotalContacts;
