import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import TaskItem from "../task-item/TaskItem";


export default class ContentView extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
