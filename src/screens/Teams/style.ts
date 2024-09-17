import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.GRAY_100};
`;
  

export const Title = styled.Text`

    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    font-size: 40px;
`;

export const HeaderContainer = styled.View`
    background-color: ${({theme}) => theme.COLORS.PURPLE_500};
    width: 100%;
    padding-top: 54px;
    padding-bottom: 24px;
`;

export const Content = styled.View`
    flex: 1;
    padding: 24px;
`;