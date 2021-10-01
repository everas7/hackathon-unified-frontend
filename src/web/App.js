// App.js - WEB
import React, { useCallback, useEffect, useState } from "react";
import { Dimensions, View, Text, ScrollView, FlatList } from "react-native";
import StyleSheet from 'react-native-media-query';

import WebHeader from '../common/WebHeader';
import CampaignStats from '../common/CampaignStats';
import AverageRating from '../common/AverageRating';
import RatingsBySite from '../common/RatingsBySite';
import ConversationBubble from '../common/ConversationSummary';
import ConversationSummary from '../common/ConversationSummary';
import conversations from '../data/conversations';
import stats from '../data/stats';
import Colors from '../constants/Colors';

const window = Dimensions.get("window");

const WidgetContainer = ({ useHorizontalSpacing, children }) => {
  return (
    <View
      style={[
        styles.widgetDummy,
        useHorizontalSpacing ? { marginLeft: '20px' } : null
      ]}
      dataSet={{ media: ids.widgetDummy }}
    >
      {children}
    </View>
  );
};

const Separator = () => {
  return (
    <View style={styles.separator} />
  );
};

const App = () => {
  const [location, setLocation] = useState('Dashboard');
  const [navText, setNavText] = useState('Go to Conversations');
  const [activeConvo, setActiveConvo] = useState([]);
  const [contactName, setContactName] = useState('');
  const [useHorizontalSpacing, setUseHorizontalSpacing] = useState(window.width >= 768);

  const handleNavigationButton = useCallback(() => {
    if (location === 'Dashboard') {
      setLocation('Conversations');
    } else if (location === 'Conversations') {
      setLocation('Dashboard');
    } else if (location === 'Single Conversation') {
      setLocation('Conversations');
    }
  }, [location]);

  useEffect(() => {
    if (location === 'Dashboard') {
      setNavText('Conversations');
    } else if (location === 'Conversations') {
      setNavText('Dashboard');
    } else if (location === 'Single Conversation') {
      setNavText('Conversations');
    }
  }, [location])

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      ({ window: newWindow }) => {
        setUseHorizontalSpacing(newWindow.width >= 768)

        if (newWindow.width >= 768 && location === 'Single Conversation') {
          setLocation('Conversations');
        }
      }
    );

    return () => subscription?.remove();
  });

  return (
    <View>
      {/* Header */}
      <WebHeader
        title={location}
        goto={{ label: navText, onPress: handleNavigationButton }}
        username='Jontho but User'
        tabs={[{ label: 'Dashboard', onPress: handleNavigationButton }, { label: 'Conversations', onPress: handleNavigationButton }]}
      />

      {/* Content */}
      {location === 'Dashboard' && (
        <View style={styles.background} dataSet={{ media: ids.background }}>
          <View style={styles.content} dataSet={{ media: ids.content }}>
              <Text style={styles.sectionsText} dataSet={{ media: ids.sectionsText }}>
                Reviews
              </Text>
              <View style={styles.container} dataSet={{ media: ids.container }}>
                <WidgetContainer>
                  <AverageRating
                    reviewStats={[
                      { reviewCount: 12, rating: 4.3 },
                      { reviewCount: 13, rating: 4.8 },
                    ]}
                  />
                </WidgetContainer>
                <WidgetContainer useHorizontalSpacing={useHorizontalSpacing}>
                  <RatingsBySite
                    reviewSites={[
                      {
                        id: 1,
                        reviewSiteId: 1,
                      },
                    ]}
                    reviewStats={[
                      { reviewCount: 12, rating: 4.3, reviewSiteId: 1 },
                      { reviewCount: 13, rating: 4.8 },
                    ]}
                  />
                </WidgetContainer>
              </View>

              <Text style={styles.sectionsText} dataSet={{ media: ids.sectionsText }}>
                Contacts
              </Text>
              <View style={styles.container} dataSet={{ media: ids.container }}>
                <WidgetContainer />
                <WidgetContainer useHorizontalSpacing={useHorizontalSpacing} />
              </View>

              <Text style={styles.sectionsText} dataSet={{ media: ids.sectionsText }}>
                Campaigns
              </Text>
              <View style={styles.container} dataSet={{ media: ids.container }}>
                <WidgetContainer>
                  <CampaignStats campaignStats={stats.campaignStats} />
                </WidgetContainer>
              </View>
          </View>
        </View>
      )}

      {location === 'Conversations' && (
        <View style={styles.background} dataSet={{ media: ids.background }}>
          <View style={styles.content} dataSet={{ media: ids.content }}>
            {useHorizontalSpacing && null} {/* WILLS CHAT */}
            {!useHorizontalSpacing && (
                <FlatList
                  data={conversations}
                  ItemSeparatorComponent={Separator}
                  renderItem={
                    ({ item: { contact, messages } }) => (
                      <ConversationSummary
                        key={contact.contactId}
                        contact={contact}
                        message={messages[0]}
                        onSelect={() => {
                          setLocation('Single Conversation');
                          setActiveConvo(messages);
                          setContactName(`${contact.firstName} ${contact.lastName}`);
                        }}
                      />
                    )
                  }
                />
            )}
          </View>
        </View>
      )}

      {location === 'Single Conversation' && (
        <View style={styles.background} dataSet={{ media: ids.background }}>
          <View style={styles.content} dataSet={{ media: ids.content }}>
            {useHorizontalSpacing && null} {/* WILLS CHAT */}
            {!useHorizontalSpacing && (
              <ScrollView
                showsVerticalScrollIndicator={false}
              >
                {/* <View style={{ flex: 1 }}>
                  <FlatList
                    contentContainerStyle={{ paddingHorizontal: 15, paddingVertical: 10 }}
                    data={activeConvo}
                    inverted={true}
                    renderItem={
                      ({ item: message }) => {
                        const orientation = message.documentType.includes('Interaction') ?
                          'left' : 'right';
                        const sender = orientation === 'right' ? 'You' : contactName

                        return (
                          <ConversationBubble
                            key={message.timestamp}
                            messageContent={message.messageBody}
                            orientation={orientation}
                            sender={sender}
                            timestamp={message.timestamp}
                          />
                        );
                      }
                    }
                  />

                  <View style={styles.sender}>
                    <View style={styles.text_input_container}>
                      <Text style={styles.text_input}>Text message</Text>
                    </View>
                    <Text style={styles.send_button} >Send</Text>
                  </View>

                  <SafeAreaView style={{ flex: 0, backgroundColor: Colors.gray_70 }} />
                </View> */}
              </ScrollView>
            )}
          </View>
        </View>
      )}
    </View>
  );
};

const {ids, styles} = StyleSheet.create({
  separator: {
    marginTop: '5px',
  },

  widgetDummy: {
    minHeight: '100px',
    marginBottom: '10px',
    borderRadius: '10px',
    backgroundColor: 'white',
    marginTop: '10px',
    width: '100%',
    flex: 1,
  },

  background: {
    height: Dimensions.get('window').height,
    backgroundColor: '#f1f2f6',
    paddingTop: '10px',
  },

  content: {
    width: '96%',
    margin: 'auto',
    flex: 1,

    '@media (min-width: 768px)': {
      maxWidth: '1080px',
    },
  },

  sectionsText: {
    marginTop: '10px',
  },

  container: {
    display: 'flex',
    flexDirection: 'column',

    '@media (min-width: 768px)': {
      flexDirection: 'row',
    },
  },
});

export default App;
