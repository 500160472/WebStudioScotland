import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Constants from 'expo-constants';
import Page1 from './components/Page1';
import Page2 from './components/Page2';

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
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
