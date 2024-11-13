import { styled } from "styled-components";
import { colors } from "../helpers/variables";


export const Button = styled.button`
    padding: 10px 20px;
    background: ${colors.accent};
    color: ${colors.dark};
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background: darkorange;
    }
`;