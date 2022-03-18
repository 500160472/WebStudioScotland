import React, {memo} from 'react';
import {StyleSheet, View, Pressable} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import colors from '../styles/colors.style';
import Text from './text.component';

const Header = ({
  back = false,
  onBackPress = () => {},
  text = null,
  disabled = false,
}) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      maxHeight: 64,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.greys[4],
      flexDirection: 'row',
    },
    iconContainer: {
      height: 64,
      width: 64,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: colors.greys[0],
      fontSize: 22,
    },
  });

  return (
    <View style={styles.container}>
      {back && (
        <Pressable
          onPress={disabled ? undefined : onBackPress}
          style={styles.iconContainer}
          android_ripple={{
            color: colors.white,
            borderless: false,
            radius: 18,
          }}
        >
          <FontAwesome name="angle-left" size={36} color={disabled ? colors.greys[2] : colors.greys[0]} />
        </Pressable>
      )}
      <View style={styles.textContainer}>
        {text !== null && <Text style={styles.text}>{text}</Text>}
      </View>
      {back && <View style={styles.iconContainer} />}
    </View>
  );
};

export default memo(Header);
