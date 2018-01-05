import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class TaskItem extends React.Component {
  constructor({task}) {
    super();
    // this.props.task = task;
  }

  render() {
    return (
      <View style={style.itemContainer}>
        <View style={style.taskStatus} />

        <View style={style.taskReadMarker} >
          <Text style={{color: '#0086d0'}}> o </Text>
        </View>

        <View style={style.taskDataContainer}>
          <Text style={style.taskName}>
            {this.props.task.taskName}
          </Text>

          <Text style={style.taskSubName}>
            {this.props.task.taskSubName}
          </Text>

          <Text style={style.processName}>
            {this.props.task.processName}
          </Text>

          <View style={style.userContainer}>
            <Text style={style.userIcon}>
              U
            </Text>
            <Text style={style.userName}>
              {this.props.task.userName}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#f7f8fa',
    borderColor: '#e0e4e7',
    borderWidth: 1,
    height: 100,
    borderRadius: 2,
    marginBottom: 10,
    flexDirection: 'row'
  },
  taskStatus: {
    flex:1,
    backgroundColor: 'red'
  },
  taskReadMarker: {
    flex:5,
    alignItems:'center',
    paddingVertical: 20,
    justifyContent:'center',
  },
  taskDataContainer: {
    paddingVertical: 8,
    flex: 70
  },
  taskName: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  taskSubName: {
    fontSize: 12,
  },
  processName: {
    fontSize: 12,
    color:'#bdbebe'
  },
  userContainer: {
    flexDirection: 'row',
    alignContent: 'flex-start',
    alignItems: 'center'
  },
  userName: {
    flex:20,
    fontSize: 12,
    color:'#bdbebe',
    marginHorizontal: 5
  },
  userIcon:{
    flex:1,
    borderRadius: 2,
    fontSize: 10,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#bdbebe',
    color:'#bdbebe'
  }
});
