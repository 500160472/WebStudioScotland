import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import S from '../constants/styles';
// IMPORT PAGES FROM ROOFING SECTION
import CompanyOverview from '../screens/Roof/CompanyOverview';
import RoofingInstallation from '../screens/Roof/RoofingInstallation';

export default class Sales extends React.Component {
  state = {
    page: 1,
    leads: this.props.response,
  };
  pickPageToRender = () => {
    if (this.state.page === 1){
      return (<CompanyOverview pageChange={(pageNum) => this.setState({page: pageNum})} leads={this.state.leads}/>);
    }
    if (this.state.page === 2) {
      return (<RoofingInstallation pageChange={(pageNum) => this.setState({page: pageNum})} leads={this.state.leads} />);
    }
  }
  render() {
    return (
      <View style={S.container}>
        {this.pickPageToRender()}
      </View>
    );
  }
}