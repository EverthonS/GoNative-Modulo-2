import React from 'react';
import { View, TextInput, Text, TouchableOpacity, StatusBar } from 'react-native';
import styles from './styles';

const Welcome = () => (
  <View style={styles.container} >
      <StatusBar barStyle='light-content'/>
      <Text style={styles.title} >Bem-vindo</Text>
      <Text style={styles.text} >Para continuar, precisamos que você informe seu usuário no GitHub</Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Digite seu usuário"
          underlineColorAndroid="transparent"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={()=>null} >
        <Text style={styles.buttonText} >Prosseguir</Text>
      </TouchableOpacity>

  </View>
);

Welcome.navigationOptions = {
  header:null,
}

export default Welcome;
