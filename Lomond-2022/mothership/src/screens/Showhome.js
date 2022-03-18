import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, SafeAreaView, ScrollView, TextInput } from 'react-native';






import Constants from 'expo-constants';
import S from '../constants/c1--Styles';
import C from '../constants/c2--Colours';
import O from '../constants/c3--Objects';
import T from '../constants/c4--Text';
import L from '../constants/c5--Links';
import A from '../constants/c6--Actions';
import N from '../constants/c7--Navigation';
import D from '../constants/c8--Data';

import Checkbox from 'expo-checkbox';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import Footer from '../components/Footer';
//Receive the checked value (ES6 syntax)


export default function Showhome(props){

    function sendEmail(pageNum){
        fetch('https://lomondcrm.co.uk/react/sendEmail.php', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              id: props.lead.id,
              firstName,lastName,address,postCode,email,phone,mobile,
              q1o1,q1o2,q1o3,q1o4,q1o5,q1o6,
              q2ops,
              q3ops,
              q4ops,
              q5ops,
              q6ops,
              q7ops,
            })
          }).then((response) => response.text())
          .then((responseJson, pageNum) => {
              alert(JSON.stringify(showhome)); 
              alert(JSON.stringify(customer));
            //   alert(response);
              console.log(responseJson)
              
          })
          .catch((error) => {
            console.error(error);
          });
        //   console.log()
    }
    

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [postCode, setPostCode] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [mobile, setMobile] = useState('');


    const [q1o1, setq1o1] = useState(false);
    const [q1o2, setq1o2] = useState(false);
    const [q1o3, setq1o3] = useState(false);
    const [q1o4, setq1o4] = useState(false);
    const [q1o5, setq1o5] = useState(false);
    const [q1o6, setq1o6] = useState(false);
    
    const [q2ops, setq2ops] = useState('no');
    const question2 = [
        { label: T.SHOWHOME.QUESTION2.OPTION2, value: 'no' },
        { label: T.SHOWHOME.QUESTION2.OPTION1, value: 'yes' },
    ];

    const [q3ops, setq3ops] = useState('low');
    const question3 = [
      { label: T.SHOWHOME.QUESTION3.OPTION1, value: 'low' },
      { label: T.SHOWHOME.QUESTION3.OPTION2, value: 'average' },
      { label: T.SHOWHOME.QUESTION3.OPTION3, value: 'high' },
    ];

    const [q4ops, setq4ops] = useState('no');
    const question4 = [
        { label: T.SHOWHOME.QUESTION4.OPTION2, value: 'no' },
        { label: T.SHOWHOME.QUESTION4.OPTION1, value: 'yes' },
    ];

    const [q5ops, setq5ops] = useState('no');
    const question5 = [
        { label: T.SHOWHOME.QUESTION5.OPTION2, value: 'no' },
        { label: T.SHOWHOME.QUESTION5.OPTION1, value: 'yes' },
    ];

    const [q6ops, setq6ops] = useState('no');
    const question6 = [
        { label: T.SHOWHOME.QUESTION6.OPTION2, value: 'no' },
        { label: T.SHOWHOME.QUESTION6.OPTION1, value: 'yes' },
    ];

    const [q7ops, setq7ops] = useState('no');
    const question7 = [
        { label: T.SHOWHOME.QUESTION7.OPTION2, value: 'no' },
        { label: T.SHOWHOME.QUESTION7.OPTION1, value: 'yes' },
    ];

let showhome = {
        q1o1,
        q1o2,
        q1o3,
        q1o4,
        q1o5,
        q1o6,
        q2ops,
        q3ops,
        q4ops,
        q5ops,
        q6ops,
        q7ops,
    };
let customer = {
    firstName,
    lastName,
    address,
    postCode,
    email,
    phone,
    mobile,
};











