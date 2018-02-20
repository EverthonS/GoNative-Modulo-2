import React, { Component } from 'react';
import createNavigator from './routes';
import { AsyncStorage } from 'react-native';

import './config/reactotronConfig';

export default class App extends Component{

  state = {
    userChecked:false,
    userLogged: false,
  }

  async componentDidMount(){
   const username = await AsyncStorage.getItem('@Githuber:username');

    this.appLoaded(username);
  }

  appLoaded = (username) => {
    this.setState({ 
              userChecked: true,
              userLogged: !!username // retorna true
            });

  }

  render(){

    if(!this.state.userChecked){return null};
    
    const Routes = createNavigator(this.state.userLogged);

    return(
      <Routes />
    )
  }
}
