import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import S from '../../constants/styles';
import C from '../../constants/colours';
import O from '../../constants/objects';
import T from '../../constants/text';

import BeforeAfter from '../../assets/images/before-after.jpeg';
import Footer from '../../components/Footer';

export default function RoofingInstallation(props){
    //pageChange prop from App.js
    
  // this.props.response[0].username
        /* attach listeners to google StreetView */
        // const streetView = this.getStreetView()
        // window.google.maps.event.addListener(streetView, 'zoomChanged', this.handlePovChanged())

    return (
        <SafeAreaView>
        
            <View style={S.container}>
              <View style={S.headerBar}>
                <Text style={S.headerText}>{T.HEADERS[1].TITLE}</Text>
              </View>
              <View style={S.mainContainerLight}>
                <ScrollView style={S.scroll}>
                  <Image source={BeforeAfter} style={S.headerImage} />
                  <Text style={S.subTitleDark}>
                  There are thousands of Roofing Companys in Scotland. Unfortunatly, a high ever changing percentage of these are not even registered or have a qualified workforce.{"\n"}</Text>
                  <Text style={S.boldSubTitleDark}>As a properly regulated business, we are only allowed to install industry leading products, fitted by our fully qualified tradesmen.

                  Every roofing project we undertake at lomond EXCEEDS building standard's requirments (BS:5534) which is the minimum British Standard for Roofing Installations
                  </Text>
                </ScrollView>
              </View>
              <Footer previousPage={T.PAGES.ROOFING[1]} currentPage={T.PAGES.ROOFING[2]} nextPage={T.PAGES.ROOFING[1]} pageChange={(pageNum) => props.pageChange(pageNum)} />
            </View>
        </SafeAreaView>
          );
        }
const styles = StyleSheet.create({

});
