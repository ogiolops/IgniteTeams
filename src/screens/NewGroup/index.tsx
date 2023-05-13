import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

import { Container, Content, Icon } from "./styles";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

export function NewGroup(){
  const [ group, setGroup ] = useState('')
  const naviagtion = useNavigation();


  function handleNew() {
    naviagtion.navigate('players', { group })
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