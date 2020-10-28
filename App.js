import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/searchSreen';
import ResultShowScreen from './src/screens/ResultsShowScreen';

const navigator = createStackNavigator({
  Search: SearchScreen,
  Result: ResultShowScreen
},
{
  initialRouteName: 'Search',
  defaultNavigationOptions:{
    title: "Bussiness Search"
  }
});

export default createAppContainer(navigator);