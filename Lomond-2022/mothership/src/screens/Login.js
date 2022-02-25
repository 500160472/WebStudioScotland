import * as React from 'react';
import { Text, View, KeyboardAvoidingView, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import Constants from 'expo-constants';


export default class Page1 extends React.Component {
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
            // placeholderTextColor="#9a73ef"
            onChangeText={(text) => this.setState({username: text})}
            value={this.state.email}
          />
          <TextInput style={styles.input}
            placeholder="Password"
            // placeholderTextColor="#9a73ef"
            onChangeText={(text) => this.setState({password: text})}
            value={this.state.password}
          />
        <TouchableOpacity style={styles.button} onPress={() => {if (this.state.username === 'Admin' && this.state.password === 'Admin') {
      this.props.authenticated(true);
      }}}>
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
  
  keyboard: {backgroundColor: '#0C002E',
  flex: 1,},
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    // backgroundColor: '#ecf0f1',
    padding: 0,
  },
  loginText: {
    fontSize: 30,
    color: '#281670',
    textAlign: 'center',
    marginBottom: 20,
  },

  header: {
    backgroundColor: '#281670',
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
    backgroundColor: 'white',
    borderRadius: 8,
  },
  input: {
    width: '100%',
    // height: 40,
    fontSize: 16,
    borderColor: '#07A8FE',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  button: {
    width: '100%',
    backgroundColor: '#07A8FE',
    padding: 12,
    borderRadius: 8,
    marginTop: 16,
  },
  
});



// #FDFDFF
// #07A8FE
// #281670
// #0C002E
// #2D3840