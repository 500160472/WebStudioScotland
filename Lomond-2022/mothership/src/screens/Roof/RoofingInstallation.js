import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import S from '../../constants/c1--Styles';
import C from '../../constants/c2--Colours';
import O from '../../constants/c3--Objects';
import T from '../../constants/c4--Text';
import L from '../../constants/c5--Links';
import A from '../../constants/c6--Actions';
import N from '../../constants/c7--Navigation';
import D from '../../constants/c8--Data';

import BeforeAfter from '../../assets/images/before-after.jpeg';
import Footer from '../../components/Footer';

export default function RoofingInstallation(props){
    return (
      <SafeAreaView style={{width: "100%"}}>
      <View style={S.container}>
        <View style={S.headerBar}>
          <Text style={S.headerText}>{T.HEADERS[1].TITLE}</Text>
        </View>

        <View style={S.mainContainerLight}>
          <ScrollView>
           {/* <Text>{props.lead.id}</Text>  */}
           {/* <Text>{props.lead.name_value_list.rep_name_c.value}</Text>  */}
            <Image source={O.ROOFING.IMAGES.HEADER} style={S.headerImage} />
            {/* <Image source={O.ROOFING.IMAGES.ACCREDITATIONS} style={S.imageFullWidth} /> */}
            
            <Text style={S.boldTitleDark}>
            </Text>
            
            <Text style={S.subTitleDark}>
            </Text>
  
          

          
          </ScrollView>
        </View>

        <Footer previousPage={N.ROOFING[3]} currentPage={N.ROOFING[4]} nextPage={N.ROOFING[5]} pageChange={(pageNum) => props.pageChange(pageNum)} />


      </View>
  </SafeAreaView>





          );
        }
const styles = StyleSheet.create({

});
