import styled from "styled-components/native";
import { ButtomIconTypeStyleProps, Container, Icon } from "./style";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"

type Props = TouchableOpacityProps &{
    icon: keyof typeof MaterialIcons.glyphMap
    type?: ButtomIconTypeStyleProps;
}

export function ButtomIcon({ icon ,type = 'PRIMARY',...rest}: Props){
    return(
        <Container type={type} {...rest}>
            <Icon name={icon} />
        </Container>
    )
}

