// App.js - WEB
import React, { useCallback, useEffect, useState } from "react";
import { Dimensions, View, Text, ScrollView, Button, FlatList, Pressable } from "react-native";
import StyleSheet from 'react-native-media-query';

import WebHeader from '../common/WebHeader';
import CampaignStats from '../common/CampaignStats';
import AverageRating from '../common/AverageRating';
import RatingsBySite from '../common/RatingsBySite';
import ConversationSummary from '../common/ConversationSummary';
import conversations from '../data/conversations';
import campaignStats from '../data/campaignStats';

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
                  <CampaignStats campaignStats={campaignStats} /> 
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
                      <Pressable
                        onPress={() => setLocation('Single Conversation')}
                      >
                        <ConversationSummary
                          key={contact.contactId}
                          contact={contact}
                          message={messages[0]}
                          onSelect={() => onSelectConvo({ contact, messages })}
                        />
                      </Pressable>
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
                {/* CHATS */}
                {/* <FlatList
                  data={conversations}
                  ItemSeparatorComponent={Separator}
                  renderItem={
                    ({ item: { contact, messages } }) => (
                      <Pressable
                        onPress={() => null}
                      >
                        <ConversationSummary
                          key={contact.contactId}
                          contact={contact}
                          message={messages[0]}
                          onSelect={() => onSelectConvo({ contact, messages })}
                        />
                      </Pressable>
                    )
                  }
                /> */}
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
