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
                <Text style={S.title}>Roofing Problems</Text>

<View style={S.flexRow}>
  <View style={{ flex: 1 }}>
      <Text style={S.secondTitle}>Exterior</Text>
        <Text style={S.list}>
    - Porus, Slipped or Brital Tiles{"\n"}
    - Fungal Growth{"\n"}
    - Degraded Jointing{"\n"}
    - Broken Flashing
        </Text> 
  </View>

  <View style={{ flex: 1 }}>
      <Text style={S.secondTitle}>Internal</Text>
        <Text style={S.list}>
    - Porus, Slipped or Brital Tiles{"\n"}
    - Fungal Growth{"\n"}
    - Degraded Jointing{"\n"}
    - Broken Flashing
        </Text> 
  </View>

  <View style={{ flex: 1 }}>
      <Text style={S.secondTitle}>Hidden Dangers
</Text>
        <Text style={S.list}>
    - Porus, Slipped or Brital Tiles{"\n"}
    - Fungal Growth{"\n"}
    - Degraded Jointing{"\n"}
    - Broken Flashing
        </Text> 
  </View>
</View>       
                </ScrollView>
              </View>
              <Footer previousPage={T.PAGES.ROOFING[1]} currentPage={T.PAGES.ROOFING[2]} nextPage={T.PAGES.ROOFING[1]} pageChange={(pageNum) => props.pageChange(pageNum)} />
            </View>
        </SafeAreaView>
          );
        }
const styles = StyleSheet.create({

});
