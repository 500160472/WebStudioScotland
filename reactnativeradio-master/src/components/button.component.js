import React, {memo} from 'react';
import {StyleSheet, Pressable} from 'react-native';

import Text from './text.component';
import colors from '../styles/colors.style';

const Button = ({
  alert = false,
  text,
  textStyle,
  buttonStyle,
  onPress,
  rippleColor = colors.primaries[1],
  disabled = false,
}) => {
  const styles = StyleSheet.create({
    pressable: {
      marginTop: 12,
      marginLeft: alert ? 6 : 0,
      height: 48,
      width: alert ? 96 : 256,
      backgroundColor: colors.primaries[0],
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
      shadowOffset: {
        width: 0.4,
        height: 0.4,
      },
      shadowOpacity: 0.1,
      elevation: 3,
    },
    disabled: {
      backgroundColor: colors.greys[0],
    },
    text: {
      color: colors.black,
      textAlign: 'center',
      fontFamily: 'SourceSansPro-SemiBold',
      fontSize: 14,
    },
    textdisabled: {
      color: colors.greys[2],
    },
  });

  return (
    <Pressable
      onPress={onPress}
      style={[styles.pressable, buttonStyle, disabled && styles.disabled]}
      android_ripple={{
        color: rippleColor,
        borderless: false,
        radius: 18,
      }}
      disabled={disabled}
    >
      <Text style={[styles.text, textStyle, disabled && styles.textdisabled]}>{text.toUpperCase()}</Text>
    </Pressable>
  );
};

export default memo(Button);
