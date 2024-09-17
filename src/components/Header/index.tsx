
import { BackButtom, BackIcon, Container, Logo } from "./styles";
import logoImg from '../../assets/logo.png';

type Props = {
    showBackButton?: boolean
}

export function Header({showBackButton = false}: Props){
    return (
        <Container>
            {
                showBackButton &&
                <BackButtom>
                    <BackIcon name="arrow-back-circle-sharp"  />
                </BackButtom>
            }


            <Logo source={logoImg}/>

        </Container>
    )
}