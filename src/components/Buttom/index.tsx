import { TouchableOpacityProps } from "react-native";
import { ButtomTypeStyleProps, Container, Title } from "./style";

type Props = TouchableOpacityProps &{
    title: string;
    type?: ButtomTypeStyleProps
}

export function Buttom({title, type = 'PRIMARY' , ...rest}: Props){
    return(
        <Container type={type} {...rest}>
            <Title> {title} </Title>
        </Container>
    )
}