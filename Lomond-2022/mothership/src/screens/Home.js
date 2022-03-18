import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants';

import S from '../constants/c1--Styles';
import C from '../constants/c2--Colours';
import O from '../constants/c3--Objects';
import T from '../constants/c4--Text';
import L from '../constants/c5--Links';
import A from '../constants/c6--Actions';
import N from '../constants/c7--Navigation';
import D from '../constants/c8--Data';

import Logo from '../assets/images/logo.png';
export default class Home extends React.Component {
//pageChange prop from App.js

render() {
    return (
    <View style={S.container}>
      <View style={S.headerBar}>
        <Text style={S.headerText}>HOMEPAGE</Text>
      </View>
      <View style={S.boxedContainerDark}>
      <Image source={Logo} style={S.logo} />
        <Text style={S.boldTitle}>
          Welcome, {this.props.response[0].username}
        </Text>
        <Text style={S.subTitle}>
          Rep Name: {this.props.response[0].FullName}{"\n"}
          Rep Email: {this.props.response[0].email}{"\n"}
          Rep Number: {this.props.response[0].phone}{"\n"}
          </Text>
      </View>
        {/* <View style={styles.containerBox}> */}
        <TouchableOpacity style={S.buttonLight} onPress={()=> {this.props.product(4); this.props.pageChange(2)}}>
          <Text style={S.buttonText}>
            ROOFS
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={S.buttonLight} onPress={()=> {this.props.product(5); this.props.pageChange(2)}}>
          <Text style={S.buttonText}>
            GARDEN HOMES
          </Text>
        </TouchableOpacity>
      {/* </View> */}
  </View>
    );
  }
}

const styles = StyleSheet.create({
  profile:{
    
  },

  
});
