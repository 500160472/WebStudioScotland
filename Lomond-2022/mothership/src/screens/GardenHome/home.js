import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text, Image, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import Svg, { Ellipse } from "react-native-svg";

function Untitled(props) {
  return (
    <View style={styles.container}>
      <StatusBar animated />
      <View style={styles.groupStack}>
        <View style={styles.group}>
          <View style={styles.rect}>
            <Text style={styles.lomondImprovements}>LOMOND IMPROVEMENTS</Text>
          </View>
          <Text style={styles.gardenHomes}>GARDEN HOMES</Text>
        </View>
        <Svg viewBox="0 0 354.75 670.69" style={styles.ellipse}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(7,168,254,1)"
            cx={177}
            cy={335}
            rx={177}
            ry={335}
          ></Ellipse>
        </Svg>

        {/* <SafeAreaView style={{width: "100%"}}> */}
<ScrollView>

        <TouchableOpacity 
         onPress={()=> props.pageChange(2)}
         >
        <View style={styles.bUTTON}>
            <Text style={{fontSize: 22,}}>CONTINUE</Text>
        </View>
        </TouchableOpacity>
        <Image
          source={require("../../assets/images/garden-home.jpeg")}
          resizeMode="contain"
          style={styles.image}
        ></Image>

</ScrollView>
{/* // </SafeAreaView> */}

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  group: {
    top: 81,
    left: 153,
    width: 602,
    // height: 162,
    position: "absolute"
  },
  rect: {
    width: 450,
    height: 66,
    backgroundColor: "rgba(40,22,112,1)",
    marginLeft: 76
  },
  lomondImprovements: {
    fontFamily: "Arial",
    color: "rgba(255,255,255,1)",
    // height: 38,
    // width: 390,
    fontWeight: '700',
    fontSize: 32,
    marginTop: 13,
    marginLeft: 0
  },
  gardenHomes: {
    fontFamily: "Arial",
    fontWeight: '700',
    color: "rgba(7,168,254,1)",
    // height: 78,
    // width: 602,
    fontSize: 65,
    marginTop: 6
  },
  ellipse: {
    top: 0,
    left: 0,
    width: 676,
    height: 1335,
    position: "absolute",
    transform: [
      {
        rotate: "-69.00deg"
      }
    ]
  },
  bUTTON: {
    top: 686,
    left: 290,
    width: 300,
    height: 66,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 817,
    height: 441,
    position: "absolute",
    top: 229,
    left: 40
  },
  groupStack: {
    width: 903,
    height: 1335,
    marginTop: -71,
    marginLeft: 18
  }
});

export default Untitled;
