import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import S from '../constants/styles';
export default class Settings extends React.Component {
//pageChange prop from App.js
  render() {
    return (
    <View style={styles.page}>
      <View style={S.headerBar}>
        <Text style={S.headerText}>SETTINGS</Text>
      </View>
        <View style={styles.container}>
        <TouchableOpacity style={S.button} onPress={()=> this.props.pageChange(2)}>
          <Text style={S.buttonText}>
            UPDATE PROFILE
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={S.button} onPress={()=> this.props.pageChange(2)}>
          <Text style={S.buttonText}>
            CHANGE PASSWORD
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={S.button} onPress={()=> this.props.pageChange(2)}>
          <Text style={S.buttonText}>
            LOGOUT
          </Text>
        </TouchableOpacity>
      </View>
  </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: S.colors.lightBlue,
  },
  container: {
    margin: 0, 
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 28,
  },
});
