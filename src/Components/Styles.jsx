
import styled from 'styled-components';

export const colors = {
    lightblue: "#896dff",
    purple: "purple",
    pink: "#d888d4",
    primary: "#fff",
    theme: "#BE185D",
    light1: "#F3F4F6",
    light2: "#E5E7EB",
    dark1: "#1F2937",
    dark2: "#4B5563",
    dark3: "#9CA3AF",
    red: "#DC2626",
    dark4: "#cecfd1"
}

export const StyledContainer = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
    border-radius: 15px;
    background-color: ${colors.lightblue};

`;

export const StyledTitle = styled.h1`
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: ${(props) => props.color? props.color: colors.primary};
    padding: 5px;
    margin-bottom: 20px;
`


export const StyledButton = styled.button`
    padding: 10px;
    width: 100%;
    margin: 15px 0;
    background-color: ${(props) => props.color? props.color: colors.pink};
    font-size: 24px;
    border: 3px solid ${colors.primary};
    border-radius: 15px;
    color: ${colors.primary};
    text-decoration: none;
    text-align: center;
    transition: ease-in-out 0.3s;
    outline: 0;

    &:hover{
        background-color: ${colors.primary};
        color: ${colors.theme};
        cursor: pointer;

    }
`;

export const StyledNextButton = styled.button`
    padding: 10px;
    width: 100%;
    margin: 20px 0 40px 0;
    background-color: ${colors.purple};
    font-size: 24px;
    border: 3px solid ${colors.primary};
    border-radius: 15px;
    color: ${colors.primary};
    text-decoration: none;
    text-align: center;
    transition: ease-in-out 0.3s;
    outline: 0;

    &:hover{
        background-color: ${colors.dark1};
        color: ${colors.primary};
        cursor: pointer;

    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 25px;
`