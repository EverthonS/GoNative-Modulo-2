import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Styles from './styles';

export default class HeaderRight extends Component{

    signOut = () => {
        null
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