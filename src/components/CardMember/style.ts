import styled, { css } from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    height: 44px;
    ${({theme}) => css`
        background-color: ${theme.COLORS.GRAY_100};
        border-color: ${theme.COLORS.GRAY_200};
    `};

    flex-direction: row;
    border-width: 1px;
    border-radius: 8px;
    margin-bottom: 14px;
    align-items: center;
    padding-left: 12px;
`;

export const Name = styled.Text`
    ${({theme}) => css`
        color: ${theme.COLORS.GRAY_500};
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `};

    flex: 1;
`;