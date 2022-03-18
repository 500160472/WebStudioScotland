import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

function ReasonsRow(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.questionTitleRow}>
        <Text style={styles.questionTitle}>
          {props.title || "Question Title"}
        </Text>
        <TextInput
          placeholder={props.comment || ""}
          value={props.QUESTION || ""}
          onChangeText={props.setQUESTION}
          style={styles.placeholder}
        ></TextInput>
        <TextInput
          placeholder={props.score || ""}
          value={props.QUESTIONscore || ""}
          onChangeText={props.setQUESTIONscore}
          keyboardType="phone-pad"
          maxLength={2}
          style={styles.score}
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
  questionTitle: {
    fontFamily: "Arial",
    color: "rgba(28,2,68,1)",
    fontSize: 26,
    textAlign: "left",
    marginTop: 11,
    flex: 2,
  },
  placeholder: {
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
    flex: 4,

  },
  score: {
    fontFamily: "Arial",
    color: "#121212",
    height: 48,
    width: 61,
    borderWidth: 3,
    borderColor: "#000000",
    borderRadius: 8,
    fontSize: 20,
    marginLeft: 22,
    flex: 1,
    paddingHorizontal: 12,
  },
  questionTitleRow: {
    height: 48,
    flexDirection: "row",
    flex: 1
  }
});

export default ReasonsRow;
