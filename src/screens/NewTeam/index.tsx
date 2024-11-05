import { Header } from "@components/Header";
import { Container, Content, HeaderContainer } from "./style";
import { Highligth } from "@components/Highligth";
import { Buttom } from "@components/Buttom";
import { TextInput } from "react-native";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { Name } from "@components/CardMember/style";
import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { createTeam } from "src/storage/team/createTeam";


export function NewTeam(){
    const [team, setTeam] = useState<string>("");
    const navigation = useNavigation();

    const insets = useSafeAreaInsets();

    async function handleAddMembers(){
        await createTeam(team)
        navigation.navigate("addMembers", {team})
    }
    
    return (
        <Container style={{paddingBottom: insets.bottom}}>

            <HeaderContainer style={{paddingTop: insets.top}}>
                
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