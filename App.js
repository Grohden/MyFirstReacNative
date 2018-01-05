import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ActionBar from "./src/components/action-bar/ActionBar";
import ContentView from "./src/components/content-view/ContentView";

export default class App extends React.Component {
  render() {
    // const menu = <Menu/>;
    return (
      <View style={style.container}>
        <ActionBar/>
        <ContentView/>
      </View>
    );
  }
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eff3f8',
  }
});
