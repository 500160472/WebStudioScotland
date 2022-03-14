import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, SafeAreaView, ScrollView, Button } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
// THEME
import S from '../../constants/styles';
import C from '../../constants/colours';
import T from '../../constants/text';
// ASSETS
import HeaderImage from '../../assets/images/header.png';
import Accreditations from '../../assets/images/accreditations.png';
import VideoContainer from '../../components/VideoContainer';
import Footer from '../../components/Footer';
export default function CompanyOverview(props){
  // const [status, setStatus] = React.useState({});
    return (
  <SafeAreaView>
      <View style={S.container}>
        <View style={S.headerBar}>
          <Text style={S.headerText}>{T.HEADERS[1].TITLE}</Text>
        </View>


        <View style={S.mainContainerLight}>
          <ScrollView>
            <Image source={HeaderImage} style={S.headerImage} />
            <Image source={Accreditations} style={S.imageFullWidth} />
            <Text style={S.boldTitleDark}>
            At Lomond we are one of the largest roofing and rough casting suppliers to Scotland’s domestic homeowners. Our aim as a business is to provide a world-class service with a local community feel. </Text><Text style={S.subTitleDark}>Our commitment to 'standard working practices' and only using market leading products has caught the attention of the likes of Propensio finance and the National Federation of roofing contractors who are both now one of our trusted partners. Propensio are also the company who provide monthly payment plans for the products and underwrite the guarantee that come with them. Our other certifications include Marley Eternit Roofing, NFRC registered, ISO:9001, ISO:14001, and OHSAS:18001.
            </Text>
            <VideoContainer url={"http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"} />
          </ScrollView>
        </View>

        <Footer currentPage={T.PAGES.ROOFING[1]} nextPage={T.PAGES.ROOFING[2]} pageChange={(pageNum) => props.pageChange(pageNum)} />


      </View>
  </SafeAreaView>
    );
  }

const styles = StyleSheet.create({


});
