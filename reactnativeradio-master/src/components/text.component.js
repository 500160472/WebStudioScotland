import React from 'react';
import {StyleSheet, Text as TextReactNative} from 'react-native';

import colors from '../styles/colors.style';

const Text = ({
  children,
  style,
}) => {
  const styles = StyleSheet.create({
    text: {
      color: colors.white,
      fontSize: 14,
    },
  });

  return (
    <TextReactNative style={[styles.text, style]}>{children}</TextReactNative>
  );
};

export default Text;
