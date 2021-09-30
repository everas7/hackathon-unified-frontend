import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';
import { formatNumber } from '../lib/Formatters';

const getStats = contactStats => {
    if (!contactStats) {
        return { emailAndPhone: '--', email: '--', phone: '--' };
    }

    return {
        emailAndPhone: contactStats.emailAndPhoneMarketableContacts,
        email: contactStats.emailMarketableContacts,
        phone: contactStats.phoneMarketableContacts,
    };
};

const ContactType = ({ title, value }) => (
    <View style={styles.segment}>
        <Text style={styles.type_title}>{title}</Text>
        <Text style={styles.type_value}>
            {formatNumber({ number: value })}
        </Text>
    </View>
);

const ContactsByType = ({ contactStats }) => {
    const { emailAndPhone, email, phone } = getStats(contactStats);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contacts by Type</Text>

            <ContactType title='Email + Phone' value={emailAndPhone} />

            <ContactType title='Email' value={email} />

            <ContactType title='Phone' value={phone} />
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
    type_title: {
        color: Colors.text_2,
        fontWeight: '500',
        fontSize: 16,
        marginRight: 10,
    },
    type_value: {
        color: Colors.text_1,
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default ContactsByType;
