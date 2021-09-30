import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import moment from 'moment';
import Colors from '../constants/Colors';

const NAME_SOURCE = {
  NAME: 'NAME',
  EMAIL: 'EMAIL',
  PHONE: 'PHONE',
};

const formatDate = ({ date }) => {
  if (!date) {
      return '';
  }

  const selectedDate = moment(date);

  if (selectedDate.isSame(moment(), 'd')) { // Is today
      return `${selectedDate.format('[Today] h:mm a')}`;
  } else if (selectedDate.isAfter(moment().subtract(1, 'd').startOf(), 'd')) { // Is yesterday
      return `${selectedDate.format('[Yesterday] h:mm a')}`;
  } else if (selectedDate.isAfter(moment().startOf('year'), 'd')) { // Is this year
      return `${selectedDate.format('MMM D h:mm a')}`;
  } else { // Previous years
      return `${selectedDate.format('MMM D YYYY h:mm a')}`;
  }
}

const formatPhoneNumber = ({ phoneNumber }) => {
  if (!phoneNumber) {
      return '';
  }

  let renderedPhoneNumber = phoneNumber;

  renderedPhoneNumber = renderedPhoneNumber.replace(/\D/g, '').slice(-10);
  renderedPhoneNumber =
      `(${renderedPhoneNumber.substring(0, 3)}) ${renderedPhoneNumber.substring(3, 6)}-${renderedPhoneNumber.substring(6, renderedPhoneNumber.length)}`;

  return renderedPhoneNumber;
}

const formatName = ({
  firstName,
  lastName,
  primaryEmailAddress,
  primaryPhoneNumber,
}) => {
  let name = '';
  let source = '';

  if (firstName || lastName) {
      const firstPart = firstName ? `${firstName} ` : '';

      name = `${firstPart}${lastName || ''}`;
      source = NAME_SOURCE.NAME;
  } else if (primaryPhoneNumber) {
      name = formatPhoneNumber({ phoneNumber: primaryPhoneNumber });
      source = NAME_SOURCE.PHONE;
  } else if (primaryEmailAddress) {
      name = primaryEmailAddress;
      source = NAME_SOURCE.EMAIL;
  }

  return { name, source };
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

  editable: {
      alignItems: 'center',
      flexDirection: 'row',
      paddingLeft: 10,
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
      color: Colors.text_2,
      fontSize: 16,
  },
  date: {
      color: Colors.gray_100,
      fontSize: 10,
  },
  message: {
      color: Colors.gray_110,
      fontSize: 14,
      alignSelf: 'flex-start',
  },
});

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
    date,
    documentType,
    message,
    name,
}) => (
    <View style={[styles.container, containerStyle]}>
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
    </View>
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
  message: {
      documentType,
      messageBody,
      timestamp,
  },
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
      date,
      documentType,
      message: messageBody,
      name,
  };

  return (
    <Conversation {...conversationProps} />
  );
}

export default ConversationSummary;
