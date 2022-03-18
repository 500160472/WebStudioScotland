import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text, Image, TouchableOpacity, ScrollView, SafeAreaView, TextInput } from "react-native";
import Svg, { Ellipse } from "react-native-svg";

function Untitled(props) {
  return (
    <View style={styles.container}>
      <StatusBar animated />
      {/* <View style={styles.groupStack}> */}
        {/* <View style={styles.group}> */}
          {/* <View style={styles.rect}> */}
            <Text style={styles.lomondImprovements}>GARDEN HOMES</Text>
          {/* </View> */}
          <Text style={styles.gardenHomes}>Choose your size</Text>
        {/* </View> */}
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
<ScrollView style={{width: '100%', paddingTop: 76,}}>
    <View style={{flexDirection: 'row', justifyContent: 'center', alignContent: 'center', paddingHorizontal: 20}}>
    
    
    <View style={{backgroundColor: '#fff',flex:3, height: 600, borderRadius: 12, justifyContent: 'center', alignContent: 'center', padding: 40,}}>
      <Text style={{textAlign: 'center'}}>FIRST NAME</Text>
      <TextInput style={styles.input}></TextInput>
      <Text style={{textAlign: 'center'}}>LAST NAME</Text>
      <TextInput style={styles.input}t></TextInput>
      <Text style={{textAlign: 'center'}}>EMAIL</Text>
      <TextInput style={styles.input}t></TextInput>
      <Text style={{textAlign: 'center'}}>PHONE</Text>
      <TextInput style={styles.input}t></TextInput>
      <Text style={{textAlign: 'center'}}>ADDRESS</Text>
      <TextInput style={styles.input}t></TextInput>
      <Text style={{textAlign: 'center'}}>POST CODE</Text>
      <TextInput style={styles.input}t></TextInput>
      <Text style={{textAlign: 'center'}}>SURVEY DATE</Text>
      <TextInput style={styles.input}t></TextInput>
    </View>
    
    
        <Image
          source={require("../../assets/images/garden-home2.png")}
          resizeMode="contain"
          style={[styles.image,{marginBottom: 20,flex:2, height: 300,}]}
        ></Image>
    </View>

    <View style={{flexDirection: 'row', justifyContent: 'center', alignContent: 'center', paddingHorizontal: 20, marginTop: 50, marginBottom: 160,}}>
    <TouchableOpacity 
         onPress={()=> props.pageChange(9)}
         style={{ marginHorizontal: 20, }}
         >
          <View style={styles.bUTTON}>
              <Text style={{fontSize: 22, marginHorizontal: 20, }}>BACK</Text>
          </View>
        </TouchableOpacity>


        <TouchableOpacity 
         onPress={()=> props.pageChange(11)}
         style={{ marginHorizontal: 20, }}
         >
          <View style={styles.bUTTON}>
              <Text style={{fontSize: 22,}}>CONTINUE</Text>
          </View>
        </TouchableOpacity>
  </View>
</ScrollView>
{/* // </SafeAreaView> */}

      {/* </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  // rect: {
  //   width: 450,
  //   height: 66,
  //   backgroundColor: "rgba(40,22,112,1)",
  //   marginLeft: 76
  // },
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
    width: 400,
    height: 66,
    position: "relative",
    backgroundColor: "#E6E6E6",
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  image: {
    // width: 917,
    height: 541,
    position: "relative",
    // top: 229,
    // left: 40
  },
  input: {
    fontFamily: "Arial",
    color: "#121212",
    // height: 28,
    borderWidth: 3,
    borderColor: "#000000",
    fontSize: 25,
    borderRadius: 8,
    paddingHorizontal: 12,
    flex: 1,
    marginVertical: 6

  },
});

export default Untitled;
