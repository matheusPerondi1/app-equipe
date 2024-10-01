import { Header } from "@components/Header";
import { Container, Content, HeaderContainer } from "./style";
import { Highligth } from "@components/Highligth";
import { Input } from "@components/Input";
import { Buttom } from "@components/Buttom";
import { ButtomIcon } from "@components/ButtomIcon";



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
                <ButtomIcon icon="add-circle-outline" />

                <Buttom  title="Deletar equipe" type="SECONDARY"/>
            </Content>

        </Container>
    );
}