import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class TaskItem extends React.Component {
  render() {
    return (
      <View style={style.itemContainer}>
      </View>
    );
  }
}

const style = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#b0cae3',
    height: 80,
  },
});
