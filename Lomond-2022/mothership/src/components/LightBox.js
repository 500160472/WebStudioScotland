
import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';

import Lightbox from 'react-native-lightbox';
// import Carousel from 'react-native-looped-carousel';

const BASE_PADDING = 10;
// THEME
// import S from '../constants/c1--Styles';
// import C from '../constants/c2--Colours';
// import O from '../constants/c3--Objects';
// import T from '../constants/c4--Text';
// import L from '../constants/c5--Links';
// import A from '../constants/c6--Actions';
// import N from '../constants/c7--Navigation';
// import D from '../constants/c8--Data';
// create a functional component called VideoContainer that will be used in the Roof component.
export default function LightBox(props){
    return (


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
        source={props.source}
        style={styles.contain}
        resizeMode="auto"
        />
      </View>
    </Lightbox>
</View>
  );
}   


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
    width: "100%",
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



