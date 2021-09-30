import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Colors from '../constants/Colors';

const Separator = ({ style }) => (
    <View style={[
        {
            backgroundColor: Colors.gray_20,
            borderRadius: 3,
            height: 2,
            marginHorizontal: 15,
        },
        style,
    ]}/>
);

Separator.propTypes = {
    style: PropTypes.object,
};

export default Separator;
