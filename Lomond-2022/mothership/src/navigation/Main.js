import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
// IMPORT CONSTANTS
import Constants from 'expo-constants';
import S from '../constants/styles';
// IMPORT PAGES
import Home from '../screens/Home';
import Leads from '../screens/Leads';
import Settings from '../screens/Settings';
import Roof from './Roof';
export default class Main extends React.Component {
  state = {
    page: 1,
    lead: {},
  };

  pickPageToRender = () => {
    if (this.state.page === 1){
      // console.log(this.state.userInfo)
      return (<Home pageChange={(pageNum) => this.setState({page: pageNum})} response={this.props.response} />);
    }
    if (this.state.page === 2) {
      return (<Leads pageChange={(pageNum) => this.setState({page: pageNum})} lead={(lead) => this.setState({lead: lead})} response={this.props.response} />);
    }
    if (this.state.page === 3) {
      return (<Settings pageChange={(pageNum) => this.setState({page: pageNum})} response={this.props.response} />);
    }
    if (this.state.page === 4) {
      return (<Roof pageChange={(pageNum) => this.setState({page: pageNum})} lead={this.state.lead} />);
    }
  }
  render() {
    return (
      <View style={[S.container, {paddingTop: Constants.statusBarHeight}]}>
        {this.pickPageToRender()}
      </View>
    );
  }
}

