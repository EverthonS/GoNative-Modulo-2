import React, {Component} from 'react';
import { View,
         TextInput, 
         Text, 
         TouchableOpacity, 
         StatusBar, 
         ActivityIndicator,
         AsyncStorage, 
       } from 'react-native';
import {NavigationActions} from 'react-navigation';
import styles from './styles';
import api from '../../services/api';


export default class Welcome extends Component{
  
  static navigationOptions = {
    header:null,
  }

  state = {
    username:'',
    loading:false,
    errorMessage:null
  }
  
  saveUser = async (username) => {
    await AsyncStorage.setItem('@Githuber:username',username)
  }

  checkUserExists = async (username) => {
    const user = await api.get(`/users/${username}`);

    return user;
  }

  signIn = async () => {

    const {username} = this.state;

    // se nao foi digitado um usuario, saimos da funcao
    if(username.length === 0) return;

    this.setState({ loading:true, errorMessage:null });
    

    try{
      await this.checkUserExists(username);

      await this.saveUser(username);

      // deu certo.. direciona para a pagina
      const resetAction = NavigationActions.reset({
        index:0,
        actions:[
          NavigationActions.navigate({ routeName: 'User' })
        ]
      })
  
      this.props.navigation.dispatch(resetAction);

    }catch(err){
     // erro
     this.setState({ loading: false, errorMessage:'Usuário não existe' })
    }

    
  }

  render(){
    return(
          <View style={styles.container} >
                <StatusBar barStyle='light-content'/>
                <Text style={styles.title} >Bem-vindo</Text>
                <Text style={styles.text} >Para continuar, precisamos que você informe seu usuário no GitHub</Text>
                { !!this.state.errorMessage && <Text style={styles.error} >{this.state.errorMessage}</Text> }
                <View style={styles.form}>
                  <TextInput 
                    style={styles.input}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Digite seu usuário"
                    underlineColorAndroid="transparent"
                    value={this.state.username}
                    onChangeText={text=>this.setState({username : text})}
                  />
                </View>

                <TouchableOpacity style={styles.button} onPress={this.signIn} >
                  { this.state.loading 
                  ? <ActivityIndicator size='small' color="#FFF" />
                  :
                  <Text style={styles.buttonText} >Prosseguir</Text>
                  }
                  
                  
                </TouchableOpacity>

            </View>
    )
  }
}
