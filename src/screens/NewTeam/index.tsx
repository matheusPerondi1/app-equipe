import { Header } from "@components/Header";
import { Container, Content, HeaderContainer } from "./style";
import { Highligth } from "@components/Highligth";
import { Buttom } from "@components/Buttom";
import { TextInput } from "react-native";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { Name } from "@components/CardMember/style";
import { useState } from "react";


export function NewTeam(){
    const [team, setTeam] = useState<string>("");
    const navigation = useNavigation();

    function handleAddMembers(){
        navigation.navigate("addMembers", {team})
    }
    
    return (
        <Container>

            <HeaderContainer>
                
                <Header showBackButton  />
                
                <Highligth 
                    title="Nova Equipe"
                    subtitle="Crie uma equipe e adicione membros"
                />
            </HeaderContainer>

            <Content>

                <Input placeholder="Nome da equipe"  onChangeText={setTeam}/>

                <Buttom  title="Criar equipe" onPress={handleAddMembers}/>
            </Content>

        </Container>
    );
}