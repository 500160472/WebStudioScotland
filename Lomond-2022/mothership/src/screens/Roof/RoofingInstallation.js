import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import S from '../../constants/styles';
import C from '../../constants/colours';
import O from '../../constants/objects';
import T from '../../constants/text';
import N from '../../constants/navigation';

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
