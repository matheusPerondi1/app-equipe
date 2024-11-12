import { Header } from "@components/Header";
import { Container, Content, HeaderContainer, InputContainer, Tabs, Title } from "./style";
import { Highligth } from "@components/Highligth";
import { Input } from "@components/Input";
import { Buttom } from "@components/Buttom";
import { ButtomIcon } from "@components/ButtomIcon";
import { Tab } from "@components/Tab";
import { Alert, FlatList } from "react-native";
import { useState } from "react";
import { Tag } from "@components/Tag";
import { CardMember } from "@components/CardMember";
import { ListEmpty } from "@components/ListEmpty";
import { useRoute } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { createMemberOnTeam } from "src/storage/member/createMemberOnTeam";
import { AppError } from "@utils/AppError";

type RouteParams = {
    team: string;
}


export function AddMembers(){
    const [tab, setTab] = useState<string>("Titular")
    const [members, setMembers] = useState<string[]>([]);
    const [newMamberName, setNewMemberName] = useState<string>("");

    const route = useRoute();
    const { team } = route.params as RouteParams;

    const insets = useSafeAreaInsets();

    async function handleAddMember(){
        if (newMamberName.trim.length === 0){
            return Alert.alert("Novo membro", "Informe o nome do membro para adicionar.")
        }

        const newMember = {
            name: newMamberName,
            team: team,
            type: tab,
        }

        try {
            await createMemberOnTeam(newMember, team );
        } catch (error) {
            if (error instanceof AppError){
                Alert.alert("Novo mebmbro", error.message)
            }else {
                Alert.alert("Novo mebmro", "Nao foi possivel adicionar um novo membro.")
            }
        }

        
    }

    return (
        <Container style={{paddingBottom: insets.bottom}}>

            <HeaderContainer style={{paddingTop: insets.top}}>
                
                <Header showBackButton />
                
                <Highligth 
                    title= {team}
                    subtitle="Adicione os titulares e reservas"
                />
            </HeaderContainer>

            <Content>
                <InputContainer>
                    <Input placeholder="Adicione um membro" 
                     style={{borderTopRightRadius: 0, borderBottomRightRadius: 0}}
                     onChangeText={() => setNewMemberName}
                     value={newMamberName}
                     />
                    <ButtomIcon icon="add-circle-outline" 
                    style= {{borderTopLeftRadius: 0, borderBottomLeftRadius: 0}}
                    onPress={handleAddMember}
                    />
                </InputContainer>

                <Tabs>
                    <FlatList
                        data={["Titular", "Reserva"]}
                        keyExtractor={(item) => item}
                        renderItem={({item}) => (
                            <Tab
                                title={item}
                                isActive={item === tab}
                                onPress={() => setTab(item)}
                            />
                        )}
                        horizontal
                    />

                    <Tag text={0}/>
                </Tabs>

                <FlatList
                    data={members}
                    keyExtractor={item => item}
                    renderItem={({item}) => (
                        <CardMember
                            name={item}
                            onRemove={() => console.log()}
                        />
                    )}
                    ListEmptyComponent={<ListEmpty message="Não há membros adicionados!" />}
                    contentContainerStyle={[{paddingBottom: 100}, members.length === 0 && {flex: 1}]}
                    showsVerticalScrollIndicator={false}
                />
                
                
                
                
                <Buttom  title="Deletar equipe" type="SECONDARY"/>
            </Content>

        </Container>
    );
}