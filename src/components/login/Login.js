import React from 'react';
import {Icon} from '../icons/Icon';
import {TouchableOpacity, StyleSheet, Text, View, TextInput} from 'react-native';

export default class Login extends React.Component {
  render() {
    return (
      <View style={style.loginContainer}>
        <View style={style.inputsContainer}>

          <View style={[style.loginItem, style.boxInput]}>

            <Icon style={style.iconForInput} name="user" size={20} color="white"/>

            <TextInput
              autoFocus
              placeholderTextColor="white"
              style={style.inputWithIcon}
              autoCapitalize="none"
              underlineColorAndroid="rgba(0,0,0,0)"
              placeholder="User"
            />
          </View>

          <View style={[style.loginItem, style.boxInput]}>
            <Icon style={style.iconForInput} name="lock" size={20} color="white"/>

            <TextInput
              autoCapitalize="none"
              placeholderTextColor="white"
              style={style.inputWithIcon}
              underlineColorAndroid="rgba(0,0,0,0)"
              secureTextEntry={true}
              placeholder="Password"
            />
          </View>

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
  inputWithIcon:{
    flex: 6,
    color: 'white',
    paddingVertical: 15,
  },
  iconForInput:{
    flex: 1,
    textAlign: 'center',
    alignSelf: 'center',
  },
  loginItem:{
    marginBottom:10,
    borderRadius: 3,
  },
  submitButton:{
    backgroundColor:'#0086c7',
    alignItems: 'center',
    paddingVertical: 15,
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
    flexDirection: 'row',
    borderColor: '#ddd',
  }
});
