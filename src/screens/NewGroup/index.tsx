import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import { useState } from 'react';

import { AppError } from '@utils/AppError';
import { groupCreate } from '@storage/group/groupCreate';

import { Container, Content, Icon } from "./styles";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

export function NewGroup(){
  const [ group, setGroup ] = useState('')
  const naviagtion = useNavigation();


  async function handleNew() {

    try {

      if(group.trim().length === 0) {
        return Alert.alert('Novo Grupo', 'Informe o nome da turma.')
      }

      await groupCreate(group)
      naviagtion.navigate('players', { group })

    } catch (error) {
      if(error instanceof AppError){
        Alert.alert('Novo grupo', error.message)
      }else{
        Alert.alert('Novo grupo', 'Não foi possível criar um novo grupo.');
        console.log(error) 
      }
    }
  }

  return(
    <Container>
      <Header showBackButton />

      <Content>
        <Icon/>
        <Highlight
          title="Nova turma"
          subtitle="Crie a tumar para adiconar as pessoas"
        />
        <Input 
          placeholder="Nome da turma"
          onChangeText={setGroup}
        />
        <Button
          title="Criar"
          onPress={handleNew}
        />
      </Content>
    </Container>
  )
}