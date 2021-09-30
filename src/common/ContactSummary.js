import React from 'react';
import {
    ActivityIndicator,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import Colors from '../constants/Colors';
import { formatName } from '../lib/Formatters';

const Contact= ({
    channels,
    contactId,
    firstName,
    lastName,
    primaryEmailAddress,
    primaryPhoneNumber,
}) => {
    const { name } = formatName({
        firstName,
        lastName,
        primaryEmailAddress,
        primaryPhoneNumber,
    });

    return (
        <View style={styles.container}>
            <Text style={styles.contact_name}>{name}</Text>
            {/* {isAddingToList ?
                <ActivityIndicator color={Colors.primary}/> :
                <TouchableOpacity onPress={() => onAdd({ contactId })}>
                    <Text style={[styles.contact_name, { color: Colors.primary }]}>
                        Add
                    </Text>
                </TouchableOpacity>
            } */}
        </View>
    );
};

const ContactSummary = ({
    contact: {
        channels,
        contactId,
        firstName,
        lastName,
        primaryEmailAddress,
        primaryPhoneNumber,
    }
}) => {

  const contactProps = {
    channels,
    contactId,
    firstName,
    lastName,
    primaryEmailAddress,
    primaryPhoneNumber,
  };

  return (
      <Contact {...contactProps}></Contact>
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background_1,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 30,
        paddingRight: 15,
        paddingVertical: 20,
    },
    contact_name: {
        color: Colors.text_2,
        fontFamily: 'Apercu-Medium',
        fontSize: 16,
    },
    rightAction: {
        backgroundColor: Colors.danger,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    action_text: {
        color: Colors.danger_text,
        fontSize: 16,
    },
});

export { ContactSummary };