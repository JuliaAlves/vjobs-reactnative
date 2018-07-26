import React, {Component} from 'react';
import {Text, ScrollView, StyleSheet} from 'react-native';
import { getJobsId } from '../../Networking/API'

class DetailScreen extends Component{ 
    static navigationOptions = ({ navigation }) => {
        return {
          title: 'Detalhes',
        };
      };


    constructor(props){
        super(props);
        this.state = {jobs: {}};
    }

    componentDidMount(){
        getJobsId(this.props.navigation.getParam('id', 'NO-ID')).then(jobs => this.setState({jobs})).catch(error => console.log(error))
    }

    render(){
        return(
            <ScrollView style={styles.container}>
                <Text style={{fontSize:20, fontWeight:'bold', padding:16}}>{this.state.jobs.name}</Text>
                <Text style={{fontSize:16, padding:16}}><Text style={{fontSize:18, fontWeight:'bold'}}>Salário base: </Text> 
                {this.state.jobs.salary}</Text>
                <Text style={{fontSize:16, padding:16}}><Text style={{fontSize:18, fontWeight:'bold'}}>Área: </Text> 
                {this.state.jobs.area}</Text>
                <Text style={{fontSize:18, fontWeight:'bold', padding:16}}>Descrição: </Text>
                <Text style={{fontSize:16,  padding:12}}>{this.state.jobs.description}</Text>
                <Text style={{fontSize:18, fontWeight:'bold', padding:16}}>Habilidades necessárias: </Text>
                <Text style={{fontSize:16,  padding:12}}>{this.state.jobs.skills}</Text>
                <Text style={{fontSize:18, fontWeight:'bold', padding:16}}>Diferenciais: </Text>
                <Text style={{fontSize:16, padding:12}}>{this.state.jobs.differentials}</Text>                
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },
  });

export default DetailScreen;