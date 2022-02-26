import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Page1 from '../screens/Page1';
import Page2 from '../screens/Page2';
import Settings from '../screens/Settings';


//My snacks are at: https://expo.io/snacks/@uni


export default class Main extends React.Component {
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
    if (this.state.page === 3) {
      return (<Settings pageChange={(pageNum) => this.setState({page: pageNum})} />);
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
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
