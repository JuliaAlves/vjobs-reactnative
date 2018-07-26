import { createStackNavigator } from 'react-navigation';
import React, {Component} from 'react';
import { StyleSheet, SafeAreaView, Text, FlatList, Button, View } from 'react-native';

class DetailScreen extends Component{ 
    static navigationOptions = ({ navigation }) => {
        return {
          title: 'Vaga '+ navigation.getParam('id', '1'),
        };
      };

    render(){
        return(<Text>{this.props.navigation.getParam('id', '1')}</Text>)
    }
}

class HomeScreen extends Component{
    static navigationOptions = {
        title: 'Home',
      };
    

    renderItem(vaga){
        return(
            <Button style={{
                paddingHorizontal: 16,
                paddingVertical: 8,
                minHeight:48,
                fontWeight:'bold',
                borderWidth: 1,
                borderColor:'#000',
                backgroundColor:'#ccc'
              }}
              onPress={() => this.props.navigation.navigate('Detail',{id: vaga.id})}
              title={vaga.name} />
        )
    }

    renderList(){
        const vagas = [
            {name:'Vaga1', id:'1'},
            {name:'Vaga2', id:'2'},
            {name:'Vaga3', id:'3'},
          ]

        const separatorStyle = {
            flexGrow:1, height:5, backgroundColor:'#fff'
        }

        return(
            <FlatList data={vagas}
                renderItem={({item}) => this.renderItem(item)}
                keyExtractor={(item) => `${item.id}`}
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

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

const RootStack = createStackNavigator({
  Home: HomeScreen,
  Detail: DetailScreen,
},
{
    initialRouteName: 'Home',
});

export default RootStack;