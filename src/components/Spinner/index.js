import PropTypes from 'prop-types';
import React from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
import { COLORS } from '../../styles';

const Spinner = ({ size, height, color, text }) => (
  <View
    style={{
      flex: height ? 0 : 1,
      justifyContent: 'center',
      alignItems: 'center',
      height
    }}
  >
    <ActivityIndicator animating size={size} color={color || COLORS.blue} />
    {text && (
      <Text
        style={{
          fontSize: 18,
          backgroundColor: 'transparent',
          marginTop: 16,
          color: color || COLORS.blue
        }}
      >
        {text}
      </Text>
    )}
  </View>
);

Spinner.defaultProps = {
  size: 'large'
};

export default Spinner;
