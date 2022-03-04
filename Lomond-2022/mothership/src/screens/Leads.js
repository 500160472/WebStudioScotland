import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import S from '../constants/styles';
import C from '../constants/colours';
// on page load fetch results from url and pass to page
// onComponentMount = () => {
//   // isLoading: true,
//   fetch('https://expo.io/@uni/snacks/')
//     .then(response => response.json())
//     .then(responseJson => {
//       this.setState({
//         // isLoading: false,
//         dataSource: responseJson,
//       }, function() {
//         // do something with new state
//       });
//     })
//     .catch(error => {
//       console.error(error);
//     });
// }

function leads(repName) {

    var APIURL = "https://lomondcrm.co.uk/react/suite.php";

    var headers = {
      'Accept' : 'application/json',
      'Content-Type' : 'application/json'
    };
          
    var Data ={
      repName: repName
    };

    fetch(APIURL,{
      method: 'POST',
      headers: headers,
      body: JSON.stringify(Data)
    })
    .then((Response)=>Response.json())
    .then((Response)=>{
          
      
      // alert(Response[0].id)
      // alert(Response[0].Message)
      // if (Response[0].Message == "Success") {
        // console.log(Response[0].FullName)
        // props.response(Response);
        // props.authenticated(true);
        // props.userInfo(Data);
      // }
      Response.map((item, index) => {
      console.log(item);})
    })
    .catch((error)=>{
      console.error("ERROR FOUND" + error);
    })
  }

  
  
  export default class Page2 extends React.Component {
    //pageChange prop from App.js
    render() {

        leads(this.props.response[0].username)
        /* attach listeners to google StreetView */
        // const streetView = this.getStreetView()
        // window.google.maps.event.addListener(streetView, 'zoomChanged', this.handlePovChanged())

    return (
      <View style={styles.container}>
        <Text> page 2</Text>
        <TouchableOpacity onPress={()=> this.props.pageChange(1)}>
          <Text>
          {/* {this.props.response[0].FullName} ----  */}
            Go to page 1
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => leads(this.props.response[0].username)}>
          <Text style={{textAlign: 'center'}}>
            Submit
          </Text>
        </TouchableOpacity>

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
