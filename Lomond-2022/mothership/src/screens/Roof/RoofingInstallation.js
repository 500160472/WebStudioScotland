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
import VideoContainer from '../../components/VideoContainer';
import BeforeAfter from '../../assets/images/before-after.jpeg';
import Footer from '../../components/Footer';
import TimeLineBox from '../../components/TimelineBox';
export default function RoofingInstallation(props){
  const [status, setStatus] = React.useState({});
    return (
      <SafeAreaView style={{width: "100%"}}>
      <View style={S.container}>
        <View style={S.headerBar}>
          <Text style={S.headerText}>{T.HEADERS[1].TITLE}</Text>
        </View>

        <View style={S.mainContainerLight}>
          <ScrollView>
{/* TODO Add roofing installation content */}
            <Image source={O.ROOFING.IMAGES.HEADER} style={S.headerImage} />
            <Text style={S.boldSubTitleDark}>
              {T.ROOFINGINSTALLATION.MAINTEXT}
            </Text>
            <Text style={[S.subTitleDark,{paddingVertical: 12,}]}>
              {/*  */}
              {T.ROOFINGINSTALLATION.SUBTITLE}
            </Text>
            <View>
              <View style={{}}>
                <TimeLineBox style={styles.timeLineBox} title={T.ROOFINGINSTALLATION.TIMELINE1}></TimeLineBox>
                <TimeLineBox style={styles.timeLineBox} title={T.ROOFINGINSTALLATION.TIMELINE2}></TimeLineBox>
                <TimeLineBox style={styles.timeLineBox} title={T.ROOFINGINSTALLATION.TIMELINE3}></TimeLineBox>
                <TimeLineBox style={styles.timeLineBox} title={T.ROOFINGINSTALLATION.TIMELINE4}></TimeLineBox>
                <TimeLineBox style={styles.timeLineBox} title={T.ROOFINGINSTALLATION.TIMELINE5}></TimeLineBox>
                <TimeLineBox style={styles.timeLineBox} title={T.ROOFINGINSTALLATION.TIMELINE6}></TimeLineBox>

                <TimeLineBox style={styles.timeLineBox} title={T.ROOFINGINSTALLATION.TIMELINE7}></TimeLineBox>
                <TimeLineBox style={styles.timeLineBox} title={T.ROOFINGINSTALLATION.TIMELINE8}></TimeLineBox>
                <TimeLineBox style={styles.timeLineBox} title={T.ROOFINGINSTALLATION.TIMELINE9}></TimeLineBox>
                <TimeLineBox style={styles.timeLineBox} title={T.ROOFINGINSTALLATION.TIMELINE10}></TimeLineBox>
                <TimeLineBox style={styles.timeLineBox} title={T.ROOFINGINSTALLATION.TIMELINE11}></TimeLineBox>
              </View>
            </View>

            <VideoContainer url={O.ROOFING.VIDEOS.COMPANY_OVERVIEW} />
          </ScrollView>
        </View>

        <Footer previousPage={N.ROOFING[3]} currentPage={N.ROOFING[4]} nextPage={N.ROOFING[5]} pageChange={(pageNum) => props.pageChange(pageNum)} />


      </View>
  </SafeAreaView>





          );
        }
const styles = StyleSheet.create({
  timeLineBox:{
    width: "100%", 
    marginTop: 12,
  }
});
