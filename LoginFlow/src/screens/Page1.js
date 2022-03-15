import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import S from '../constants/styles';
import C from '../constants/colours';
import O from '../constants/objects';
import T from '../constants/text';
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
          Welcome, {this.props.response[0].Name}{"\n"} 
        </Text>
        <Text style={styles.infoText}>
          {this.props.response[0].Email}{"\n"}
          {/* Role: {this.props.response[0].Role}{"\n"} */}
          Last Sign-In: {this.props.response[0].LastSignInDate}{"\n"}
          </Text>
      </View>
        <View style={styles.container}>
        <TouchableOpacity style={S.buttonDark} onPress={()=> this.props.pageChange(2)}>
          <Text style={S.buttonText}>
            PAGE 2
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={S.buttonDark} onPress={()=> this.props.pageChange(3)}>
          <Text style={S.buttonText}>
            SETTINGS
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
    // paddingTop: Constants.statusBarHeight,
    padding: '4%',
    // marginTop: -46,
    // marginBottom: 22,
    // height: 300,
    // width: 720,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: C.dark,
    borderRadius: 22,
  },
  profileText:{
    color: C.white,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  infoText:{
    color: C.white,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: C.lightBlue,
  },
  container: {
    margin: 0, 
    justifyContent: 'center',
    // paddingTop: Constants.statusBarHeight,
    // padding: 28,
    marginLeft: 28,
    marginRight: 28,
  },
});
