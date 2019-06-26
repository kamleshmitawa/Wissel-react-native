import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';

export default class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isFocused: false
    }
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed " + viewId);
  }

  onFocusChange = (e) => {
    console.log(this.state.isFocused, 'isFocused')
    console.log(e, 'event')
    if (e) {
      this.setState({
        isFocused: true
      })
    }
  }

  render() {
    const { isFocused } = this.state
    console.log(isFocused, 'isFocused')
    return (
      <View style={styles.container}>
        <View style={styles.appIcon}>
          <View style={{ width: 75 }}>
            <Image source={require('../assests/loading.gif')}
              style={{ height: 100, width: 100 }} />
          </View>
          <Text style={styles.appText}>Wissle</Text>
        </View>

     <View style={{ borderColor: 'red', flex: 1,alignItems: 'flex-start', justifyContent: 'flex-start'}}>
     { isFocused ? <Text style={{ color: 'red', fontSize: 16}}>Email</Text> : null }
     </View>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db' }} />
          <TextInput style={styles.inputs}
          onFocus={this.onFocusChange}
            placeholder="Email"
            inputType="email_address"
            underlineColorAndroid='transparent'
            onChangeText={(email) => this.setState({ email })} />
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db' }} />
          <TextInput style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid='transparent'
            onChangeText={(password) => this.setState({ password })} />
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('login')}>
          <Text style={styles.loginText}>{'sign in'.toUpperCase()}</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('restore_password')}>
          <Text style={styles.forgetPasswordText}>{'Forgot password?'.toUpperCase()}</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('register')}>
          <Text style={styles.signUpText}>{'Sign Up today'.toUpperCase()}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  upLabel: {
    backgroundColor: 'blue',
    // position: 'absolute',
    // bottom: 30,
    // left: 60,
    // top: 10,
    fontSize: 20,
    color: '#00b5ec',
    // borderWidth: 1, 
    // borderColor: 'red'


  },
  downLabel: {
    // backgroundColor: 'red',
    fontSize: 20
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  appIcon: {
    marginBottom: 20,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  appText: {
    fontSize: 35,
    fontWeight: 'bold',
    marginLeft: 0,
    color: 'black'
  },
  inputContainer: {
    borderBottomColor: 'lightgrey',
    // backgroundColor: 'grey',
    borderBottomWidth: 1,
    width: '90%',
    height: 80,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    // position:'relative'

  },
  inputs: {
    height: 40,
    marginLeft: 16,
    // borderBottomColor: '#FFFFFF',
    flex: 1,
    fontSize: 20,
    // position: 'relative',
    // padding: 5
    backgroundColor: 'yellow'
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: '80%',
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,

  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
    fontSize: 17
  },
  forgetPasswordText: {
    color: '#00b5ec',
    fontSize: 17
  },
  signUpText: {
    color: '#00b5ec',
    fontSize: 17
  }

});
