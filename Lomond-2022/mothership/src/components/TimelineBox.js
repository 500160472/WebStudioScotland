import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Svg, { Ellipse } from "react-native-svg";

function TimeLineBox(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect2StackRow}>
        <View style={styles.rect2Stack}>
          <View style={styles.rect2}></View>
          <Svg viewBox="0 0 29.98 29.99" style={styles.ellipse}>
            <Ellipse
              strokeWidth={0}
              fill="rgba(187,187,187,1)"
              cx={15}
              cy={15}
              rx={15}
              ry={15}
            ></Ellipse>
          </Svg>
          <Svg viewBox="0 0 14.99 14.99" style={styles.ellipse2}>
            <Ellipse
              strokeWidth={0}
              fill="rgba(2,0,255,0.45)"
              cx={7}
              cy={7}
              rx={7}
              ry={7}
            ></Ellipse>
          </Svg>
        </View>
        <View style={styles.rect3}>
          <Text style={styles.loremIpsum}>{props.title}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  rect2: {
    top: 7,
    left: 15,
    width: 36,
    height: 15,
    position: "absolute",
    backgroundColor: "rgba(187,187,187,1)"
  },
  ellipse: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    position: "absolute"
  },
  ellipse2: {
    top: 8,
    left: 7,
    width: 15,
    height: 15,
    position: "absolute"
  },
  rect2Stack: {
    width: 51,
    height: 30,
    marginTop: 15
  },
  rect3: {
    width: "92%",
    height: 60,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 3,
    borderColor: "rgba(187,187,187,1)",
    borderStyle: "solid",
    overflow: "hidden"
  },
  loremIpsum: {
    fontFamily: "Arial",
    color: "#121212",
    textAlign: "center",
    height: 16,
    width: "100%",
    fontWeight: "600",
    marginTop: 22
  },
  rect2StackRow: {
    height: 60,
    flexDirection: "row",
    flex: 1
  }
});

export default TimeLineBox;
