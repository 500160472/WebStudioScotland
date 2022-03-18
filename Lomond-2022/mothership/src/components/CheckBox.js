import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import CheckBox from '@react-native-community/checkbox';

function CheckedBox(props) {
    let check = <EntypoIcon name="check" style={styles.icon2}></EntypoIcon>;
    return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <View style={styles.borderButton}>
        <View style={styles.row}>
          <View style={styles.iconsGroup}>



              {/* <FeatherIcon name="square" style={styles.icon1}></FeatherIcon>

                {props.isChecked === 'true' && check }
               */}

          </View>
          <Text style={styles.text}>{props.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
  borderButton: {
    width: 300,
    height: 60,
    borderWidth: 3,
    borderColor: "rgba(187,187,187,1)",
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row"
  },
  iconsGroup: {
    width: 40,
    height: 41
  },
  icon1: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 40
  },
  icon2: {
    top: 2,
    left: 4,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 33
  },

  text: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 23,
    width: 220,
    textAlign: "left",
    lineHeight: 20,
    marginLeft: 10,
    marginTop: 12
  },
  row: {
    height: 41,
    flexDirection: "row",
    flex: 1,
    marginRight: 17,
    marginLeft: 13,
    marginTop: 6
  }
});

export default CheckedBox;
