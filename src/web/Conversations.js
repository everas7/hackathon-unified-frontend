import { useState } from 'react';
import styled from 'styled-components';

import conversations from '../data/conversations';

import ConversationSummary from '../common/ConversationSummary';
import Separator from '../common/Separator';

const Wrapper = styled.div`

    height: 100vh;

    .conversation-nav-wrapper {
        width: 400px;
        height: 100vh;
        border-right: 3px solid gray;
    }
`;

const ConversationNav = ({ conversations, conversationIndex, setConversationIndex }) => {
    return <div>{
        conversations.map(
            (conversation, i) =>
                <div
                    key={i}
                    onClick={() => setConversationIndex(i)}
                >
                    <ConversationSummary
                        contact={conversation.contact}
                        message={conversation.messages[0]}
                        conversationSelected={i === conversationIndex}
                    />
                    <Separator />
                </div>
        )
    }</div>;
};

const Conversations = () => {

    const [conversationIndex, setConversationIndex] = useState(null);

    return <Wrapper>
        <div className="conversation-nav-wrapper">
            <ConversationNav
                conversations={conversations}
                setConversationIndex={setConversationIndex}
                conversationIndex={conversationIndex}
            />
        </div>

        {/* PLACEHOLDER FOR CONVERSATION BUBBLES */}
    </Wrapper>;
};

export default Conversations;
