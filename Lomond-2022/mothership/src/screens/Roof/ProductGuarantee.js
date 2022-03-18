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
    const [status, setStatus] = React.useState({});
    return (
      <SafeAreaView style={{width: "100%"}}>
      <View style={S.container}>
        <View style={S.headerBar}>
          <Text style={S.headerText}>{T.HEADERS[1].TITLE}</Text>
        </View>

        <View style={S.mainContainerLight}>
<ScrollView style={{width: '100%', paddingTop: 76}}>
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
              <TouchableOpacity style={styles.button} onPress={props.setClose}>
      <View style={{width: "100%", padding: 33, paddingTop: 20,}}>
        <Text style={S.boldTitleDark}>
        If I could show you a way of getting industry leading quality for a middle of the market price, that would be a really easy decision to make wouldn't it? So, who seems best to shop with?
        </Text>
        <Text style={[S.boldTitleDark, props.closeStatus ?
    styles.green :
    styles.red]}>{JSON.stringify(props.closeStatus)}</Text>
      </View>
      </TouchableOpacity>
              </View>
              <View style={{ flex: 1 }}>
                <Image source={O.ROOFING.IMAGES.PRODUCT_GUARANTEE} style={{ width: '100%', height: 400 }} />
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






          
</ScrollView>
        </View>

        <Footer previousPage={N.ROOFING[2]} currentPage={N.ROOFING[3]} nextPage={N.ROOFING[4]} pageChange={(pageNum) => props.pageChange(pageNum)} />


      </View>
  </SafeAreaView>





          );
        }
const styles = StyleSheet.create({

    green: {
    color: 'green',
  },
  red: {
    color: 'red',
  },
  button: {
    height: 250,
    backgroundColor: "rgba(255,227,0,1)",
    borderRadius: 22,
    marginTop: 62,
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
