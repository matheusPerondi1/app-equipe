import theme from "@theme/index";
import styled from "styled-components/native";


export const Container = styled.TextInput`
    flex: 1;
    height: 54px;
    font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
    border-radius: 8px;
    border: 1px solid;
    border-color: ${({theme}) => theme.COLORS.GRAY_300};
    background-color: ${({theme}) => theme.COLORS.GRAY_100}; 
    padding: 16px
`;