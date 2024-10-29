
import { BackButtom, BackIcon, Container, Logo } from "./styles";
import logoImg from '../../assets/logo.png';
import { useNavigation } from "@react-navigation/native";

type Props = {
    showBackButton?: boolean
}

export function Header({showBackButton = false}: Props){
    
    const navigation = useNavigation();

    function handleGoBack(){
        navigation.goBack();
    }

    return (
        <Container>
            {
                showBackButton &&
                <BackButtom onPress={handleGoBack}>
                    <BackIcon name="arrow-back-circle-sharp"  />
                </BackButtom>
            }


            <Logo source={logoImg}/>

        </Container>
    )
}