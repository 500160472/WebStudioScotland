import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import S from '../constants/styles';
export default class Page1 extends React.Component {
//pageChange prop from App.js

render() {
    return (
    <View style={styles.page}>
      <View style={S.headerBar}>
        <Text style={S.headerText}>HOMEPAGE</Text>
      </View>
      <View style={styles.profile}>
        <Text style={styles.profileText}>
          Welcome, {this.props.response[0].username}{"\n"} 
        </Text>
        <Text style={styles.infoText}>
          Rep Name: {this.props.response[0].FullName}{"\n"}
          Rep Email: {this.props.response[0].email}{"\n"}
          Rep Number: {this.props.response[0].phone}{"\n"}
          </Text>
      </View>
        <View style={styles.container}>
        <TouchableOpacity style={S.button} onPress={()=> this.props.pageChange(2)}>
          <Text style={S.buttonText}>
            LEADS
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={S.button} onPress={()=> this.props.pageChange(2)}>
          <Text style={S.buttonText}>
            DEALS
          </Text>
        </TouchableOpacity>
      </View>
  </View>
    );
  }
}

const styles = StyleSheet.create({
  profile:{
    margin: 0, 
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    // padding: 28,
    marginTop: -46,
    marginBottom: 22,
    height: 300,
    // width: 720,
    // marginLeft: 'auto',
    // marginRight: 'auto',
    backgroundColor: S.colors.dark,
    // borderRadius: 20,
  },
  profileText:{
    color: S.colors.white,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  infoText:{
    color: S.colors.white,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
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
    marginLeft: 28,
    marginRight: 28,
  },
});
