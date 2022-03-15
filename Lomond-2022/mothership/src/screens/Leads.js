import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Constants from 'expo-constants';

import S from '../constants/styles';
import C from '../constants/colours';
import O from '../constants/objects';
import T from '../constants/text';


  export default function Leads(props){
    const [isLoading, setLoading] = React.useState(true);
    const [data, setData] = React.useState([]);
    
    var APIURL = "https://lomondcrm.co.uk/react/suite.php";
    var headers = {
      'Accept' : 'application/json',
      'Content-Type' : 'application/json'
    };    
    var Data ={
      // repName: repName
      repName: 'DC Dwayne'
    };
    
      useEffect(() => {
        fetch(APIURL,{
          method: 'POST',
          headers: headers,
          body: JSON.stringify(Data)
        })
        .then((Response)=>Response.json())
        .then((Response)=>{
          
          // setData(Response);

          Response = Response.filter(function(item){
            return item.name_value_list.rep_name_c.value == 'Chris';
         }).map(function({id, name_value_list}){
           return {id, name_value_list};
          });
         setData(Response);
         console.log(Response);

          // console.log(data);
          // return Response;
              // alert(Response);
              // console.log(Response);
                // Response.map((item, index) => {
                // console.log(item);})
        })
        .catch((error)=>{
          console.error("ERROR FOUND" + error);
        })
        .finally(() => setLoading(false));
    
      }, [])
  // export default class Page2 extends React.Component {
  //   render() {
    return (
      
      // <View style={styles.container}>
      //   <Text> page 2</Text>
      //   <TouchableOpacity onPress={()=> this.props.pageChange(1)}>
      //     <Text>
      //     {/* {Response[0].username} */}
      //     {/* {this.props.response[0].FullName} ----  */}
      //       Go to page 1
      //     </Text>
      //   </TouchableOpacity>
      //   <TouchableOpacity style={styles.button} onPress={() => leads(this.props.response[0].username)}>
      //     <Text style={{textAlign: 'center'}}>
      //       Submit
      //     </Text>
      //   </TouchableOpacity>

      // </View>



      <View style={{ flex: 1, padding: 24 }}>

          <Text style={[S.headerText,{paddingBottom: 30}]}> LEADS </Text>

      {isLoading ? <Text>Loading...</Text> : 
      ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
          {/* <Text style={{ fontSize: 18, color: 'green', textAlign: 'center'}}>{data.title}</Text>
          <Text style={{ fontSize: 14, color: 'green', textAlign: 'center', paddingBottom: 10}}>Leads:</Text> */}
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <View style={S.listItem}>
              <TouchableOpacity onPress={() => {props.lead(item) + props.pageChange(4)}} >
                <Text>{'ID: ' + item.id + '\n  Rep Name: ' + item.name_value_list.rep_name_c.value  + '\n  Name: ' + item.name_value_list.name.value  + '\n  Phone: ' + item.name_value_list.phone_home.value + '\n  Address: ' + item.name_value_list.primary_address_street.value + '\n  Post Code: ' + item.name_value_list.primary_address_postalcode.value + '\n  Appointment Time: ' + item.name_value_list.appointmenttime_c.value + '\n '}</Text>
              </TouchableOpacity>
              </View>
            )}
          />
        </View>
      )}
    </View>
    );
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
    width: '100%'
  },
});
