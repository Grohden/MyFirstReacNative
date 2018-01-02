import React from 'react';
import SideMenu from 'react-native-side-menu';
import { StyleSheet, Text, View } from 'react-native';
import ContentView from './src/content-view/ContentView';
import Menu from './src/menu/Menu';

export default class App extends React.Component {
  render() {
    const menu = <Menu />;
    
    return (
      <SideMenu menu={menu}>
        <ContentView />
      </SideMenu>
    );
  }
}

