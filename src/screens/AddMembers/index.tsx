import { Header } from "@components/Header";
import { Container, Content, HeaderContainer, InputContainer } from "./style";
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
                <InputContainer>
                    <Input placeholder="Adicione um membro" 
                     style={{borderTopRightRadius: 0, borderBottomRightRadius: 0}}
                     />
                    <ButtomIcon icon="add-circle-outline" 
                    style= {{borderTopLeftRadius: 0, borderBottomLeftRadius: 0}}
                    />
                </InputContainer>
                
                <Buttom  title="Deletar equipe" type="SECONDARY"/>
            </Content>

        </Container>
    );
}