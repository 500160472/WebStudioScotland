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
import ReasonsRow from "../../components/ReasonsRow";

export default function RoofingInstallation(props){

    return (

      <SafeAreaView style={{width: "100%"}}>
      <View style={S.container}>
        <View style={S.headerBar}>
          <Text style={S.headerText}>{T.HEADERS[1].TITLE}</Text>
        </View>


        <View style={S.mainContainerLight}>
        <ScrollView style={styles.container}>
      <ReasonsRow
        score1=""
        placeholderv=""
        question1Title="TITLE"
        style={styles.questionOne}
      ></ReasonsRow>
      <ReasonsRow
        score1=""
        placeholderv=""
        question1Title="TITLE"
        style={styles.questionTwo}
      ></ReasonsRow>
      <ReasonsRow
        score1=""
        placeholderv=""
        question1Title="TITLE"
        style={styles.questionThree}
      ></ReasonsRow>
      <ReasonsRow
        score1=""
        placeholderv=""
        question1Title="TITLE"
        style={styles.questionFour}
      ></ReasonsRow>
      <ReasonsRow
        score1=""
        placeholderv=""
        question1Title="TITLE"
        style={styles.questionFive}
      ></ReasonsRow>
      <ReasonsRow
        score1=""
        placeholderv=""
        question1Title="TITLE"
        style={styles.questionSix}
      ></ReasonsRow>
      <TouchableOpacity style={styles.button}></TouchableOpacity>
      <TouchableOpacity style={styles.button2}>
          <Text style={styles.submit}>SUBMIT</Text>
      </TouchableOpacity>
    </ScrollView>




        </View>
{/* 
        <Footer previousPage={N.ROOFING[2]} currentPage={N.ROOFING[3]} nextPage={N.ROOFING[4]} pageChange={(pageNum) => props.pageChange(pageNum)} /> */}


      </View>
  </SafeAreaView>






//         <SafeAreaView>
        
//             <View style={S.container}>
//               <View style={S.headerBar}>
//                 <Text style={S.headerText}>{T.HEADERS[1].TITLE}</Text>
//               </View>
//               <View style={S.mainContainerLight}>
//                 <ScrollView style={S.scroll}>
//                 <Text style={S.title}>Roofing Problems</Text>

// <View style={S.flexRow}>
//   <View style={{ flex: 1 }}>
//       <Text style={S.secondTitle}>Exterior</Text>
//         <Text style={S.list}>
//     - Porus, Slipped or Brital Tiles{"\n"}
//     - Fungal Growth{"\n"}
//     - Degraded Jointing{"\n"}
//     - Broken Flashing
//         </Text> 
//   </View>

//   <View style={{ flex: 1 }}>
//       <Text style={S.secondTitle}>Internal</Text>
//         <Text style={S.list}>
//     - Porus, Slipped or Brital Tiles{"\n"}
//     - Fungal Growth{"\n"}
//     - Degraded Jointing{"\n"}
//     - Broken Flashing
//         </Text> 
//   </View>

//   <View style={{ flex: 1 }}>
//       <Text style={S.secondTitle}>Hidden Dangers
// </Text>
//         <Text style={S.list}>
//     - Porus, Slipped or Brital Tiles{"\n"}
//     - Fungal Growth{"\n"}
//     - Degraded Jointing{"\n"}
//     - Broken Flashing
//         </Text> 
//   </View>
// </View>       
//                 </ScrollView>
//               </View>
//               <Footer previousPage={T.PAGES.ROOFING[2]} currentPage={T.PAGES.ROOFING[3]} nextPage={T.PAGES.ROOFING[1]} pageChange={(pageNum) => props.pageChange(pageNum)} />
//             </View>
//         </SafeAreaView>
          );
        }
const styles = StyleSheet.create({
  container: {
    // backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 22,
    width: '100%',
    height: 1406
  },
  questionOne: {
    height: 48,
    marginTop: 12,
    alignSelf: "center"
  },
  questionTwo: {
    height: 48,
    marginTop: 17,
    alignSelf: "center"
  },
  questionThree: {
    height: 48,
    marginTop: 17,
    alignSelf: "center"
  },
  questionFour: {
    height: 48,
    marginTop: 17,
    alignSelf: "center"
  },
  questionFive: {
    height: 48,
    marginTop: 17,
    alignSelf: "center"
  },
  questionSix: {
    height: 48,
    marginTop: 17,
    alignSelf: "center"
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
  button2: {
    // height: 95,
    marginTop: 22,
    marginBottom: 22,
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 56,
    backgroundColor: "rgba(0,154,255,1)",
    borderRadius: 15,
    textAlign: "center",
  },
  submit: {
    // fontFamily: "roboto-700",
    fontFamily: "Arial",
    color: "rgba(255,255,255,1)",
    textAlign: "center",
    fontSize: 28,
    marginTop: 12,
    paddingHorizontal: 62,
    // marginLeft: 118
  }
});
