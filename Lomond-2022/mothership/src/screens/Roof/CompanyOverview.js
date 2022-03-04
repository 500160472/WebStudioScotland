import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, SafeAreaView, ScrollView, Button } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
// THEME
import S from '../../constants/styles';
import C from '../../constants/colours';
// ASSETS
import HeaderImage from '../../assets/images/header.png';
import Accreditations from '../../assets/images/accreditations.png';
export default function CompanyOverview(props){
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
    
    return (
  <SafeAreaView>
      <View style={S.container}>
        <View style={S.headerBar}>
          <Text style={S.headerText}>COMPANY OVERVIEW</Text>
        </View>
        <View style={S.mainContainerLight}>
          <ScrollView>
            <Image source={HeaderImage} style={S.headerImage} />
            <Image source={Accreditations} style={S.imageFullWidth} />
            <Text style={S.boldTitleDark}>
            At Lomond we are one of the largest roofing and rough casting suppliers to Scotland’s domestic homeowners. Our aim as a business is to provide a world-class service with a local community feel. </Text><Text style={S.subTitleDark}>Our commitment to 'standard working practices' and only using market leading products has caught the attention of the likes of Propensio finance and the National Federation of roofing contractors who are both now one of our trusted partners. Propensio are also the company who provide monthly payment plans for the products and underwrite the guarantee that come with them. Our other certifications include Marley Eternit Roofing, NFRC registered, ISO:9001, ISO:14001, and OHSAS:18001.
            </Text>
            <View style={S.boxedContainerHighlight}>
              <Video
                ref={video}
                style={S.video}
                source={{
                  uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                }}
                useNativeControls
                resizeMode="contain"
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}
              />
              <TouchableOpacity  style={S.buttonDark} onPress={() =>
                    status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                  }>
                <Text style={S.boldSubTitle}>{status.isPlaying ? 'Pause' : 'Play'}</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        {/* FOOTER  */}
        <View style={S.footerContainerLight}>
        <TouchableOpacity style={S.flexThird}>
        <Text style={S.invisibleLightBlueSubTitle}>
            Go to page 1
          </Text>
        </TouchableOpacity>
        <Text style={[S.subTitle, S.flexThird]}>
            Company Overview
        </Text>
        <TouchableOpacity onPress={()=> props.pageChange(2)}  style={S.flexThird}>
          <Text style={S.boldSubTitle}>
            Go to 'Roofing'
          </Text>
        </TouchableOpacity>
        </View>
      </View>
  </SafeAreaView>
    );
  }

const styles = StyleSheet.create({


});
