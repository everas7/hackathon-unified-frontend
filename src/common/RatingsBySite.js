import React  from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from './Button';
import { ReviewSiteInfo, ScorableReviewSites } from '../constants/ReviewSites';
import Colors from '../constants/Colors';
import { formatNumber } from '../lib/Formatters';

const calculateStats = ({ reviewSite, reviewStats }) => {
    if (!reviewStats || !reviewStats.length) {
        return { count: '--', rating: '--' };
    }

    const siteStats = reviewStats.find(stats => stats.reviewSiteId === reviewSite.id);

    if (!siteStats) {
        return { count: '--', rating: '--' };
    }

    return {
        count: siteStats.reviewCount || '--',
        rating: siteStats.rating || '--',
    };
};

const RatingsBySite = ({ reviewSites, reviewStats }) => {
    const availableReviewSites = reviewSites && reviewSites.map(rs => {
        const reviewSite = ReviewSiteInfo[rs.reviewSiteId];

        if (!rs.removedAt && ScorableReviewSites.includes(rs.reviewSiteId)) {
            return {
                displayName: reviewSite.displayName,
                id: rs.reviewSiteId,
                name: reviewSite.name,
            };
        }
    }).filter(a => a).sort((s1, s2) => s1.displayName.localeCompare(s2.displayName));

    const askForRequest = () => {};

    if (!availableReviewSites || !availableReviewSites.length) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ratings by Review Site</Text>

            {availableReviewSites.map((reviewSite, index) => {
                const { count, rating } = calculateStats({ reviewSite, reviewStats });

                return (
                    <TouchableOpacity
                        key={index}
                        style={styles.site_row}
                    >
                        <View style={[styles.site_segment, { flex: 2 }]}>
                            <View style={[styles.site_name_container, { flex: 2 }]}>
                                <Text numberOfLines={1} style={styles.site_name} testID='site_name'>
                                    {reviewSite.displayName}
                                </Text>
                            </View>
                            <View style={[styles.site_avg_container, { flex: 1 }]}>
                                <Text style={styles.site_rating} testID='site_rating'>
                                    {rating}
                                </Text>
                                <Text style={{ marginLeft: 5 }}>&#11088;</Text>
                            </View>
                        </View>
                        <View style={[styles.site_segment, { flex: 1 }]}>
                            <Text style={styles.reviews_count} testID='site_count'>
                                {formatNumber({ number: count })}
                            </Text>
                            <Text style={styles.reviews_label}>Reviews</Text>
                        </View>
                    </TouchableOpacity>
                );
            })}

            <Button
                containerStyle={{ marginTop: 25 }}
                onPress={askForRequest}
                title='Ask for a review'
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background_1,
        flex: 1,
        borderRadius: 10,
        marginBottom: 10,
        padding: 20,
        width: '100%',
    },
    title: {
        color: Colors.text_2,
        fontFamily: 'Apercu-Medium',
        fontSize: 16,
        marginBottom: 30,
    },
    site_row: {
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'center',
    },
    site_segment: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    site_avg_container: {
        alignItems: 'baseline',
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },
    site_name_container: {
        alignItems: 'baseline',
        flexDirection: 'row',
    },
    site_name: {
        color: Colors.text_2,
        fontFamily: 'Apercu-Medium',
        fontSize: 16,
    },
    site_rating: {
        color: Colors.text_1,
        fontFamily: 'Apercu-Bold',
        fontSize: 16,
        marginLeft: 10,
    },
    reviews_count: {
        color: Colors.text_1,
        fontFamily: 'Apercu-Bold',
        fontSize: 14,
        marginRight: 5,
    },
    reviews_label: {
        color: Colors.text_2,
        fontFamily: 'Apercu-Regular',
        fontSize: 14,
    },
});

export default RatingsBySite;
