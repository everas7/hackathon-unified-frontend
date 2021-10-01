import { useState } from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
// import styled from 'styled-components';

import conversations from '../../data/conversations';

import ConversationSummary from '../../common/ConversationSummary';
import ConversationDetails from '../../mobile/screens/ConversationDetails';
import Separator from '../../common/Separator';

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        // height: '100vh',
        flexDirection: 'row',
        width: '100%',
    },
    conversationNavWrapper: {
        width: '30%',
        // maxHeight: '90%',

        borderRight: '3px solid gray',
        height: 'calc(100vh - 105px)',
    },
    conversationDetails: {
        width: '70%',
        // maxHeight: '90%',
        height: 'calc(100vh - 105px)',
    }
});

const ConversationNav = ({ conversations, conversationIndex, setConversationIndex }) => {
    return <View>{
        conversations.map(
            (conversation, i) =>
                <TouchableOpacity
                    className={"asdfasdf" + i}
                    key={i}
                    onPress={() => setConversationIndex(i)}
                >
                    <ConversationSummary
                        contact={conversation.contact}
                        message={conversation.messages[0]}
                        conversationSelected={i === conversationIndex}
                        onSelect={() => setConversationIndex(i)}
                        mobile = {false}
                    />
                    <Separator />
                </TouchableOpacity>
        )
    }</View>;
};

const Conversations = () => {

    const [conversationIndex, setConversationIndex] = useState(0);

    return <View style={styles.wrapper}>
        <View style={styles.conversationNavWrapper} >
            <ConversationNav
                conversations={conversations}
                setConversationIndex={setConversationIndex}
                conversationIndex={conversationIndex}
            />
        </View>
        <View style={styles.conversationDetails}>
            <ConversationDetails
                isWeb
                conversation={conversations[conversationIndex]}
            />
        </View>

    </View>;
};

export default Conversations;
