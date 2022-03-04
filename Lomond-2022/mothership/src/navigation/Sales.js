import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Page1 from '../screens/Home';
import Page2 from '../screens/Page2';
import Settings from '../screens/Settings';
import CompanyOverview from '../screens/CompanyOverview/CompanyOverview';
import RoofingInstallation from '../screens/CompanyOverview/RoofingInstallation';


//My snacks are at: https://expo.io/snacks/@uni


export default class Sales extends React.Component {
  state = {
    page: 1,
    leads: {},
  };

  pickPageToRender = () => {
    if (this.state.page === 1){
      return (<CompanyOverview pageChange={(pageNum) => this.setState({page: pageNum})} leads={(leads) => this.setState({leads: leads})} response={this.props.response} />);
    }
    if (this.state.page === 2) {
      return (<RoofingInstallation pageChange={(pageNum) => this.setState({page: pageNum})} leads={(leads) => this.setState({leads: leads})} response={this.props.response} />);
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


});
