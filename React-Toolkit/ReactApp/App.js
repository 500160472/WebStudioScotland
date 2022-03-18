import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import Constants from 'expo-constants';

function Page1(props) {
  return (
    <View style={styles.container}>
      <Text>Page 1</Text>
      <TouchableOpacity onPress={() => props.pageChange(2)}>
        <Text>Go to Page 2</Text>
      </TouchableOpacity>
    </View>
  );
}
function Page2(props) {
  return (
    <View style={styles.container}>
      <Text>Page 2</Text>
      <TouchableOpacity onPress={() => props.pageChange(1)}>
        <Text>Go to Page 1</Text>
      </TouchableOpacity>
    </View>
  );
}
  
export default class App extends React.Component {
  state = {
    page: 1,
  };

  pickPageToRender = () => {
    if (this.state.page === 1){
      return (<Page1 pageChange={(pageNum) => this.setState({page: pageNum})} />);
    }
    if (this.state.page === 2) {
      return (<Page2 pageChange={(pageNum) => this.setState({page: pageNum})} />);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.pickPageToRender()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
