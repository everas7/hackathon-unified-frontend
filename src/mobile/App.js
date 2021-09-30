// App.js - React Native

import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Dashboard from './screens/Dashboard';
import Conversations from './screens/Conversations';
import ConversationDetails from "./screens/ConversationDetails";

const AVAILABLE_SCREENS = {
    DASHBOARD: 'DASHBOARD',
    CONVERSATIONS: 'CONVERSATIONS',
    CONVERSATION_DETAILS: 'CONVERSATION_DETAILS'
};

export default function App() {
    const [activeScreen, setActiveScreen] = useState(AVAILABLE_SCREENS.DASHBOARD);
    const [selectedConversation, setSelectedConversation] = useState(null);
    let renderedScreen;

    switch (activeScreen) {
        case AVAILABLE_SCREENS.DASHBOARD: {
            renderedScreen = (
                <Dashboard
                    onNavigate={() => setActiveScreen(AVAILABLE_SCREENS.CONVERSATIONS)}
                />
            );
            break;
        }
        case AVAILABLE_SCREENS.CONVERSATIONS: {
            renderedScreen = (
                <Conversations
                    onNavigate={() => setActiveScreen(AVAILABLE_SCREENS.DASHBOARD)}
                    onSelectConvo={
                        (convo) => {
                            setActiveScreen(AVAILABLE_SCREENS.CONVERSATION_DETAILS);
                            setSelectedConversation(convo);
                        }
                    }
                />
            );
            break;
        }
        case AVAILABLE_SCREENS.CONVERSATION_DETAILS: {
            renderedScreen = (
                <ConversationDetails
                    conversation={selectedConversation}
                    onNavigate={() => setActiveScreen(AVAILABLE_SCREENS.CONVERSATIONS)}
                />
            );
            break;
        }

        default:{
            renderedScreen = null;
            break;
        }
    }

    return (
        <View style={styles.container}>
            {renderedScreen}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});