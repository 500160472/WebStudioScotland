import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Login from './src/screens/Login';
import Main from './src/navigation/Main';


//My snacks are at: https://expo.io/snacks/@uni


export default class App extends React.Component {
  state = {
    authenticated: false,
    userInfo: {
      username: '',
      password: '',
    },
    response: { },
  };

  autherizedPages = () => {
    if (this.state.authenticated === false){
      return (<Login authenticated={(authenticated) => this.setState({authenticated: authenticated})}  userInfo={(userInfo) => this.setState({userInfo: userInfo})} response={(response) => this.setState({response: response})}/>);
    }
    if (this.state.authenticated === true) {
      // console.log("hey" + userinfo);
      // console.log('HELLO '+ this.state.userInfo.Username);
      return (<Main authenticated={(authenticated) => this.setState({authenticated: authenticated})} userInfo={this.state.userInfo} response={this.state.response}/>);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.autherizedPages()}
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
