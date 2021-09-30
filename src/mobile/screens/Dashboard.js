import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import AverageRating from '../../common/AverageRating';
import RatingsBySite from '../../common/RatingsBySite';
import TotalContacts from '../../common/TotalContacts';
import ContactsByType from '../../common/ContactsByType';
import CampaignStats from '../../common/CampaignStats';
import Colors from '../../constants/Colors';
import stats from '../../data/stats';
import locationReviewSites from '../../data/reviewSites';

const StatsTitle = ({ title }) => (
    <View style={styles.stats_title_container}>
        <Text style={styles.stats_title}>{title}</Text>
    </View>
);

const Dashboard = ({ onNavigate }) => {
    const { reviewStats, campaignStats, contactStats } = stats;

    return (
        <>
            <SafeAreaView style={{ flex: 0, backgroundColor: Colors.background_1 }} />

            <View style={styles.container}>
                <StatusBar backgroundColor={Colors.background_1} barStyle='dark-content' />

                <View style={styles.header}>
                    <TouchableOpacity onPress={onNavigate} >
                        <Text style={styles.label_button}>
                            Go to Conversations
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.title_container}>
                    <Text style={styles.title}>Dashboard</Text>
                </View>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={styles.stats}
                >
                    <StatsTitle title='Reviews' />

                    <AverageRating reviewStats={reviewStats} />

                    <RatingsBySite reviewSites={locationReviewSites} reviewStats={reviewStats} />

                    <StatsTitle title='Contacts' />

                    <TotalContacts contactStats={contactStats}/>

                    <ContactsByType contactStats={contactStats} />

                    <StatsTitle title='Campaigns' />

                    <CampaignStats campaignStats={campaignStats}/>
                </ScrollView>

            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background_2,
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
    stats: {
        padding: 10,
    },
    stats_title_container: {
        flexDirection: 'row',
        marginBottom: 10,
        marginHorizontal: 5,
        marginTop: 20,
    },
    stats_title: {
        color: Colors.text_1,
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

export default Dashboard;
