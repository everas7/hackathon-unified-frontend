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
import Colors from '../../constants/Colors';

const messages = [1,2,3,4,5]

const ConversationDetails = ({ onNavigate }) => {
    return (
        <>
            <SafeAreaView style={{ flex: 0, backgroundColor: Colors.background_1 }} />

            <View style={styles.container}>
                <StatusBar backgroundColor={Colors.background_1} barStyle='dark-content' />

                <View style={styles.header}>
                    <TouchableOpacity onPress={onNavigate} >
                        <Text style={styles.label_button}>
                            {'<  Back'}
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.title_container}>
                    <Text style={styles.title}>John Doe</Text>
                    <Text style={styles.lifecycle}>Active Customer</Text>
                </View>

                <View style={{ flex: 1 }}>

                    <FlatList
                        data={messages}
                        inverted={true}
                        // keyExtractor={item => String(item.id)}
                        renderItem={
                            ({ item }) => (
                                <Text key={item}>{item}</Text>
                                // <MessageSummary
                                //     activity={activity}
                                //     onPressMedia={mediaId => setMediaSelected(mediaId)}
                                // />
                            )
                        }
                    />

                    <View style={styles.sender}>
                        <View style={styles.text_input_container}>
                            <Text style={styles.text_input}>Text message</Text>
                        </View>
                        <Text style={styles.send_button} >Send</Text>
                    </View>

                    <SafeAreaView style={{ flex: 0, backgroundColor: Colors.gray_70 }} />

                </View>

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
        paddingBottom: 15,
        paddingHorizontal: 15,
        paddingTop: 10,
    },
    label_button: {
        color: Colors.primary,
        fontWeight: '500',
        fontSize: 16,
    },
    lifecycle: {
        color: Colors.gray_100,
        fontWeight: '400',
        fontSize: 16,
        marginBottom: 10,
    },
    sender: {
        alignItems: 'center',
        backgroundColor: Colors.gray_70,
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    send_button: {
        color: Colors.gray_100,
        fontSize: 16,
        fontWeight: '500',
        marginLeft: 10,
    },
    text_input: {
        color: Colors.gray_100,
        fontSize: 16,
        fontWeight: '400',
    },
    text_input_container: {
        backgroundColor: Colors.white,
        borderColor: Colors.gray_80,
        borderRadius: 10,
        borderWidth: 2,
        flex: 1,
        height: 40,
        justifyContent: 'center',
        paddingLeft: 15,
    },
    title: {
        color: Colors.text_1,
        fontWeight: '500',
        fontSize: 26,
        marginBottom: 5,
    },
    title_container: {
        backgroundColor: Colors.background_1,
        borderBottomWidth: 2,
        borderColor: Colors.gray_20,
        paddingBottom: 15,
        paddingHorizontal: 15,
        paddingTop: 5,
    },
    
    
});

export default ConversationDetails;
