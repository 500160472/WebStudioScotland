
   
import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Lightbox from 'react-native-lightbox';
import Carousel from 'react-native-looped-carousel';

const WINDOW_WIDTH = Dimensions.get('window').width;
const BASE_PADDING = 10;

export default () => (
  <ScrollView style={styles.container}>
  <View style={styles.row}>
<View style={styles.col}>
    <Lightbox
      renderHeader={close => (
        <TouchableOpacity onPress={close}>
          <Text style={styles.closeButton}>Close</Text>
        </TouchableOpacity>
      )}>
      <View style={styles.thumb}>
        {/* <Text>I have a custom header</Text> */}
        <Image
        source={require('../../assets/images/logo.png')}
        style={styles.contain}
        resizeMode="auto"
        />
      </View>
    </Lightbox>
</View>
<View style={styles.col}>
    <Lightbox
      renderHeader={close => (
        <TouchableOpacity onPress={close}>
          <Text style={styles.closeButton}>Close</Text>
        </TouchableOpacity>
      )}>
      <View style={styles.thumb}>
        {/* <Text>I have a custom header</Text> */}
        <Image
        source={require('../../assets/images/logo.png')}
        style={styles.contain}
        resizeMode="auto"
        />
      </View>
    </Lightbox>
</View>
<View style={styles.col}>
    <Lightbox
      renderHeader={close => (
        <TouchableOpacity onPress={close}>
          <Text style={styles.closeButton}>Close</Text>
        </TouchableOpacity>
      )}>
      <View style={styles.thumb}>
        {/* <Text>I have a custom header</Text> */}
        <Image
        source={require('../../assets/images/logo.png')}
        style={styles.contain}
        resizeMode="auto"
        />
      </View>
    </Lightbox>
</View>
</View>
  </ScrollView>
)

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: BASE_PADDING,
  },
  closeButton: {
    color: 'white',
    borderWidth: 1,
    borderColor: 'white',
    padding: 8,
    borderRadius: 3,
    textAlign: 'center',
    margin: 10,
    alignSelf: 'flex-end',
  },

  row: {
    flexDirection: 'row',
    marginLeft: -BASE_PADDING,
    marginRight: -BASE_PADDING,
    width: WINDOW_WIDTH - BASE_PADDING * 2,
  },
  col: {
    flex: 1,
    height: 200,
    width: 250,
    // backgroundColor: '#6C7A89',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 22,
  },
  square: {
    // justifyContent: 'center',
    // alignSelf: 'center',
    // height: 250,
    // width: 150,
},
contain: {
    // flex: 1,
    height: '100%',
    minHeight: 150,
    minWidth: 250,
    width: '100%',
    // width: WINDOW_WIDTH,
  },
});