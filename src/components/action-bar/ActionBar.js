import React from 'react';
import * as R from 'ramda';
import {Platform, StyleSheet, Text, View} from 'react-native';

const whenIOS = (value) => R.when(
  () => Platform.OS === 'ios',
  R.always(value)
);


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
    height: whenIOS(50)(80),
    paddingTop: whenIOS(20)(20),
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
