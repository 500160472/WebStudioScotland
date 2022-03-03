import * as React from 'react';
import { Text, View, KeyboardAvoidingView, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import Constants from 'expo-constants';
import S from '../constants/styles';


// create a function for when login button is pressed that connects to mysql database to check if username and password are correct. if correct, then go to main page. if incorrect, then stay on login page

  function login(username, password, props) {
    var Username = username;
    var Password = password;

    if ((Username.length==0) || (Password.length==0)){
      alert("Required Field Is Missing!!!");
    }else{
      var APIURL = "https://lomondcrm.co.uk/react/signin.php";

      var headers = {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
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
        alert(Response[0].Message)
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




export default class Login extends React.Component {
//pageChange prop from App.js
  state = {
    username: '',
    password: '',
  }

  render() {

    return (
      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.keyboard}
    >
      <View style={styles.container}>
        <Text style={styles.header}> </Text>
        <View style={styles.inputContainer}>
          <Text style={styles.loginText}>LOGIN</Text>
          <TextInput style={styles.input}
            placeholder="Username"
            onChangeText={(text) => this.setState({username: text})}
            value={this.state.Username}
          />
          <TextInput style={styles.input}
            placeholder="Password"
            onChangeText={(text) => this.setState({password: text})}
            value={this.state.password}
          />
        <TouchableOpacity style={styles.button} onPress={() => {login(this.state.username, this.state.password, this.props)}}>
          <Text style={{textAlign: 'center'}}>
            Submit
          </Text>
        </TouchableOpacity>
        </View>

      </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  
  keyboard: {
    backgroundColor: S.colors.lomondBlue,
    flex: 1,
},
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 0,
  },
  loginText: {
    fontSize: 30,
    color: S.colors.lomondBlue,
    textAlign: 'center',
    marginBottom: 20,
  },

  header: {
    backgroundColor: S.colors.dark,
    width: '100%',
    textAlign: 'center',
    padding: 16,
    margin: 0,
    fontSize: 24,
    fontWeight: '900',
    color: 'white',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  inputContainer: {
    width: '60%',
    padding: 26,
    marginTop: 32,
    backgroundColor: S.colors.white,
    borderRadius: 8,
  },
  input: {
    width: '100%',
    // height: 40,
    fontSize: 16,
    borderColor:  S.colors.lightBlue,
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  button: {
    width: '100%',
    backgroundColor:  S.colors.lightBlue,
    padding: 12,
    borderRadius: 8,
    marginTop: 16,
  },
  
});
