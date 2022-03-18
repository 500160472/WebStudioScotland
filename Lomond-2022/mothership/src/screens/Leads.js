import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Constants from 'expo-constants';

import S from '../constants/c1--Styles';
import C from '../constants/c2--Colours';
import O from '../constants/c3--Objects';
import T from '../constants/c4--Text';
import L from '../constants/c5--Links';
import A from '../constants/c6--Actions';
import N from '../constants/c7--Navigation';
import D from '../constants/c8--Data';

export default function Leads(props){

  const [isLoading, setLoading] = React.useState(true);
    const [data, setData] = React.useState([]);
    
    var APIURL = L.CRM_URL;
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
              // alert(Response);ß
              // console.log(Response);
                // Response.map((item, index) => {
                // console.log(item);})
        })
        .catch((error)=>{
          console.error("ERROR FOUND" + error);
        })
        .finally(() => setLoading(false));
    
      }, [])

    
let testData = [{
    id: '1',
    name_value_list: {
      rep_name_c:{name: 'rep_name_c', value: 'Chris'}, 
      name:{name: 'name', value: 'Name Test'}, 
      phone_home:{name: 'phone_home', value: 'Name Test'}, 
      primary_address_street:{name: 'primary_address_street', value: 'Address Test'}, 
      primary_address_postalcode:{name: 'primary_address_postalcode', value: 'Post Code Test'}, 
      appointmenttime_c:{name: 'appointmenttime_c', value: 'Appointment Time Test'}, 
    },
  }];



    return (


      <View style={{ flex: 1, padding: 24 }}>

          <Text style={[S.headerText,{paddingBottom: 30}]}> LEADS </Text>
  {/* TODO FIX LOADING STYLES */}
      {isLoading ? <Text>Loading...</Text> : 
      ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
          {/* <Text style={{ fontSize: 18, color: 'green', textAlign: 'center'}}>{data.title}</Text>
          <Text style={{ fontSize: 14, color: 'green', textAlign: 'center', paddingBottom: 10}}>Leads:</Text> */}
          <FlatList
            data={testData}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <View style={S.listItem}>
              <TouchableOpacity onPress={() => {
                props.lead(item); 
                console.log(props.product)
                console.log(props.product)
              props.pageChange(props.product)}} >
                <Text>{'ID: ' + item.id + '\n  Rep Name: ' + item.name_value_list.rep_name_c.value  + '\n  Name: ' + item.name_value_list.name.value  + '\n  Phone: ' + item.name_value_list.phone_home.value + '\n  Address: ' + item.name_value_list.primary_address_street.value + '\n  Post Code: ' + item.name_value_list.primary_address_postalcode.value + '\n  Appointment Time: ' + item.name_value_list.appointmenttime_c.value + '\n '}</Text>
              </TouchableOpacity>
              </View>
            )}
          />
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <View style={S.listItem}>
              <TouchableOpacity onPress={() => {
                props.lead(item); 
                console.log(props.product)
                console.log(props.product)
              props.pageChange(props.product)}} >
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
