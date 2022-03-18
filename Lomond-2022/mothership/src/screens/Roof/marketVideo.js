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
import VideoContainer from '../../components/VideoContainer';

export default function MarketVideo(props){  
  const [status, setStatus] = React.useState({});
    return (
      <SafeAreaView style={{width: "100%"}}>
      <View style={S.container}>
        <View style={S.headerBar}>
          <Text style={S.headerText}>MARKETPLACE</Text>
        </View>

        <View style={S.mainContainerLight}>
        <ScrollView>
           {/* <Text>{props.lead.id}</Text>  */}
           {/* <Text>{props.lead.name_value_list.rep_name_c.value}</Text>  */}
            
           <View style={[S.flexRow, { justifyContent: 'center', alignItems: 'center'}]}>  
            {/* <Image source={O.ROOFING.IMAGES.MARKET5} style={S.imageFullWidth} /> */}
            <VideoContainer url={O.ROOFING.VIDEOS.MARKETPLACE} />
            </View>
      <TouchableOpacity style={styles.button} onPress={props.setClose}>
      <View style={{width: "100%", padding: 33, paddingTop: 50,}}>
        <Text style={S.boldTitleDark}>
        If I could show you a way of getting industry leading quality for a middle of the market price, that would be a really easy decision to make wouldn't it? So, who seems best to shop with?
        </Text>
        <Text style={[S.boldTitleDark, props.closeStatus ?
    styles.green :
    styles.red]}>{JSON.stringify(props.closeStatus)}</Text>
      </View>
      </TouchableOpacity>

</ScrollView>
        </View>
        <Footer previousPage={N.ROOFING[16]} currentPage={N.ROOFING[17]} nextPage={N.ROOFING[18]} pageChange={(pageNum) => props.pageChange(pageNum)} />


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
