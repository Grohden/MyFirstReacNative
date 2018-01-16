import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as PlatformUtils from '../../PlatformUtils';

export default class ActionBar extends React.Component {
  render() {
    return (
      <View style={style.textContainer}>
        <Text style={style.barText}> App bar </Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  textContainer:{
    backgroundColor: '#677588',
    height: PlatformUtils.ifIOS(50).elseUse(50),
    paddingTop: PlatformUtils.ifIOS(20).elseUse(0),
    justifyContent: 'center',
    alignContent: 'center'
  },
  barText: {
    textAlign:'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  }
});
