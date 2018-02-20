import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Welcome from './pages/welcome' ;
import Repositories from './pages/repositories';
import Organizations from './pages/organizations';
import HeaderRight from './components/HeaderRight';
import {metrics} from './styles';


const createNavigator = (isLogged = false) => 
    StackNavigator({

    Welcome: { screen: Welcome },
    User:{ screen: TabNavigator({ 
        Repositories: { screen: Repositories },
        Organizations: { screen: Organizations },
     }),
    },

},{
    initialRouteName: isLogged ? 'User' : 'Welcome',
    navigationOptions:{
        headerStyle:{
            paddingHorizontal: metrics.basePadding
        },
        headerRight: <HeaderRight/>,
    }
  }
);

export default createNavigator;