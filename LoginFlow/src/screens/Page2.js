import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

// on page load fetch results from url and pass to page
// onComponentMount = () => {
//   // isLoading: true,
//   fetch('https://expo.io/@uni/snacks/')
//     .then(response => response.json())
//     .then(responseJson => {
//       this.setState({
//         // isLoading: false,
//         dataSource: responseJson,
//       }, function() {
//         // do something with new state
//       });
//     })
//     .catch(error => {
//       console.error(error);
//     });
// }




export default class Page2 extends React.Component {
//pageChange prop from App.js
  render() {
    return (
      <View style={styles.container}>
        <Text> page 2</Text>
        <TouchableOpacity onPress={()=> this.props.pageChange(1)}>
          <Text>
          {this.props.response[0].FullName} ---- 
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
