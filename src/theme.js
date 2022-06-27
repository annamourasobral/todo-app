import {createGlobalStyle} from "styled-components"

export const darkTheme = {
    firstBg: "#555B6E",
    secondBg: "#333642",
    text: "#FAF9F9",      
    inputBg: "#333642",
}
  
export const lightTheme = {
    firstBg: "#FFF", 
    secondBg: "#FAF9F9",
    text: "#555B6E",
    inputBg: "#FAF9F9",
}

export const GlobalStyles = createGlobalStyle `
    .bg {
        background-color: ${props => props.theme.firstBg};
    }

    .app {
        background-color: ${props => props.theme.secondBg};
        color: ${props => props.theme.text};
    }

    .input input {
        background-color: ${props => props.theme.inputBg};
    }
`