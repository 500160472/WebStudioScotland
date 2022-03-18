import React from 'react';
import {View, StyleSheet} from 'react-native';
import {SkypeIndicator} from 'react-native-indicators';

import Text from '../components/text.component';
import {language} from '../languages';
import colors from '../styles/colors.style';
import useGlobal from '../store';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.greys[4],
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
    flex: 0,
  },
  title: {
    marginTop: 12,
    color: colors.greys[0],
    fontSize: 16,
  },
});

function LoadingScreen() {
  const [, actions] = useGlobal(null, actions);
  const {loading} = language;

  return (
    <View style={styles.container}>
      <SkypeIndicator color={colors.primaries[0]} count={5} size={40} style={styles.indicator} />
      <Text style={styles.title}>{loading.loading}</Text>
    </View>
  );
}

export default LoadingScreen;
