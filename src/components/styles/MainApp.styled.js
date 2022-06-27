import styled from "styled-components";

export const StyledMainApp = styled.div `
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    #title-wrapper {
        display: flex;
        align-items: center;
    }

    #to-do {
        font-size: 70px;
        font-weight: bolder;
        color: #89B0AE;
        line-height: 20px;
    }

    #app {
        margin-top: 60px;
        font-size: 30px;
        font-weight: bolder;  
        color: ${props => props.theme.text};
    }

    #subtitle-wrapper {
        font-size: 24px;
        font-weight: 300;
        width: 275px;
        text-align: initial;
        color: ${props => props.theme.text};
    }

    #happy {
        font-weight: bold;
        color: #89B0AE;
        padding-left: 8px;
    }

    #input-wrapper {
        margin-top: 40px;
        display: inline-flex;
    }

    input {
        width: 215px;
        height: 43px;
        background-color: ${props => props.theme.inputBg};
        border: 2px solid #89B0AE;
    }

    #add-task {
        background-color: #89B0AE;
        border: 2px solid #89B0AE;
        color: ${props => props.theme.inputBg};
        font-size: 16px;
        font-weight: bolder;
        justify-content: center;
        padding: 5px 10px;
        margin-left: 5px;
    } 

    /* TABLET */
    @media screen and (max-width: 992px) {
        #to-do {
            font-size: 60px;
        }

        #app {
            font-size: 25px;
        }

        #subtitle-wrapper {
            font-size: 20px;
            width: 240px;
            text-align: center;
        }
    }

    /* MOBILE */
    @media screen  and (max-width: 600px) {    
        #to-do {
            font-size: 40px;
        }

        #app {
            font-size: 20px;
        }

        #subtitle-wrapper {
            font-size: 16px;
            width: 240px;
        }

        #input-wrapper {
            margin-top: 20px;
        }

        input {
            height: 31px;
        }

        #add-task {
            font-size: 10px;
        }
    }
    
`