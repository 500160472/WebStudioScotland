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
import Showhome from '../screens/Showhome';
import Marketplace from '../screens/Roof/market';
import Marketplace2 from '../screens/Roof/market2';
import Marketplace3 from '../screens/Roof/market3';
import Marketplace4 from '../screens/Roof/market4';
import Marketplace5 from '../screens/Roof/market5';
import MarketplaceVideo from '../screens/Roof/marketVideo';

export default class Sales extends React.Component {
  state = {
    page: 1,
    lead: this.props.lead,
    closeStatus1: false,
    closeStatus2: false,
    closeStatus3: false,
    reasons: '',
    showhome: '',
    customer: '',
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
      return (<ProductGuarantee pageChange={(pageNum) => this.setState({page: pageNum})} lead={this.state.lead}  setClose={() => this.setState({closeStatus3: !this.state.closeStatus3})} closeStatus={this.state.closeStatus3}/>);
    }
    if (this.state.page === 6) {
      return (<ReasonsForChange reasons={this.state.reasons} setReasons={(data) => this.setState({reasons: data})}  pageChange={(pageNum) => this.setState({page: pageNum})} lead={this.state.lead} setClose={() => this.setState({closeStatus1: !this.state.closeStatus1})} closeStatus={this.state.closeStatus1}/>);
    }
    if (this.state.page === 7) {
      return (<Showhome reasons={this.state.reasons} setShowhome={(data) => this.setState({showhome: data})} 
      setCustomer={(data) => this.setState({customer: data})}  pageChange={(pageNum) => this.setState({page: pageNum})} lead={this.state.lead} />);
    }
    if (this.state.page === 8) {
      return (<Marketplace pageChange={(pageNum) => this.setState({page: pageNum})} lead={this.state.lead} />);
    }
    if (this.state.page === 9) {
      return (<Marketplace2 pageChange={(pageNum) => this.setState({page: pageNum})} lead={this.state.lead} />);
    }
    if (this.state.page === 10) {
      return (<Marketplace3 pageChange={(pageNum) => this.setState({page: pageNum})} lead={this.state.lead} />);
    }
    if (this.state.page === 11) {
      return (<Marketplace4 pageChange={(pageNum) => this.setState({page: pageNum})} lead={this.state.lead} />);
    }
    if (this.state.page === 12) {
      return (<Marketplace5 pageChange={(pageNum) => this.setState({page: pageNum})} lead={this.state.lead} />);
    }
    if (this.state.page === 13) {
      return (<MarketplaceVideo pageChange={(pageNum) => this.setState({page: pageNum})} lead={this.state.lead} setClose={() => this.setState({closeStatus2: !this.state.closeStatus2})} closeStatus={this.state.closeStatus2}/>);
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