import { Header } from "@components/Header";
import { Container, Content, HeaderContainer } from "./style";
import { Highligth } from "@components/Highligth";
import { Buttom } from "@components/Buttom";
import { Alert } from "react-native";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { createTeam } from "src/storage/team/createTeam";
import { AppError } from "@utils/AppError";



export function NewTeam(){
    const [team, setTeam] = useState<string>("");
    const navigation = useNavigation();

    const insets = useSafeAreaInsets();

    async function handleAddMembers(){
        try {
            await createTeam(team);
            navigation.navigate("addMembers", {team})
        } catch (error) {
            if (error instanceof AppError){
                Alert.alert("Nova equipe", error.message);
            }else{
                Alert.alert("Nova equipe", "Não foi possivel criar uma nova equipe!");
            }
            
        }
        
        
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