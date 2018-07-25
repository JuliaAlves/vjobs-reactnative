import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, FlatList } from 'react-native';
import List from './Components/List/List.js'
export default class App extends React.Component { 
  
  render() {
    const vagas= [
      {nome:'Vaga1', id:'1'},
      {nome:'Vaga2', id:'2'},
      {nome:'Vaga3', id:'3'},
    ]
    return (
      <SafeAreaView style={styles.container}>
        <List vagas={vagas}/>
      </SafeAreaView>
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
