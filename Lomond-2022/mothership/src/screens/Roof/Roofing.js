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
              <Footer previousPage={N.ROOFING[1]} currentPage={N.ROOFING[2]} nextPage={N.ROOFING[3]} pageChange={(pageNum) => props.pageChange(pageNum)} />
            </View>
        </SafeAreaView>
          );
        }
const styles = StyleSheet.create({

});
