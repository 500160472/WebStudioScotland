import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
// IMPORT CONSTANTS
import Constants from 'expo-constants';
import S from '../constants/c1--Styles';
import C from '../constants/c2--Colours';
import O from '../constants/c3--Objects';
import T from '../constants/c4--Text';
import L from '../constants/c5--Links';
import A from '../constants/c6--Actions';
import N from '../constants/c7--Navigation';
import D from '../constants/c8--Data';
// IMPORT PAGES
import Home from '../screens/Home';
import Leads from '../screens/Leads';
import Settings from '../screens/Settings';
import Roof from './Roof';
import Lightbox from '../screens/Roof/lightbox';
import GardenHome from '../screens/GardenHome/home';
import GardenHome2 from '../screens/GardenHome/size';
import GardenHome3 from '../screens/GardenHome/colour';
import GardenHome4 from '../screens/GardenHome/doors';
import GardenHome5 from '../screens/GardenHome/windows';
import GardenHome6 from '../screens/GardenHome/windows2';
import GardenHome7 from '../screens/GardenHome/options';
import GardenHome8 from '../screens/GardenHome/contact';
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
    if (this.state.page === 5) {
      return (<GardenHome pageChange={(pageNum) => this.setState({page: pageNum})} lead={this.state.lead} />);
    }
    if (this.state.page === 6) {
      return (<GardenHome2 pageChange={(pageNum) => this.setState({page: pageNum})} lead={this.state.lead} />);
    }
    if (this.state.page === 7) {
      return (<GardenHome3 pageChange={(pageNum) => this.setState({page: pageNum})} lead={this.state.lead} />);
    }
    if (this.state.page === 8) {
      return (<GardenHome4 pageChange={(pageNum) => this.setState({page: pageNum})} lead={this.state.lead} />);
    }
    if (this.state.page === 9) {
      return (<GardenHome5 pageChange={(pageNum) => this.setState({page: pageNum})} lead={this.state.lead} />);
    }
    if (this.state.page === 10) {
      return (<GardenHome6 pageChange={(pageNum) => this.setState({page: pageNum})} lead={this.state.lead} />);
    }
    if (this.state.page === 11) {
      return (<GardenHome7 pageChange={(pageNum) => this.setState({page: pageNum})} lead={this.state.lead} />);
    }
    if (this.state.page === 12) {
      return (<GardenHome8 pageChange={(pageNum) => this.setState({page: pageNum})} lead={this.state.lead} />);
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

