
import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
import LoginView from './src/components/LoginView';


export default class App extends Component{
  render() {
    return (
      <View style={{ flex: 1, marginTop: 0}}>
          <LoginView />
      </View>
    );
  }
}
