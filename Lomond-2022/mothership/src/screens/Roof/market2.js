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

export default function Market2(props){
    return (
      <SafeAreaView style={{width: "100%"}}>
      <View style={S.container}>
        <View style={S.headerBar}>
          <Text style={S.headerText}>MARKETPLACE</Text>
        </View>

        <View style={S.mainContainerLight}>

           {/* <Text>{props.lead.id}</Text>  */}
           {/* <Text>{props.lead.name_value_list.rep_name_c.value}</Text>  */}
            
           <View style={[S.flexRow, { justifyContent: 'center', alignItems: 'center', marginTop: -280}]}>  
            <Image source={O.ROOFING.IMAGES.MARKET2} style={S.imageFullWidth} />
            </View>
          

        </View>

        <Footer previousPage={N.ROOFING[12]} currentPage={N.ROOFING[13]} nextPage={N.ROOFING[14]} pageChange={(pageNum) => props.pageChange(pageNum)} />


      </View>
  </SafeAreaView>


          );
        }
const styles = StyleSheet.create({

});
