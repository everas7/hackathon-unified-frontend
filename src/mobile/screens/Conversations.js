import React from 'react';
import {
    FlatList,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Separator from '../../common/Separator';
import Colors from '../../constants/Colors';

const conversations = [1,2,3,4,5]

const Conversations = ({ onNavigate, onSelectConvo }) => {
    return (
        <>
            <SafeAreaView style={{ flex: 0, backgroundColor: Colors.background_1 }} />

            <View style={styles.container}>
                <StatusBar backgroundColor={Colors.background_1} barStyle='dark-content' />

                <View style={styles.header}>
                    <TouchableOpacity onPress={onNavigate} >
                        <Text style={styles.label_button}>
                            Go to Dashboard
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.title_container}>
                    <Text style={styles.title}>Conversations</Text>
                </View>

                <FlatList
                    data={conversations}
                    ItemSeparatorComponent={Separator}
                    keyExtractor={item => String(item.contactId)}
                    renderItem={
                        ({ item: { contact, message } }) => (
                            <Text>Conversations</Text>
                            // <ConversationSummary
                            //     checked={isEditable ? !!selectedConvs[contact.contactId] : false}
                            //     contact={contact}
                            //     dispatch={dispatch}
                            //     editable={isEditable}
                            //     message={message}
                            //     navigation={navigation}
                            //     onCheck={checkConversation}
                            // />
                        )
                    }
                />

            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background_1,
    },
    header: {
        backgroundColor: Colors.background_1,
        alignItems: 'flex-end',
        paddingBottom: 15,
        paddingHorizontal: 15,
        paddingTop: 10,
    },
    label_button: {
        color: Colors.primary,
        fontWeight: '500',
        fontSize: 16,
    },
    title_container: {
        backgroundColor: Colors.background_1,
        borderBottomWidth: 2,
        borderColor: Colors.gray_20,
        paddingBottom: 20,
        paddingHorizontal: 15,
        paddingTop: 5,
    },
    title: {
        color: Colors.text_1,
        fontWeight: '500',
        fontSize: 32,
        lineHeight: 40,
    },
    
    
});

export default Conversations;
