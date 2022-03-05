import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import S from '../../constants/styles';
import C from '../../constants/colours';
import BeforeAfter from '../../assets/images/before-after.jpeg';

  export default class RoofingInstallation extends React.Component {
    //pageChange prop from App.js
    render() {
  // this.props.response[0].username
        /* attach listeners to google StreetView */
        // const streetView = this.getStreetView()
        // window.google.maps.event.addListener(streetView, 'zoomChanged', this.handlePovChanged())

    return (
        <SafeAreaView>
        
            <View style={S.container}>
              <View style={S.headerBar}>
                <Text style={S.headerText}>COMPANY OVERVIEW</Text>
              </View>
              <View style={S.mainContainerLight}>
              <ScrollView>
            <Image source={BeforeAfter} style={S.headerImage} />
            <Text style={S.subTitleDark}>
            There are thousands of Roofing Companys in Scotland. Unfortunatly, a high ever changing percentage of these are not even registered or have a qualified workforce.{"\n"}</Text>
            <Text style={S.boldSubTitleDark}>As a properly regulated business, we are only allowed to install industry leading products, fitted by our fully qualified tradesmen.

            Every roofing project we undertake at lomond EXCEEDS building standard's requirments (BS:5534) which is the minimum British Standard for Roofing Installations
            </Text>
            <View style={S.boxedContainerHighlight}>
              
            </View>
          </ScrollView>
              </View>
              {/* FOOTER  */}
              {/* Last Page, Last page number - Current Page, Current Page Number - Next Page, Next Page number */}
              <View style={S.footerContainerLight}>
                <TouchableOpacity onPress={()=> this.props.pageChange(1)} style={S.flexThird}>
                <Text style={S.boldSubTitle}>
                Go to 'Company Overview'
                  </Text>
                </TouchableOpacity>
                <Text style={[S.subTitle, S.flexThird]}>
                    Roofing Installation
                </Text>
                <TouchableOpacity onPress={()=> this.props.pageChange(1)} style={S.flexThird}>
                  <Text style={S.boldSubTitle}>
                    Go to page 2
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
        </SafeAreaView>
          );
        }
      }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
