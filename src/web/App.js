// App.js - WEB
import React, { useCallback, useEffect, useState } from "react";
import { Dimensions, View, Text, ScrollView, Button } from "react-native";
import StyleSheet from 'react-native-media-query';

import CampaignStats from '../common/CampaignStats';

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

const App = () => {
  const [location, setLocation] = useState('Dashboard');
  const [navText, setNavText] = useState('Go to Conversations');
  const [useHorizontalSpacing, setUseHorizontalSpacing] = useState(window.width >= 768);

  const handleNavigationButton = useCallback(() => {
    if (location === 'Dashboard') {
      setLocation('Conversations')
    } else if (location === 'Conversations') {
      setLocation('Dashboard')
    }
  }, [location]);

  useEffect(() => {
    if (location === 'Dashboard') {
      setNavText('Go to Conversations')
    } else if (location === 'Conversations') {
      setNavText('Go to Dashboard')
    }
  }, [location])

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      ({ window: newWindow }) => {
        setUseHorizontalSpacing(newWindow.width >= 768)
      }
    );
  
    return () => subscription?.remove();
  });

  return (
    <View>
      {/* header */}
      <View>
        <Text>
          Header
        </Text>
        <Button 
          title={navText} 
          onPress={handleNavigationButton}
        />
      </View>

      {/* Content */}
      {location === 'Dashboard' && (
        <View style={styles.background} dataSet={{ media: ids.background }}>
          <View style={styles.content} dataSet={{ media: ids.content }}>
            <ScrollView
              showsVerticalScrollIndicator={false}
            >
              <Text style={styles.sectionsText} dataSet={{ media: ids.sectionsText }}>
                Reviews
              </Text>
              <View style={styles.container} dataSet={{ media: ids.container }}>
                <WidgetContainer />
                <WidgetContainer useHorizontalSpacing={useHorizontalSpacing} />
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
                  <CampaignStats />
                </WidgetContainer>
              </View>
            </ScrollView>
          </View>
        </View>
      )}

      {location === 'Conversations' && (
        <View style={styles.background} dataSet={{ media: ids.background }}>
          <View style={styles.content} dataSet={{ media: ids.content }}>
            <ScrollView
              showsVerticalScrollIndicator={false}
            >
              <FlatList
                data={conversations}
                ItemSeparatorComponent={Separator}
                renderItem={
                  ({ item: { contact, messages } }) => (
                    <ConversationSummary
                      key={contact.contactId}
                      contact={contact}
                      message={messages[0]}
                      onSelect={() => onSelectConvo({ contact, messages })}
                    />
                  )
                }
              />
            </ScrollView>
          </View>
        </View>
      )}
    </View>
  );
};

const {ids, styles} = StyleSheet.create({
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