if (props.lead.name_value_list != ''){
    setFirstName(props.lead.name_value_list.name.value.split(' ')[0]);
    setLastName(props.lead.name_value_list.name.value.split(' ')[1]);
    setAddress(props.lead.name_value_list.primary_address_street.value);
    setPostCode(props.lead.name_value_list.primary_address_postalcode.value);
    setPhone(props.lead.name_value_list.phone_home.value);
}


    return (

        <SafeAreaView style={{width: "100%"}}>
        <View style={S.container}>
          <View style={S.headerBar}>
            <Text style={S.headerText}>{T.HEADERS[3].TITLE}</Text>
          </View>
  
          <Text style={{color: '#DDD'}}>{props.lead.id}</Text> 
          <View style={S.mainContainerLight}>
          {/* <Text>{props.reasons}</Text> */}
          <ScrollView style={S.scroll}>
          <View style={styles.container}>
{/* <View style={{width: '100%'}}> */}
    <Text style={[S.boldTitleDark, {marginBottom: 22,}]}>{T.SHOWHOME.QUESTION1.TITLE}</Text>
    <View style={{ flex: 1, flexDirection: 'row', width: '100%', flexWrap: 'wrap', marginLeft: 'auto', marginRight: 'auto', justifyContent: 'space-around'}}>
        <View style={{ minWidth: 300, margin: 12}}>
                    <View style={S.borderButton}>
                        <View style={S.row}>
                            <Checkbox
                            style={S.checkbox}
                            value={q1o1}
                            onValueChange={setq1o1}
                            color={q1o1 ? '#4630EB' : undefined}
                            />
                            <Text style={S.paragraph}>{T.SHOWHOME.QUESTION1.OPTION1}</Text>
                        </View>
                    </View>
        {/* {isChecked ? <Text>Checked</Text> : <Text>Not checked</Text>} */}
        </View>
        <View style={{ minWidth: 300,margin: 12}}>
                    <View style={S.borderButton}>
                        <View style={S.row}>
                            <Checkbox
                            style={S.checkbox}
                            value={q1o2}
                            onValueChange={setq1o2}
                            color={q1o2 ? '#4630EB' : undefined}
                            />
                            <Text style={S.paragraph}>{T.SHOWHOME.QUESTION1.OPTION2}</Text>
                        </View>
                    </View>
        {/* {isChecked ? <Text>Checked</Text> : <Text>Not checked</Text>} */}
        </View>
        <View style={{ minWidth: 300, margin: 12}}>
                    <View style={S.borderButton}>
                        <View style={S.row}>
                            <Checkbox
                            style={S.checkbox}
                            value={q1o3}
                            onValueChange={setq1o3}
                            color={q1o3 ? '#4630EB' : undefined}
                            />
                            <Text style={S.paragraph}>{T.SHOWHOME.QUESTION1.OPTION3}</Text>
                        </View>
                    </View>
        {/* {isChecked ? <Text>Checked</Text> : <Text>Not checked</Text>} */}
        </View>
        <View style={{ minWidth: 300,margin: 12}}>
                    <View style={S.borderButton}>
                        <View style={S.row}>
                            <Checkbox
                            style={S.checkbox}
                            value={q1o4}
                            onValueChange={setq1o4}
                            color={q1o4 ? '#4630EB' : undefined}
                            />
                            <Text style={S.paragraph}>{T.SHOWHOME.QUESTION1.OPTION4}</Text>
                        </View>
                    </View>
        {/* {isChecked ? <Text>Checked</Text> : <Text>Not checked</Text>} */}
        </View>
        <View style={{ minWidth: 300, margin: 12}}>
                    <View style={S.borderButton}>
                        <View style={S.row}>
                            <Checkbox
                            style={S.checkbox}
                            value={q1o5}
                            onValueChange={setq1o5}
                            color={q1o5 ? '#4630EB' : undefined}
                            />
                            <Text style={S.paragraph}>{T.SHOWHOME.QUESTION1.OPTION5}</Text>
                        </View>
                    </View>
        {/* {isChecked ? <Text>Checked</Text> : <Text>Not checked</Text>} */}
        </View>
        <View style={{ minWidth: 300,margin: 12}}>
                    <View style={S.borderButton}>
                        <View style={S.row}>
                            <Checkbox
                            style={S.checkbox}
                            value={q1o6}
                            onValueChange={setq1o6}
                            color={q1o6 ? '#4630EB' : undefined}
                            />
                            <Text style={S.paragraph}>{T.SHOWHOME.QUESTION1.OPTION6}</Text>
                        </View>
                    </View>
        {/* {isChecked ? <Text>Checked</Text> : <Text>Not checked</Text>} */}
        </View>
    </View>
    <Text style={[S.boldTitleDark, {marginTop: 12, marginBottom: 22,}]}>{T.SHOWHOME.QUESTION2.TITLE}</Text>
    <View style={{ flex: 1, flexDirection: 'row', width: '100%', flexWrap: 'wrap', marginLeft: 'auto', marginRight: 'auto', justifyContent: 'space-around'}}>
                    <RadioForm
                        buttonColor={'#000000'}
                        buttonSize={12}
                        radioStyle={{flex: 1, paddingVertical: 15, backgroundColor: 'white', width: 250, height:60, borderWidth: 3, borderColor: "rgba(187,187,187,1)", borderRadius: 10, paddingHorizontal: 22, marginHorizontal: 22}}
                        selectedButtonColor="#000000"
                        formHorizontal={true}
                        radio_props={question2}
                        initial={0}
                        animation={false}
                        onPress={(value) => setq2ops(value)}
                    />
                </View>
    </View>

    <Text style={[S.boldTitleDark, {marginTop: 12, marginBottom: 22,}]}>{T.SHOWHOME.QUESTION3.TITLE}</Text>
    <View style={{ flex: 1, flexDirection: 'row', width: '100%', flexWrap: 'wrap', marginLeft: 'auto', marginRight: 'auto', justifyContent: 'space-around'}}>
    <RadioForm
                        buttonColor={'#000000'}
                        buttonSize={12}
                        radioStyle={{flex: 1, paddingVertical: 15, backgroundColor: 'white', width: 200, height:60, borderWidth: 3, borderColor: "rgba(187,187,187,1)", borderRadius: 10, paddingHorizontal: 22, marginHorizontal: 22}}
                        selectedButtonColor="#000000"
                        formHorizontal={true}
                        radio_props={question3}
                        initial={0}
                        animation={false}
                        onPress={(value) => setq3ops(value)}
                    />

    </View>
    <Text style={[S.boldTitleDark, {marginTop: 12, marginBottom: 22,}]}>{T.SHOWHOME.QUESTION4.TITLE}</Text>
    <View style={{ flex: 1, flexDirection: 'row', width: '100%', flexWrap: 'wrap', marginLeft: 'auto', marginRight: 'auto', justifyContent: 'space-around'}}>
    <RadioForm
                        buttonColor={'#000000'}
                        buttonSize={12}
                        radioStyle={{flex: 1, paddingVertical: 15, backgroundColor: 'white', width: 200, height:60, borderWidth: 3, borderColor: "rgba(187,187,187,1)", borderRadius: 10, paddingHorizontal: 22, marginHorizontal: 22}}
                        selectedButtonColor="#000000"
                        formHorizontal={true}
                        radio_props={question4}
                        initial={0}
                        animation={false}
                        onPress={(value) => setq4ops(value)}
                    />

    </View>
    <Text style={[S.boldTitleDark, {marginTop: 12, marginBottom: 22,}]}>{T.SHOWHOME.QUESTION5.TITLE}</Text>
    <View style={{ flex: 1, flexDirection: 'row', width: '100%', flexWrap: 'wrap', marginLeft: 'auto', marginRight: 'auto', justifyContent: 'space-around'}}>
    <RadioForm
                        buttonColor={'#000000'}
                        buttonSize={12}
                        radioStyle={{flex: 1, paddingVertical: 15, backgroundColor: 'white', width: 200, height:60, borderWidth: 3, borderColor: "rgba(187,187,187,1)", borderRadius: 10, paddingHorizontal: 22, marginHorizontal: 22}}
                        selectedButtonColor="#000000"
                        formHorizontal={true}
                        radio_props={question5}
                        initial={0}
                        animation={false}
                        onPress={(value) => setq5ops(value)}
                    />

    </View>
    <Text style={[S.boldTitleDark, {marginTop: 12, marginBottom: 22,}]}>{T.SHOWHOME.QUESTION6.TITLE}</Text>
    <View style={{ flex: 1, flexDirection: 'row', width: '100%', flexWrap: 'wrap', marginLeft: 'auto', marginRight: 'auto', justifyContent: 'space-around'}}>
    <RadioForm
                        buttonColor={'#000000'}
                        buttonSize={12}
                        radioStyle={{flex: 1, paddingVertical: 15, backgroundColor: 'white', width: 200, height:60, borderWidth: 3, borderColor: "rgba(187,187,187,1)", borderRadius: 10, paddingHorizontal: 22, marginHorizontal: 22}}
                        selectedButtonColor="#000000"
                        formHorizontal={true}
                        radio_props={question6}
                        initial={0}
                        animation={false}
                        onPress={(value) => setq6ops(value)}
                    />

    </View>
    <Text style={[S.boldTitleDark, {marginTop: 12, marginBottom: 22,}]}>{T.SHOWHOME.QUESTION7.TITLE}</Text>
    <View style={{ flex: 1, flexDirection: 'row', width: '100%', flexWrap: 'wrap', marginLeft: 'auto', marginRight: 'auto', justifyContent: 'space-around'}}>
    <RadioForm
                        buttonColor={'#000000'}
                        buttonSize={12}
                        radioStyle={{flex: 1, paddingVertical: 15, backgroundColor: 'white', width: 200, height:60, borderWidth: 3, borderColor: "rgba(187,187,187,1)", borderRadius: 10, paddingHorizontal: 22, marginHorizontal: 22}}
                        selectedButtonColor="#000000"
                        formHorizontal={true}
                        radio_props={question7}
                        initial={0}
                        animation={false}
                        onPress={(value) => setq7ops(value)}
                    />

    </View>

    <View>
    {/* <TextInput >firstName</TextInput>
<TextInput>setFirstName</TextInput>
<TextInput>lastName</TextInput>
<TextInput>setLastName</TextInput>
<TextInput>address</TextInput>
<TextInput>setAddress</TextInput>
<TextInput>postCode</TextInput>
<TextInput>setPostCode</TextInput>
<TextInput>email</TextInput>
<TextInput>setEmail</TextInput>
<TextInput>phone</TextInput>
<TextInput>setPhone</TextInput>
<TextInput>mobile</TextInput>
<TextInput>setMobile</TextInput> */}
    <TextInput           
          placeholder={T.SHOWHOME.FORM.FIRSTNAME || ""}
          value={firstName}
          onChangeText={setFirstName}
          style={styles.placeholder}
    />
    <TextInput           
          placeholder={T.SHOWHOME.FORM.LASTNAME || ""}
          value={lastName}
          onChangeText={setLastName}
          style={styles.placeholder}
    />
    <TextInput           
          placeholder={T.SHOWHOME.FORM.ADDRESS || ""}
          value={address}
          onChangeText={setAddress}
          style={styles.placeholder}
    />
    <TextInput           
          placeholder={T.SHOWHOME.FORM.POSTCODE || ""}
          value={postCode}
          onChangeText={setPostCode}
          style={styles.placeholder}
    />
    <TextInput           
          placeholder={T.SHOWHOME.FORM.EMAIL || ""}
          value={email}
          onChangeText={setEmail}
          style={styles.placeholder}
    />
    <TextInput           
          placeholder={T.SHOWHOME.FORM.PHONE || ""}
          value={phone}
          onChangeText={setPhone}
          style={styles.placeholder}
    />
    <TextInput           
          placeholder={T.SHOWHOME.FORM.MOBILE || ""}
          value={mobile}
          onChangeText={setMobile}
          style={styles.placeholder}
    />    



    </View>
</ScrollView>
</View>

 <Footer previousPage={N.ROOFING[10]} currentPage={N.ROOFING[11]} nextPage={N.ROOFING[12]} pageChange={(pageNum) => {
     props.setShowhome(JSON.stringify(showhome)); 
     props.setCustomer(JSON.stringify(customer)); 
     sendEmail();
     props.pageChange(pageNum);
     }} />
</View>
{/* // </View> */}
</SafeAreaView>
)
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  placeholder: {
    fontFamily: "Arial",
    color: "#121212",
    height: 48,
    borderWidth: 3,
    borderColor: "#000000",
    fontSize: 20,
    borderRadius: 8,
    paddingHorizontal: 12,
    flex: 4,

  },


});
