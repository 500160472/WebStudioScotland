import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

function ReasonsRow(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.question1TitleRow}>
        <Text style={styles.question1Title}>
          {props.question1Title || "Question 1 Title"}
        </Text>
        <TextInput
          placeholder={props.placeholderv || ""}
          style={styles.placeholderv}
        ></TextInput>
        <TextInput
          placeholder={props.score1 || ""}
          keyboardType="phone-pad"
          maxLength={2}
          style={styles.score1}
        ></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 12,
  },
  question1Title: {
    fontFamily: "Arial",
    color: "rgba(28,2,68,1)",
    fontSize: 26,
    textAlign: "left",
    marginTop: 11,
    flex: 1,
  },
  placeholderv: {
    // fontFamily: "roboto-regular",
    fontFamily: "Arial",
    color: "#121212",
    height: 48,
    // width: 1227,
    borderWidth: 3,
    borderColor: "#000000",
    fontSize: 20,
    borderRadius: 8,
    // marginLeft: 152,
    paddingHorizontal: 12,
    flex: 3,

  },
  score1: {
    fontFamily: "Arial",
    color: "#121212",
    height: 48,
    width: 301,
    borderWidth: 3,
    borderColor: "#000000",
    borderRadius: 8,
    fontSize: 20,
    marginLeft: 22,
    flex: 1,
    paddingHorizontal: 12,
  },
  question1TitleRow: {
    height: 48,
    flexDirection: "row",
    flex: 1
  }
});

export default ReasonsRow;
