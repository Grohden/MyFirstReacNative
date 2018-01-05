import React from 'react';
import * as R from 'ramda';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import TaskItem from "../task-item/TaskItem";


export default class ContentView extends React.Component {
  state = {
    tasks: [
      {
        taskId: 1,
        taskName: 'Receber Prazo de Entrega Produtos',
        taskSubName: '(Facebook Impulsionar)',
        processName: '0000022 - Solicitação de Compra',
        dueDate: new Date('25/12/2006'),
        startDate: new Date('25/12/2005'),
        state: 'NORMAL',
        userName: 'João da Silva'
      },
      {
        taskId: 2,
        taskName: 'Solicitar Compra',
        taskSubName: '(HD)',
        processName: '0000025 - Solicitação de Compra',
        dueDate: new Date('25/12/2014'),
        startDate: new Date('25/12/2013'),
        state: 'WARNING',
        userName: 'Aline Rosa'
      }
    ]
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        { this.state.tasks.map((task) => <TaskItem task={task} key={task.taskId} />) }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor:'#e1e8ef'
  },
});
