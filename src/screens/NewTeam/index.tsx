import { Header } from "@components/Header";
import { Container, Content, HeaderContainer } from "./style";
import { Highligth } from "@components/Highligth";
import { Buttom } from "@components/Buttom";
import { TextInput } from "react-native";
import { Input } from "@components/Input";


export function NewTeam(){
    return (
        <Container>

            <HeaderContainer>
                
                <Header showBackButton />
                
                <Highligth 
                    title="Nova Equipe"
                    subtitle="Crie uma equipe e adicione membros"
                />
            </HeaderContainer>

            <Content>

                <Input placeholder="Nome da equipe" />

                <Buttom  title="Criar equipe"/>
            </Content>

        </Container>
    );
}