import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

export default class Page2 extends React.Component {
//pageChange prop from App.js
  render() {
    return (
      <View style={styles.container}>
        <Text> page 2</Text>
        <TouchableOpacity onPress={()=> this.props.pageChange(1)}>
          <Text>
            Go to page 1
          </Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
