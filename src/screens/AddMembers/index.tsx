import { Header } from "@components/Header";
import { Container, Content, HeaderContainer, InputContainer, Tabs, Title } from "./style";
import { Highligth } from "@components/Highligth";
import { Input } from "@components/Input";
import { Buttom } from "@components/Buttom";
import { ButtomIcon } from "@components/ButtomIcon";
import { Tab } from "@components/Tab";
import { FlatList } from "react-native";
import { useState } from "react";
import { Tag } from "@components/Tag";
import { CardMember } from "@components/CardMember";
import { ListEmpty } from "@components/ListEmpty";
import { useRoute } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type RouteParams = {
    team: string;
}


export function AddMembers(){
    const [tab, setTab] = useState<string>("Titular")
    const [members, setMembers] = useState<string[]>(["Matheus", "Giulia", ]);

    const route = useRoute();
    const { team } = route.params as RouteParams;

    const insets = useSafeAreaInsets();

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
                     />
                    <ButtomIcon icon="add-circle-outline" 
                    style= {{borderTopLeftRadius: 0, borderBottomLeftRadius: 0}}
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