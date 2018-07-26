import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../Screens/HomeScreen'
import DetailScreen from '../Screens/DetailScreen'

const RootStack = createStackNavigator({
  Home: HomeScreen,
  Detail: DetailScreen,
},
{
    initialRouteName: 'Home',
});

export default RootStack;