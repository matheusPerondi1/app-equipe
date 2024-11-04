import { Container, Content, HeaderContainer } from "./style";
import { Header } from '../../components/Header'
import { Highligth } from "@components/Highligth"; 
import { TeamCard } from "@components/TeamCard";
import { useState } from "react";
import { FlatList } from "react-native";
import { ListEmpty } from "@components/ListEmpty";
import { Buttom } from "@components/Buttom";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";



export function Teams(){
    const [teams, setTeams] = useState<string[]>([]);

    const navigation = useNavigation();

    const insets = useSafeAreaInsets();

    function handleNewTeam(){
        navigation.navigate("newTeam")
    }

    return (
        <Container style={{ paddingBottom: insets.bottom }}>

            <HeaderContainer style={{paddingTop: insets.top}}>
                
                <Header />
                
                <Highligth 
                    title="Equipes"
                    subtitle="Preparem suas equipes"
                />
            </HeaderContainer>

            <Content>

                <FlatList 
                
                    data={teams}
                    keyExtractor={(item) => item}
                    renderItem={({item}) => (
                        <TeamCard  title={item} />
                    )}
                    ListEmptyComponent={() => (
                        <ListEmpty  message="Comece criando uma equipe"/>
                    )}
                    contentContainerStyle={teams.length === 0 && {flex: 1}}
                
                />

                <Buttom  title="Criar uma nova equipe" onPress={handleNewTeam}/>
            </Content>


        </Container>
    );
}


  