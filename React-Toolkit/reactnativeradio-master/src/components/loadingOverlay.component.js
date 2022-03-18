import React, {memo} from 'react';
import {StyleSheet, View, Modal} from 'react-native';
import {SkypeIndicator} from 'react-native-indicators';

import colors from '../styles/colors.style';
import metrics from '../styles/metrics.style';

const LoadingOverlay = ({
  visible,
}) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: metrics.height,
      width: metrics.width,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.blackTransparent,
    },
    indicatorcontainer:{
      height: 96,
      width: 96,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.white,
      borderRadius: 8,
      shadowOffset: {
        width: 0.4,
        height: 0.4,
      },
      shadowOpacity: 0.1,
      elevation: 3,
    },
    indicator: {
      flex: 0,
    },
  });

  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onDismiss={() => {}}
      onRequestClose={() => {}}
      onShow={() => {}}
      statusBarTranslucent
    >
      <View style={styles.container}>
        <View style={styles.indicatorcontainer}>
          <SkypeIndicator color={colors.primaries[0]} count={5} size={40} style={styles.indicator} />
        </View>
      </View>
    </Modal>
  );
};

export default memo(LoadingOverlay);
