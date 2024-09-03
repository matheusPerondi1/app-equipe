import styled from "styled-components/native";
import MaterialIcons from "@expo/vector-icons/Ionicons"

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-left: 24;
    padding-right: 24;
`;

export const Logo = styled.Image`
    width: 65;
    height: 44;
`;

export const BackButtom = styled.View`
    flex: 1;
`;

export const BackIcon = styled(MaterialIcons).attrs(({theme}) => ({
    size: 32,
    color: theme.COLORS.GRAY_100,
}))``;