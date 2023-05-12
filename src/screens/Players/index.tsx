import { Header } from "@components/Header";
import { Container, Form } from "./styles";
import { Highlight } from "@components/Highlight";
import { Buttonicon } from "@components/ButtonIcon";
import { Input } from "@components/Input";

export function Players(){
  return(
    <Container>
      <Header showBackButton />
      
      <Highlight 
        title="Nome da turma"
        subtitle="adicione a galera e separe os times"
      />

      <Form>
        <Input 
          placeholder="Nome do participante"
          autoCorrect={false}
        />
        <Buttonicon 
          icon='add'
        />
      </Form>
    </Container>
  )
}