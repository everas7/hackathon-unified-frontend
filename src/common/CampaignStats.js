import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Separator from './Separator';
import Colors from '../constants/Colors';
import { formatNumber } from '../lib/Formatters';

const CampaignStatRow = ({ campaignType, numConversions }) => (
    <View style={styles.campaign_row}>
        <View style={[styles.campaign_segment, { flex: 5 }]}>
            <Text style={styles.campaign_type} testID={`${campaignType} text`}>
                {campaignType}
            </Text>
        </View>
        <View style={[styles.campaign_segment, { flex: 2 }]}>
            <Text style={styles.conversions_count} testID={`${campaignType} conversions`}>
                {
                    typeof numConversions === 'number' ?
                        formatNumber({ number: numConversions }) :
                        '-'
                }
            </Text>
        </View>
    </View>
);


const CampaignStats = ({ campaignStats }) => {

    return (
        <View style={styles.container}>
            <View style={styles.title_container}>
                <Text style={styles.title}>Campaign Performance</Text>
            </View>

            <View style={styles.campaign_row}>
                <View style={[styles.campaign_segment, { flex: 5 }]}>
                    <Text style={styles.header_text}>Campaign Type</Text>
                </View>
                <View style={[styles.campaign_segment, { flex: 2 }]}>
                    <Text style={styles.header_text}>Conversions</Text>
                </View>
            </View>

            <CampaignStatRow
                campaignType={'One Time Campaigns'}
                numConversions={campaignStats && campaignStats.totalOneTimeConversions}
            />
            <Separator style={styles.separator}/>
            <CampaignStatRow
                campaignType={'New Customer Campaigns'}
                numConversions={campaignStats && campaignStats.totalLeadConversions}
            />
            <CampaignStatRow
                campaignType={'Active Customer Campaigns'}
                numConversions={campaignStats && campaignStats.totalActiveCustomerConversions}
            />
            <CampaignStatRow
                campaignType={'Win Back Campaigns'}
                numConversions={campaignStats && campaignStats.totalInactiveCustomerConversions}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    campaign_type: {
        color: Colors.text_2,
        fontSize: 16,
    },
    container: {
        backgroundColor: Colors.background_1,
        flex: 1,
        borderRadius: 10,
        marginBottom: 40,
        padding: 20,
    },
    conversions_count: {
        color: Colors.primary,
        fontWeight: 'bold',
        fontSize: 14,
        marginRight: 5,
    },
    campaign_row: {
        flexDirection: 'row',
        marginBottom: 15,
        alignItems: 'center',
    },
    campaign_segment: {
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    header_text: {
        color: Colors.gray_100,
        fontSize: 12,
        fontWeight: '500',
    },
    separator: {
        marginHorizontal: 0,
        marginBottom: 15,
    },
    title_container: {
        flexDirection: 'row',
        marginBottom: 30,
        alignItems: 'center',
    },
    title: {
        color: Colors.text_2,
        fontSize: 16,
        fontWeight: '500',
        marginRight: 10,
    },
});

export default CampaignStats;
