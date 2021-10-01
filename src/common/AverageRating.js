import React, { useMemo } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../constants/Colors';
import { formatNumber } from '../lib/Formatters';

const calculateStats = reviewStats => {
    let total = 0;
    let count = 0;

    if (!reviewStats || !reviewStats.length) {
        return { avg: '--', count: '--' };
    }

    reviewStats.forEach(stats => {
        count += stats.reviewCount;

        if (typeof stats.rating === 'number') {
            total += (stats.rating * stats.reviewCount);
        }
    });

    const avg = count > 0 ? total / count : 0;

    return {
        avg: Math.round(avg * 100) / 100,
        count,
    };
};

const AverageRating = ({ reviewStats }) => {
    const { avg, count } = useMemo(() => calculateStats(reviewStats), [reviewStats]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Your Average Rating</Text>

            <TouchableOpacity style={styles.segment}>
                <Text style={styles.average} testID='avg_rating'>{avg}</Text>
                {/* <Icon fill={Colors.yellow} name='star' width={14}  /> */}
                <Text style={{ marginLeft: 5 }}>&#11088;</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.segment}>
                <Text style={styles.reviews_amount} testID='total_count'>
                    {formatNumber({ number: count })}
                </Text>
                <Text style={styles.reviews_label}>Reviews</Text>
            </TouchableOpacity>
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
        fontWeight: '500',
        fontSize: 16,
        marginBottom: 30,
    },
    segment: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginBottom: 10,
    },
    average: {
        color: Colors.text_1,
        fontWeight: '500',
        fontSize: 32,
    },
    reviews_amount: {
        color: Colors.text_1,
        fontWeight: 'bold',
        fontSize: 14,
        marginRight: 5,
    },
    reviews_label: {
        color: Colors.text_2,
        fontWeight: '400',
        fontSize: 14,
    },
});

export default AverageRating;
