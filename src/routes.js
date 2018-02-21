import React from 'react';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import Welcome from './pages/welcome' ;
import Repositories from './pages/repositories';
import Organizations from './pages/organizations';
import HeaderRight from './components/HeaderRight';
import {metrics, colors} from './styles';


const createNavigator = (isLogged = false) => 
    StackNavigator({

    Welcome: { screen: Welcome },
    User:{ screen: TabNavigator(
        { 
        Repositories: { screen: Repositories },
        Organizations: { screen: Organizations },
        },
        {
            tabBarPosition: 'bottom',
            tabBarComponent: TabBarBottom,
            tabBarOptions:{
                showIcon:true,
                showLabel:false,
                activeTintColor:colors.white,
                inactiveTintColor:colors.whiteTransparent,
                style:{
                    backgroundColor:colors.secundary,
                }
            }
        }
    ),
    },

},{
    initialRouteName: isLogged ? 'User' : 'Welcome',
    
    // o navigationOptions precisou ser transformado em função pra que pudesse ser usado no component 
    //HeaderRight que não faz parte das rotas criadas. Assim, podemos passar o parametro navigation como propriedade
    // para o HeaderRight no momento de renderiza-lo. Ver abaixo >>
    navigationOptions: ({navigation}) => (
        {
            headerStyle:{
                paddingHorizontal: metrics.basePadding
            },
            headerRight: <HeaderRight navigation={navigation} />,
        }
    )
  }
);

export default createNavigator;