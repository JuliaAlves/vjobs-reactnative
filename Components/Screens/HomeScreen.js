import React, {Component} from 'react';
import { StyleSheet, SafeAreaView, Image, FlatList, TouchableHighlight, View, Text } from 'react-native';
import { getJobs } from '../../Networking/API'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
class HomeScreen extends Component{
    static navigationOptions = {
        title: 'Home',
      };
    
    constructor(props){
        super(props);
        this.state = {jobs: []}
    }

    componentDidMount(){
        getJobs().then(jobs => this.setState({jobs})).catch(error => console.log(error))
    }

    renderHeader(){
        return(<Image style={{margin:16, alignSelf:'center'}}
        source={require('../../assets/logo-h-vjobs.png')}
        />)
    }

    renderItem(vaga){
        return(
                <TouchableHighlight 
                onPress={() => this.props.navigation.navigate('Detail',{id: vaga.id})}
                color="black">
                    <Text style={{
                        paddingHorizontal: 16,
                        paddingVertical: 8,
                        minHeight:48,
                        minWidth: 80,
                        borderWidth: 1,
                        borderColor:'#000',
                        backgroundColor:'#ccc',
                    }}>
                    {vaga.name}
                    </Text>
                </TouchableHighlight>
        )
    }

    renderList(){
        const separatorStyle = {
            flexGrow:1, height:5, backgroundColor:'#fff'
        }

        return(
            <FlatList data={this.state.jobs}
                renderItem={({item}) => this.renderItem(item)}
                keyExtractor={(item) => `${item.id}`}
                ListHeaderComponent={()=>this.renderHeader()}
                style={{
                flex:1,
                backgroundColor:'white',
                marginTop: 50
                }}
                ItemSeparatorComponent={() => <View style={separatorStyle} />}
            />
        )
    }

    render(){
    return(
        <SafeAreaView style={styles.container}>
            {this.renderList()}
        </SafeAreaView>)

    }
}

export default HomeScreen;