import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, SafeAreaView, ScrollView, Button } from 'react-native';
// THEME
import S from '../../constants/c1--Styles';
import C from '../../constants/c2--Colours';
import O from '../../constants/c3--Objects';
import T from '../../constants/c4--Text';
import L from '../../constants/c5--Links';
import A from '../../constants/c6--Actions';
import N from '../../constants/c7--Navigation';
import D from '../../constants/c8--Data';
// ASSETS
// COMPONENTS
import VideoContainer from '../../components/VideoContainer';
import Footer from '../../components/Footer';

export default function CompanyOverview(props){
  const [status, setStatus] = React.useState({});
  // const CompanyOverview = O.ROOFING.VIDEOS.COMPANY_OVERVIEW;
    return (
  <SafeAreaView>
      <View style={S.container}>
        <View style={S.headerBar}>
          <TouchableOpacity onPress={()=>{props.home(1)}}><Text style={S.headerText}>{T.HEADERS[1].TITLE}</Text></TouchableOpacity>
        </View>


        <View style={S.mainContainerLight}>
          <ScrollView>
           <Text>{props.lead.id}</Text> 
           <Text>{props.lead.name_value_list.rep_name_c.value}</Text> 
            <Image source={O.ROOFING.IMAGES.HEADER} style={S.headerImage} />
            <Image source={O.ROOFING.IMAGES.ACCREDITATIONS} style={S.imageFullWidth} />
            
            <Text style={S.boldTitleDark}>
            At Lomond we are one of the largest roofing and rough casting suppliers to Scotland’s domestic homeowners. Our aim as a business is to provide a world-class service with a local community feel. </Text><Text style={S.subTitleDark}>Our commitment to 'standard working practices' and only using market leading products has caught the attention of the likes of Propensio finance and the National Federation of roofing contractors who are both now one of our trusted partners. Propensio are also the company who provide monthly payment plans for the products and underwrite the guarantee that come with them. Our other certifications include Marley Eternit Roofing, NFRC registered, ISO:9001, ISO:14001, and OHSAS:18001.
            </Text>
            
            <VideoContainer url={O.ROOFING.VIDEOS.COMPANY_OVERVIEW} />
          
          
          </ScrollView>
        </View>

        <Footer currentPage={N.ROOFING[1]} nextPage={N.ROOFING[2]} pageChange={(pageNum) => props.pageChange(pageNum)} />


      </View>
  </SafeAreaView>
    );
  }

const styles = StyleSheet.create({


});
