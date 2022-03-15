import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import S from '../constants/styles';
// IMPORT PAGES FROM ROOFING SECTION
import CompanyOverview from '../screens/Roof/CompanyOverview';
import RoofingInstallation from '../screens/Roof/RoofingInstallation';
import RoofingProblems from '../screens/Roof/RoofingProblems';

export default class Sales extends React.Component {
  state = {
    page: 1,
    lead: this.props.lead,
  };
  pickPageToRender = () => {
    if (this.state.page === 1){
      return (<CompanyOverview pageChange={(pageNum) => this.setState({page: pageNum})} lead={this.state.lead}/>);
    }
    if (this.state.page === 2) {
      return (<RoofingInstallation pageChange={(pageNum) => this.setState({page: pageNum})} lead={this.state.lead} />);
    }
    if (this.state.page === 3) {
      return (<RoofingProblems pageChange={(pageNum) => this.setState({page: pageNum})} lead={this.state.lead} />);
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