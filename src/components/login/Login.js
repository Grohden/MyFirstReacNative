import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View, TextInput} from 'react-native';

export default class Login extends React.Component {
  render() {
    return (
      <View style={style.loginContainer}>
        <View style={style.inputsContainer}>
          <TextInput
            autoFocus
            autoCapitalize="none"
            style={[style.boxInput, style.loginItem]}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="User"
          />

          <TextInput
            autoCapitalize="none"
            style={[style.boxInput, style.loginItem]}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Password"
          />

          <TouchableOpacity
            style={[style.submitButton, style.loginItem]}
            onPress={() => {}}>
            <Text style={style.submitButtonText}> Entrar </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  loginContainer: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputsContainer:{
    alignSelf:'stretch',
    paddingHorizontal: 25,
    alignContent: 'center',
  },
  loginItem:{
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginTop:10,
    borderRadius: 3,
  },
  submitButton:{
    backgroundColor:'#0086c7',
    alignItems: 'center',
    paddingHorizontal: 15
  },
  submitButtonText :{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17
  },
  boxInput: {
    backgroundColor: 'rgba(72, 78, 91, 0.5)',
    alignSelf:'stretch',
    borderColor: '#ddd',
  }
});
