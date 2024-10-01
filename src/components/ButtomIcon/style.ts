import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons"

export type ButtomIconTypeStyleProps = 'PRIMARY' | 'SECONDARY'

type Props = {
    type: ButtomIconTypeStyleProps;
}

export const Container = styled(TouchableOpacity)<Props>`
    width: 54px;
    height: 54px;
    justify-content: center;
    align-items: center;
    background-color: ${({theme, type}) => type === 'PRIMARY' ? theme.COLORS.GREEN_500 : theme.COLORS.RED};
    border-radius: 8px;
`;

export const Icon = styled(MaterialIcons).attrs(({theme}) => ({
    size: 24,
    color: theme.COLORS.GRAY_100,
}))``;