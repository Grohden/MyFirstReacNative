import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#673AB7',
    alignItems: 'center',
    justifyContent: 'center'
  },
  defaultText: {
    color: '#EDE7F6'
  }
});

export default class Menu extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.defaultText}> Hey I'm a menu, ya! </Text>
        </View>
    );
  }
}
