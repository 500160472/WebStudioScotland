import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import S from '../constants/c1--Styles';
import C from '../constants/c2--Colours';
import O from '../constants/c3--Objects';
import T from '../constants/c4--Text';
import L from '../constants/c5--Links';
import A from '../constants/c6--Actions';
import N from '../constants/c7--Navigation';
import D from '../constants/c8--Data';
// IMPORT PAGES FROM ROOFING SECTION
import CompanyOverview from '../screens/Roof/CompanyOverview';
import Roofing from '../screens/Roof/Roofing';
import RoofingProblems from '../screens/Roof/RoofingProblems';
import RoofingInstallation from '../screens/Roof/RoofingInstallation';
import ProductGuarantee from '../screens/Roof/ProductGuarantee';
import ReasonsForChange from '../screens/Roof/ReasonsForChange';

export default class Sales extends React.Component {
  state = {
    page: 1,
    lead: this.props.lead,
  };
  pickPageToRender = () => {
    if (this.state.page === 0){
      return (this.props.pageChange(1))
    }
    if (this.state.page === 1){
      return (<CompanyOverview home={(num)=> this.props.pageChange(num)}  pageChange={(pageNum) => this.setState({page: pageNum})} lead={this.state.lead}/>);
    }
    if (this.state.page === 2) {
      return (<Roofing pageChange={(pageNum) => this.setState({page: pageNum})} lead={this.state.lead} />);
    }
    if (this.state.page === 3) {
      return (<RoofingProblems pageChange={(pageNum) => this.setState({page: pageNum})} lead={this.state.lead} />);
    }
    if (this.state.page === 4) {
      return (<RoofingInstallation pageChange={(pageNum) => this.setState({page: pageNum})} lead={this.state.lead} />);
    }
    if (this.state.page === 5) {
      return (<ProductGuarantee pageChange={(pageNum) => this.setState({page: pageNum})} lead={this.state.lead} />);
    }
    if (this.state.page === 6) {
      return (<ReasonsForChange pageChange={(pageNum) => this.setState({page: pageNum})} lead={this.state.lead} />);
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