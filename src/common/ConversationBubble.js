import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { formatDate } from '../lib/Formatters';

const ConversationBubble = ({
    messageContent,
    messageTitle,
    orientation,
    sender,
    timestamp,
}) => {
    const date = timestamp ? formatDate({ date: timestamp }) : '';

    // Orientation-based styles
    let bodyBackgroundColor;
    let bubbleAlignment;
    let messageTitleColor;
    let senderColor;

    if (orientation === 'right') {
        bodyBackgroundColor = { backgroundColor: 'rgba(199, 227, 255, 0.2)', borderColor: '#005BB5' };
        bubbleAlignment = { alignSelf: 'flex-end' };
        messageTitleColor = { color: '#005BB5' };
        senderColor = { color: '#005BB5' };
    } else {
        bodyBackgroundColor = { backgroundColor: '#F7F8F8', borderColor: '#D7DBDF' };
        bubbleAlignment = { alignSelf: 'flex-start' };
        messageTitleColor = { color: '#000' };
        senderColor = { color: '#000' };
    }

    return (
        <View style={[styles.bubble_container, bubbleAlignment]}>
            <View style={styles.header}>
                <Text style={[styles.sender, senderColor]}>{sender}</Text>
                <Text style={styles.date}>{date}</Text>
            </View>

            <View style={[styles.body, bodyBackgroundColor]}>
                {messageTitle &&
                    <Text style={[styles.message_title, messageTitleColor]}>{messageTitle}</Text>
                }
                <Text style={styles.message_content}>{messageContent}</Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        textAlign: 'left',
        borderRadius: 10,
        borderWidth: 1,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    bubble_container: {
        width: '70%',
        marginVertical: 10,
    },
    date: {
        color: '#8C96A1',
        fontSize: 12,
        fontWeight: '500',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    message_content: {
        color: '#657281',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 20,
    },
    message_title: {
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 20,
    },
    sender: {
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default ConversationBubble;
