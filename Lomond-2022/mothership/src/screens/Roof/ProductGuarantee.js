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

           {/* <Text>{props.lead.id}</Text>  */}
           {/* <Text>{props.lead.name_value_list.rep_name_c.value}</Text>  */}
            
            {/* <Image source={O.ROOFING.IMAGES.ACCREDITATIONS} style={S.imageFullWidth} /> */}
            <View style={[S.flexRow, { justifyContent: 'center', alignItems: 'center'}]}>  
              <View style={{ flex: 3, padding: 12 }}>
              <Text style={S.boldTitleDark}>
              Our comprehensive guarantees give your customers complete peace of mind for years to come this is provided by the manufacturer this can be further reinforced under the home improvement protection scheme who Lomond closely partner.
              </Text>
              
              <Text style={S.subTitleDark}>
              Any workmanship defects will occur within the First Couple of months for added protection and peace of mind Lomond will provide a workmanship warranty for one full year after sign off by our installation managers.
              </Text>
              <View style={{marginTop: 30, width: '100%', padding: 12, backgroundColor: 'yellow'}}>
                <Text style={S.subTitleDark}>
                // TODO add closing question data
                  TESTING QUESTIONS
                </Text>
              </View>
              </View>
              <View style={{ flex: 1 }}>
                <Image source={O.ROOFING.IMAGES.PRODUCT_GUARANTEE} style={{ width: '100%', height: '86%' }} />
              </View>
            </View>
          
{/* 
<View style={S.flexRow}>
   <View style={{ flex: 1 }}>
       <Text style={S.boldTitleDark}>Exterior</Text>
         <Text style={S.subTitleDarkNoAlign}>
     - Porus, Slipped or Brital Tiles{"\n"}
     - Fungal Growth{"\n"}
     - Degraded Jointing{"\n"}
     - Broken Flashing
         </Text> 
   </View>

   <View style={{ flex: 1 }}>
       <Text style={S.boldTitleDark}>Internal</Text>
         <Text style={S.subTitleDarkNoAlign}>
     - Porus, Slipped or Brital Tiles{"\n"}
     - Fungal Growth{"\n"}
     - Degraded Jointing{"\n"}
     - Broken Flashing
        </Text> 
   </View>

   <View style={{ flex: 1 }}>
       <Text style={S.boldTitleDark}>Hidden Dangers</Text>
         <Text style={S.subTitleDarkNoAlign}>
     - Porus, Slipped or Brital Tiles{"\n"}
     - Fungal Growth{"\n"}
     - Degraded Jointing{"\n"}
     - Broken Flashing
         </Text> 
   </View>
 </View>        */}




          

        </View>

        <Footer previousPage={N.ROOFING[4]} currentPage={N.ROOFING[5]} nextPage={N.ROOFING[6]} pageChange={(pageNum) => props.pageChange(pageNum)} />


      </View>
  </SafeAreaView>





          );
        }
const styles = StyleSheet.create({

});
