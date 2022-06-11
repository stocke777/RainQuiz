
import styled from 'styled-components';

export const colors = {
    transparentblue: "#0fffcca8",
    lightblue: "#896dff",
    purple: "#764ba2",
    pink: "#431c42",
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
    background-color: rgba(7, 103, 154,.3);

`;

export const StyledTitle = styled.h1`
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: ${(props) => props.color ? props.color : colors.primary};
    padding: 5px;
    margin-bottom: 20px;
`


export const StyledButton = styled.button`
    padding: 10px;
    margin: 15px 0 15px 0;
    background-color: ${(props) => props.color ? props.color : colors.pink};
    font-size: 24px;
    border: 3px solid ${colors.primary};
    border-radius: 15px;
    color: ${(props) => props.color ? props.color : colors.primary};
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
    padding: 20px;
    width: 100px;
    height: 100px;
    opacity: 0.8;
    margin: 20px 10px 20px 10px;
    background-color: ${colors.purple};
    font-size: 24px;
    border: 3px solid ${colors.primary};
    border-radius: 50%;
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
    flex-direction: row;
    justify-content: space-around;
    margin: 20px;
    width: 100%;
`

export const PlayButton = styled.button`
    background-color: #0fffcca8;
    border: none;
    color: white;
    padding: 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    border-radius: 50%;

    &:hover{
        background-color: ${colors.primary};
        color: ${colors.dark1};
        cursor: pointer;

    }
`

export const StartButton = styled.button`
    background-color: #0fffcca8;
    border: none;
    color: white;
    padding: 60px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 30px;
    font-weight: bolder;
    margin: 4px 2px;
    border-radius: 50%;
    border: 6px solid ${colors.primary};

    &:hover{
        background-color: ${colors.primary};
        color: ${colors.dark1};
        cursor: pointer;

    }
`