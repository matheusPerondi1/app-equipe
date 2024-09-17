import { Container, Content, HeaderContainer } from "./style";
import { Header } from '../../components/Header'
import { Highligth } from "@components/Highligth"; 
import { TeamCard } from "@components/TeamCard";
import { useState } from "react";
import { FlatList } from "react-native";


export function Teams(){
    const [teams, setTeams] = useState<string[]>(['Equipe 1 ', 'Equipe 2',]);

    return (
        <Container>

            <HeaderContainer>
                
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
                
                />

                
            </Content>


        </Container>
    );
}


  