import React, { Component } from 'react';
import { TouchableOpacity, AsyncStorage } from 'react-native';
import {NavigationActions} from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome';
import Styles from './styles';

export default class HeaderRight extends Component{

    signOut = async () => {
        await AsyncStorage.clear();

        const resetAction = NavigationActions.reset({
            index:0,
            actions:[
              NavigationActions.navigate({ routeName: 'Welcome' })
            ]
          })

          this.props.navigation.dispatch(resetAction);

    }

    render(){
        return(
            <TouchableOpacity
                onPress={this.signOut}
            >
                <Icon name='exchange' style={Styles.icon} />
            </TouchableOpacity>
        )
    }
}