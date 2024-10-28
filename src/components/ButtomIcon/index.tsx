import styled from "styled-components/native";
import { ButtomIconTypeStyleProps, ButtonIconBorderRadiusStyleProps, ButtonIconSizeStyleProps, Container, Icon } from "./style";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"

type Props = TouchableOpacityProps &{
    icon: keyof typeof MaterialIcons.glyphMap
    type?: ButtomIconTypeStyleProps;
    size?: ButtonIconSizeStyleProps;
    borderRadius?: ButtonIconBorderRadiusStyleProps;
}

export function ButtomIcon({ icon ,type = 'PRIMARY', size = 'MD', borderRadius = 'RIGHT', ...rest}: Props){
    return(
        <Container 
        borderRadius="RIGHT"
        size={size} 
        type={type} 
        {...rest}>
            <Icon name={icon} />
        </Container>
    )
}

