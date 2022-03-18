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

export default function ReasonsForChange(props){
  const [QUESTION1,setQUESTION1] = React.useState('');
  const [QUESTION1score,setQUESTION1score] = React.useState('');
  const [QUESTION2,setQUESTION2] = React.useState('');
  const [QUESTION2score,setQUESTION2score] = React.useState('');
  const [QUESTION3,setQUESTION3] = React.useState('');
  const [QUESTION3score,setQUESTION3score] = React.useState('');
  const [QUESTION4,setQUESTION4] = React.useState('');
  const [QUESTION4score,setQUESTION4score] = React.useState('');
  const [QUESTION5,setQUESTION5] = React.useState('');
  const [QUESTION5score,setQUESTION5score] = React.useState('');
  const [QUESTION6,setQUESTION6] = React.useState('');
  const [QUESTION6score,setQUESTION6score] = React.useState('');
  const [QUESTION7,setQUESTION7] = React.useState('');
  const [QUESTION7score,setQUESTION7score] = React.useState('');
  const [QUESTION8,setQUESTION8] = React.useState('');
  const [QUESTION8score,setQUESTION8score] = React.useState('');
  const [QUESTION9,setQUESTION9] = React.useState('');
  const [QUESTION9score,setQUESTION9score] = React.useState('');
  const [QUESTION10,setQUESTION10] = React.useState('');
  const [QUESTION10score,setQUESTION10score] = React.useState('');
  const [QUESTION11,setQUESTION11] = React.useState('');
  const [QUESTION11score,setQUESTION11score] = React.useState('');

  let data = {
    QUESTION1: QUESTION1,
    QUESTION1score: QUESTION1score,
    QUESTION2: QUESTION2,
    QUESTION2score: QUESTION2score,
    QUESTION3: QUESTION3,
    QUESTION3score: QUESTION3score,
    QUESTION4: QUESTION4,
    QUESTION4score: QUESTION4score,
    QUESTION5: QUESTION5,
    QUESTION5score: QUESTION5score,
    QUESTION6: QUESTION6,
    QUESTION6score: QUESTION6score,
    QUESTION7: QUESTION7,
    QUESTION7score: QUESTION7score,
    QUESTION8: QUESTION8,
    QUESTION8score: QUESTION8score,
    QUESTION9: QUESTION9,
    QUESTION9score: QUESTION9score,
    QUESTION10: QUESTION10,
    QUESTION10score: QUESTION10score,
    QUESTION11: QUESTION11,
    QUESTION11score: QUESTION11score,
  };

  let total = Number(QUESTION1score) + Number(QUESTION2score )+Number( QUESTION3score )+ Number(QUESTION4score) + Number(QUESTION5score) + Number(QUESTION6score) + Number(QUESTION7score) + Number(QUESTION8score) + Number(QUESTION9score) + Number(QUESTION10score) + Number(QUESTION11score) || 0;
    return (

      <SafeAreaView style={{width: "100%"}}>
      <View style={S.container}>
        <View style={S.headerBar}>
          <Text style={S.headerText}>REASONS FOR CHANGE</Text>
        </View>


        <View style={S.mainContainerLight}>
        <ScrollView style={styles.container}>
      <ReasonsRow
        score=""
        comment=""
        title={T.REASONSFORCHANGE.QUESTION1}
        style={styles.questionOne} 
        id={'QUESTION1'}
        QUESTION={QUESTION1}
        setQUESTION={(newQUESTION1) => {setQUESTION1(newQUESTION1)}}
        QUESTIONscore={QUESTION1score}
        setQUESTIONscore={(newQUESTION1score) => {setQUESTION1score(newQUESTION1score)}}
      ></ReasonsRow>
      <ReasonsRow
        score=""
        comment=""
        title={T.REASONSFORCHANGE.QUESTION2}
        style={styles.questionOne} 
        id={'QUESTION2'}
        QUESTION={QUESTION2}
        setQUESTION={(newQUESTION2) => {setQUESTION2(newQUESTION2)}}
        QUESTIONscore={QUESTION2score}
        setQUESTIONscore={(newQUESTION2score) => {setQUESTION2score(newQUESTION2score)}}
      ></ReasonsRow>
      <ReasonsRow
        score=""
        comment=""
        title={T.REASONSFORCHANGE.QUESTION3}
        style={styles.questionOne} 
        id={'QUESTION3'}
        QUESTION={QUESTION3}
        setQUESTION={(newQUESTION3) => {setQUESTION3(newQUESTION3)}}
        QUESTIONscore={QUESTION3score}
        setQUESTIONscore={(newQUESTION3score) => {setQUESTION3score(newQUESTION3score)}}
      ></ReasonsRow>

      <ReasonsRow
        score=""
        comment=""
        title={T.REASONSFORCHANGE.QUESTION4}
        style={styles.questionOne} 
        id={'QUESTION4'}
        QUESTION={QUESTION4}
        setQUESTION={(newQUESTION4) => {setQUESTION4(newQUESTION4)}}
        QUESTIONscore={QUESTION4score}
        setQUESTIONscore={(newQUESTION4score) => {setQUESTION4score(newQUESTION4score)}}
      ></ReasonsRow>

      <ReasonsRow
        score=""
        comment=""
        title={T.REASONSFORCHANGE.QUESTION5}
        style={styles.questionOne} 
        id={'QUESTION5'}
        QUESTION={QUESTION5}
        setQUESTION={(newQUESTION5) => {setQUESTION5(newQUESTION5)}}
        QUESTIONscore={QUESTION5score}
        setQUESTIONscore={(newQUESTION5score) => {setQUESTION5score(newQUESTION5score)}}
      ></ReasonsRow>

<ReasonsRow
        score=""
        comment=""
        title={T.REASONSFORCHANGE.QUESTION6}
        style={styles.questionOne} 
        id={'QUESTION6'}
        QUESTION={QUESTION6}
        setQUESTION={(newQUESTION6) => {setQUESTION6(newQUESTION6)}}
        QUESTIONscore={QUESTION6score}
        setQUESTIONscore={(newQUESTION6score) => {setQUESTION6score(newQUESTION6score)}}
      ></ReasonsRow>

      <ReasonsRow
        score=""
        comment=""
        title={T.REASONSFORCHANGE.QUESTION7}
        style={styles.questionOne} 
        id={'QUESTION7'}
        QUESTION={QUESTION7}
        setQUESTION={(newQUESTION7) => {setQUESTION7(newQUESTION7)}}
        QUESTIONscore={QUESTION7score}
        setQUESTIONscore={(newQUESTION7score) => {setQUESTION7score(newQUESTION7score)}}
      ></ReasonsRow>

      <ReasonsRow
        score=""
        comment=""
        title={T.REASONSFORCHANGE.QUESTION8}
        style={styles.questionOne} 
        id={'QUESTION8'}
        QUESTION={QUESTION8}
        setQUESTION={(newQUESTION8) => {setQUESTION8(newQUESTION8)}}
        QUESTIONscore={QUESTION8score}
        setQUESTIONscore={(newQUESTION8score) => {setQUESTION8score(newQUESTION8score)}}
      ></ReasonsRow>
      <ReasonsRow
        score=""
        comment=""
        title={T.REASONSFORCHANGE.QUESTION9}
        style={styles.questionOne} 
        id={'QUESTION9'}
        QUESTION={QUESTION9}
        setQUESTION={(newQUESTION9) => {setQUESTION9(newQUESTION9)}}
        QUESTIONscore={QUESTION9score}
        setQUESTIONscore={(newQUESTION9score) => {setQUESTION9score(newQUESTION9score)}}
      ></ReasonsRow>

      <ReasonsRow
        score=""
        comment=""
        title={T.REASONSFORCHANGE.QUESTION10}
        style={styles.questionOne} 
        id={'QUESTION10'}
        QUESTION={QUESTION10}
        setQUESTION={(newQUESTION10) => {setQUESTION10(newQUESTION10)}}
        QUESTIONscore={QUESTION10score}
        setQUESTIONscore={(newQUESTION10score) => {setQUESTION10score(newQUESTION10score)}}
      ></ReasonsRow>

      <ReasonsRow
        score=""
        comment=""
        title={T.REASONSFORCHANGE.QUESTION11}
        style={styles.questionOne} 
        id={'QUESTION11'}
        QUESTION={QUESTION11}
        setQUESTION={(newQUESTION11) => {setQUESTION11(newQUESTION11)}}
        QUESTIONscore={QUESTION11score}
        setQUESTIONscore={(newQUESTION11score) => {setQUESTION11score(newQUESTION11score)}}
      ></ReasonsRow>



      <TouchableOpacity style={styles.button} onPress={props.setClose}>
      <View style={{width: "100%", padding: 33, paddingTop: 50,}}>
        <Text style={S.boldTitleDark}>
          I take it you would agree with me, that {total}/110 is a fair and accurate representation of the current condition of your roof? So we both agree, that this work is needing to be done ASAP yeah?
        </Text>
        <Text style={[S.boldTitleDark, props.closeStatus ?
    styles.green :
    styles.red]}>{JSON.stringify(props.closeStatus)}</Text>
      </View>
      </TouchableOpacity>

      {/* <TouchableOpacity style={styles.button2} onPress={() => {alert(JSON.stringify(data)); props.setReasons(JSON.stringify(data)); props.pageChange(7)}}>
          <Text style={styles.submit}>SUBMIT</Text>

      </TouchableOpacity> */}
    </ScrollView>




        </View>

        <Footer previousPage={N.ROOFING[5]} currentPage={N.ROOFING[6]} nextPage={N.ROOFING[7]} pageChange={(pageNum) => {props.pageChange(pageNum);
          }} reasons={(data) => props.lead.reasons(data)} />


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
  green: {
    color: 'green',
  },
  red: {
    color: 'red',
  },
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
  questionSeven: {
    height: 48,
    marginTop: 17,
    alignSelf: "center"
  },
  questionEight: {
    height: 48,
    marginTop: 17,
    alignSelf: "center"
  },
  questionNine: {
    height: 48,
    marginTop: 17,
    alignSelf: "center"
  },
  questionTen: {
    height: 48,
    marginTop: 17,
    alignSelf: "center"
  },
  questionEleven: {
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
