import * as React from 'react';
import { Text, View, KeyboardAvoidingView, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import Constants from 'expo-constants';
import S from '../constants/styles';
import C from '../constants/colours';
import O from '../constants/objects';
import T from '../constants/text';

// create a function for when login button is pressed that connects to mysql database to check if username and password are correct. if correct, then go to main page. if incorrect, then stay on login page

  function login(username, password, props) {
    var Username = username;
    var Password = password;

    if ((Username.length==0) || (Password.length==0)){
      alert("Required Field Is Missing!!!");
    }else{
      var APIURL = "https://justcors.com/tl_79c52e0/https://admin.iopewq.co.uk/react/signin.php";

      var headers = {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
        'mode': 'no-cors' 
      };
            
      var Data ={
        Username: Username,
        Password: Password
      };

      fetch(APIURL,{
        method: 'POST',
        headers: headers,
        body: JSON.stringify(Data)
      })
      .then((Response)=>Response.json())
      .then((Response)=>{
        // alert(Response)
        // alert(Response[0].Message)
        if (Response[0].Message == "Success") {
          // console.log(Response[0].FullName)
          props.response(Response);
          props.authenticated(true);
          props.userInfo(Data);
        }
        // console.log(Data);
      })
      .catch((error)=>{
        console.error("ERROR FOUND" + error);
      })
    }
  }

  function chooseKeyboar() {}

export default class Login extends React.Component {
//pageChange prop from App.js
  state = {
    username: 'Admin',
    password: 'Digisco22!',
  }
  
  render() {

    return (

      
      <KeyboardAvoidingView
      behavior={"padding"} style={styles.keyboard}
    >
      {/* <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.keyboard}
    > */}
    
      <View style={S.container}>
        
        <Text style={S.topHeader}>
          {T.COMPANY_NAME}
        </Text>

        <View style={styles.inputContainer}>

            <Text style={styles.loginText}>{T.LOGIN_TITLE}</Text>
          
            <TextInput style={styles.input}
              placeholder={T.LOGIN_INPUT_ONE}
              onChangeText={(text) => this.setState({username: text})}
              value={this.state.username}
            />
            <TextInput style={styles.input}
              placeholder={T.LOGIN_INPUT_TWO}
              onChangeText={(text) => this.setState({password: text})}
              value={this.state.password}
            />
          
          <TouchableOpacity style={styles.button} onPress={() => {login(this.state.username, this.state.password, this.props)}}><Text style={{textAlign: 'center'}}>{T.LOGIN_BUTTON}</Text></TouchableOpacity>
        
        
        </View>

      </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  
keyboard: {
    backgroundColor: C.lomondBlue,
    flex: 1,
},

  loginText: {
    fontSize: 30,
    color: C.lomondBlue,
    textAlign: 'center',
    marginBottom: 20,
  },

  inputContainer: {
    width: '80%',
    padding: 26,
    marginTop: 32,
    backgroundColor: C.white,
    borderRadius: 8,
  },
  input: {
    width: '100%',
    // height: 40,
    fontSize: 16,
    borderColor:  C.lightBlue,
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  button: {
    width: '100%',
    backgroundColor:  C.lightBlue,
    padding: 12,
    borderRadius: 8,
    marginTop: 16,
  },
  
});
