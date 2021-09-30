import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';

const CustomButton = ({
    backgroundColor = Colors.primary,
    color = Colors.primary_text,
    containerStyle,
    disabled = false,
    loading = false,
    onPress,
    style,
    testID,
    title,
}) => (
    <TouchableOpacity
        activeOpacity={0.7}
        disabled={disabled || loading}
        onPress={onPress}
        style={[
            styles.button,
            {
                backgroundColor,
                opacity: disabled ? 0.6 : 1,
            },
            containerStyle,
        ]}
        testID={testID}
    >
        {loading && <ActivityIndicator color={color} />}
        {!loading &&
            <Text style={[styles.text, { color }, style]}>
                {title}
            </Text>
        }
    </TouchableOpacity>
);

CustomButton.propTypes = {
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    containerStyle: PropTypes.object,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    onPress: PropTypes.func.isRequired,
    style: PropTypes.object,
    testID: PropTypes.string,
    title: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        borderRadius: 5,
        flexDirection: 'row',
        height: 50,
        justifyContent: 'center',
        padding: 10,
        width: '100%',
    },
    text: {
        fontFamily: 'Apercu-Regular',
        fontSize: 16,
    },
});

export default CustomButton;
