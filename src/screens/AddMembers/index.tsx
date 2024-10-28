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




export function AddMembers(){
    const [tab, setTab] = useState("Titular")


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

                <CardMember name="Matheus" onRemove={() => console.log("REMOVE")}/>
                
                
                
                <Buttom  title="Deletar equipe" type="SECONDARY"/>
            </Content>

        </Container>
    );
}