import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { formatDate, formatName } from '../lib/Formatters';
import Colors from '../constants/Colors';

const ChannelLabel = ({ documentType, style }) => {
    let label;
    let backgroundColor;

    if (documentType.includes('Sms')) {
        label = 'TEXT';
        backgroundColor = Colors.badge_sms;
    } else if (documentType.includes('Facebook')) {
        label = 'FACEBOOK';
        backgroundColor = Colors.badge_facebook;
    } else if (documentType.includes('Agentz')) {
        label = 'CHAT';
        backgroundColor = Colors.badge_agentz;
    } else if (documentType.includes('PhoneCall')) {
        label = 'VOICEMAIL';
        backgroundColor = Colors.badge_agentz;
    } else {
        label = 'OTHER';
        backgroundColor = Colors.badge_other;
    }

    return (
        <View style={[styles.channelLabelContainer, style, { backgroundColor }]}>
            <Text style={styles.channelLabelText}>{label}</Text>
        </View>
    );
};

const Conversation = ({
    containerStyle,
    conversationRead,
    conversationSelected,
    date,
    documentType,
    message,
    name,
    onSelect,
}) => (
    <TouchableOpacity
        onPress={onSelect}
        style={[
            styles.container,
            conversationSelected ? { backgroundColor: 'rgba(0,0,0,0.07)' } : undefined,
            containerStyle
        ]}
    >
        <View>
            <View style={[styles.dot, { opacity: conversationRead ? 0 : 1 }]} />
        </View>

        <View style={{ flex: 1 }}>
            <View style={styles.header}>
                <Text style={styles.contact_name}>{name}</Text>
                <Text style={styles.date}>{date}</Text>
            </View>

            <ChannelLabel documentType={documentType} style={{ marginVertical: 5 }} />

            <Text numberOfLines={1} style={styles.message}>{message}</Text>
        </View>
    </TouchableOpacity>
);

const ConversationSummary = ({
    contact: {
        conversationRead,
        contactId,
        firstName,
        lastName,
        primaryEmailAddress,
        primaryPhoneNumber,
    },
    conversationSelected,
    message: {
        documentType,
        messageBody,
        timestamp,
    },
    onSelect
}) => {
    const { name } = formatName({
        firstName,
        lastName,
        primaryEmailAddress,
        primaryPhoneNumber,
    });

    const date = formatDate({ date: timestamp });

    const conversationProps = {
        conversationRead,
        conversationSelected,
        date,
        documentType,
        message: messageBody,
        name,
        onSelect,
    };

    return (
        <Conversation {...conversationProps} />
    );
}

const styles = StyleSheet.create({
    channelLabelContainer: {
        alignSelf: 'flex-start',
        borderRadius: 5,
        paddingHorizontal: 6,
        paddingVertical: 3,
    },
    channelLabelText: {
        color: Colors.badge_text,
        fontWeight: 'bold',
        fontSize: 10,
        letterSpacing: 0.5,
    },
    container: {
        backgroundColor: Colors.background_1,
        flex: 1,
        flexDirection: 'row',
        height: 85,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    dot: {
        backgroundColor: Colors.primary,
        borderRadius: 5,
        height: 10,
        marginRight: 5,
        marginTop: 5,
        width: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    contact_name: {
        color: Colors.text_1,
        fontSize: 16,
        fontWeight: '500',
    },
    date: {
        color: Colors.gray_100,
        fontSize: 12,
        fontWeight: '500',
    },
    message: {
        color: Colors.gray_110,
        fontSize: 14,
        fontWeight: '400',
        alignSelf: 'flex-start',
    },
});

export default ConversationSummary;
