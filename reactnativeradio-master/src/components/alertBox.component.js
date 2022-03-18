import React, {memo} from 'react';
import {StyleSheet, View, Modal} from 'react-native';

import Text from './text.component';
import colors from '../styles/colors.style';
import metrics from '../styles/metrics.style';
import useGlobal from '../store';
import Button from './button.component';
import {language} from '../languages';

const AlertBox = () => {
  const [alertBox, actions] = useGlobal(state => state.alertBox, actions);
  const {
    visible,
    title,
    message,
    buttonsType,
    pressYes,
    pressNo,
    pressOk,
  } = alertBox;
  const {alertBox: alertBoxLanguage} = language;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: metrics.height,
      width: metrics.width,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.blackTransparent,
    },
    alertcontainer: {
      height: 196,
      minWidth: 356,
      maxWidth: metrics.width - 40,
      justifyContent: 'flex-start',
      padding: 12,
      backgroundColor: colors.white,
      borderRadius: 8,
      shadowOffset: {
        width: 0.4,
        height: 0.4,
      },
      shadowOpacity: 0.1,
      elevation: 3,
    },
    title: {
      fontSize: 16,
      color: colors.black,
      fontWeight: 'bold',
    },
    messagecontainer: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
    message: {
      fontSize: 14,
      color: colors.greys[2],
      textAlign: 'left',
    },
    buttonscontainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
  });

  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onDismiss={() => {}}
      onRequestClose={() => {}}
      statusBarTranslucent
    >
      <View style={styles.container}>
        <View style={styles.alertcontainer}>
          {title && <Text style={styles.title}>{title.toUpperCase()}</Text>}
          <View style={styles.messagecontainer}>
            <Text style={styles.message}>{message}</Text>
          </View>
          <View style={styles.buttonscontainer}>
            {buttonsType === 0 ? (
              <Button
                alert
                text={alertBoxLanguage.ok}
                onPress={() => {
                  pressOk();
                  actions.setAlertBox();
                }}
              />
            ) : (
              <>
                <Button
                  alert
                  text={alertBoxLanguage.no}
                  onPress={() => {
                    pressNo();
                    actions.setAlertBox();
                  }}
                />
                <Button
                  alert
                  text={alertBoxLanguage.yes}
                  onPress={() => {
                    pressYes();
                    actions.setAlertBox();
                  }}
                />
              </>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default memo(AlertBox);
