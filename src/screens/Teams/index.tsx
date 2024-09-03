import { Container, HeaderContainer } from "./style";
import { Header } from '../../components/Header'
import { Highligth } from "@components/Highligth"; 


export function Teams(){
    return (
        <Container>

            <HeaderContainer>
                
                <Header />
                
                <Highligth 
                    title="Equipes"
                    subtitle="Preparem suas equipes"
                />
            </HeaderContainer>

        </Container>
    );
}


  