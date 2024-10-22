import { TouchableOpacity, TouchableOpacityProps} from "react-native";
import styled, { css } from "styled-components/native";

export type TabStyleProps = {
    isActive?: boolean
}

export const Container = styled(TouchableOpacity)<TabStyleProps>` 
    
    ${({theme, isActive}) => isActive && css`
        border-bottom-width: 1px;
        border-color: ${({theme}) => theme.COLORS.PURPLE_500};
    `}

    padding: 8px 12px;
    margin-right: 12px;
`;

export const Title = styled.Text`
    text-transform: capitalize;

    ${({theme}) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLORS.GRAY_500};
    `}
`;

