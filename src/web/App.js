// App.js - WEB
import React, { useEffect, useState } from "react";
import StyleSheet from 'react-native-media-query';

import { Dimensions, View, Text, ScrollView } from "react-native";

const window = Dimensions.get("window");

const WidgetContainer = ({ useHorizontalSpacing }) => {
  return (
    <View 
      style={[
        styles.widgetDummy,
        useHorizontalSpacing ? { marginLeft: '20px' } : null
      ]}
      dataSet={{ media: ids.widgetDummy }}
    >
      <Text>
        Some Widget Dummy
      </Text>
    </View>
  );
};

const App = () => {
  const [useHorizontalSpacing, setUseHorizontalSpacing] = useState(window.width >= 768);

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
    <View style={styles.background} dataSet={{ media: ids.background }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container} dataSet={{ media: ids.container }}>
          {/* <Text style={styles.sectionsText} dataSet={{ media: ids.sectionsText }}>
            Reviews
          </Text> */}
          <WidgetContainer />
          <WidgetContainer useHorizontalSpacing={useHorizontalSpacing} />
        </View>

        <View style={styles.container} dataSet={{ media: ids.container }}>
          {/* <Text style={styles.sectionsText} dataSet={{ media: ids.sectionsText }}>
            Contacts
          </Text> */}
          <WidgetContainer />
        </View>

        <View style={styles.container} dataSet={{ media: ids.container }}>
          {/* <Text style={styles.sectionsText} dataSet={{ media: ids.sectionsText }}>
            Campaigns
          </Text> */}
          <WidgetContainer />
        </View>
      </ScrollView>
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
  }, 

  sectionsText: {
    marginTop: '10px',
  },

  container: {
    width: '96%',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',

    '@media (min-width: 768px)': {
      flexDirection: 'row',
      maxWidth: '1080px',
    },
  },
});

export default App;