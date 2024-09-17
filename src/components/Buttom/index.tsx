import { TouchableOpacityProps } from "react-native";
import { Container, Title } from "./style";

type Props = TouchableOpacityProps &{
    title: string;
    type: 'PRIMARY' | 'SECONDARY';
}

export function Buttom({title, type , ...rest}: Props){
    return(
        <Container type={type} {...rest}>
            <Title> {title} </Title>
        </Container>
    )
}