import { Header } from "@components/Header";
import { Container, Content, HeaderContainer } from "./style";
import { Highligth } from "@components/Highligth";
import { Input } from "@components/Input";
import { Buttom } from "@components/Buttom";



export function AddMembers(){
    return (
        <Container>

            <HeaderContainer>
                
                <Header showBackButton />
                
                <Highligth 
                    title="Equipe 1"
                    subtitle="Adicione os titulares e reservas"
                />
            </HeaderContainer>

            <Content>

                <Input placeholder="Adicione um membro" />

                <Buttom  title="Deletar equipe" type="SECONDARY"/>
            </Content>

        </Container>
    );
}