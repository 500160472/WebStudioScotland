
   
import React, { useState, Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';

import Checkbox from 'expo-checkbox';
 
import Lightbox from 'react-native-lightbox';
import Carousel from 'react-native-looped-carousel';
import TimeLineBox from '../../components/TimelineBox';
import S from '../../constants/c1--Styles';

const WINDOW_WIDTH = Dimensions.get('window').width;
const BASE_PADDING = 10;

// create const state for checkbox



export default function SamplePage() {
  
  const [isChecked, setChecked] = useState(false);


  return(

  <ScrollView style={styles.container}>

      <View style={S.borderButton}>
        <View style={S.row}>
        <Checkbox
          style={S.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#4630EB' : undefined}
        />
        <Text style={S.paragraph}>Custom colored checkbox</Text>
        </View>
      </View>



{/* 
<TimeLineBox style={styles.timeLineBox} title={'TESTING'}></TimeLineBox>
<TimeLineBox style={styles.timeLineBox} title={'TESTING2'}></TimeLineBox>
<TimeLineBox style={styles.timeLineBox} title={'TESTING3'}></TimeLineBox>

 */}





  </ScrollView>
)
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: BASE_PADDING,
  },

});