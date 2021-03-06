import React, {Component} from 'react';
import {Text, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';

export default class FirebaseApp extends Component{

  constructor(props){
    super(props)
    this.getUser()
    this.state = {nome:'', curso:'', idade:''}
  }

  getUser = async () =>{
      const userDocument = await firestore().collection('alunos').doc('qwyZWnWFdIK3XHltnGaZ').get()

      this.setState({nome:userDocument._data.nome, curso:userDocument._data.curso, idade:userDocument._data.idade})
  }
  render(){
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontSize:25,}}>
           Meu nome é {this.state.nome},
        </Text>
        <Text style={{fontSize:25}}>
            Meu curso é {this.state.curso}
        </Text>
        <Text style={{fontSize:25}}>
            Tenho {this.state.idade} anos
        </Text>
      </View>
    )
  }
}