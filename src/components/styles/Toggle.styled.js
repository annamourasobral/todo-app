import styled from "styled-components";

export const StyledToggle = styled.div `
    width: 115px;
    height: 35px;
    border: 2px solid #89B0AE;
    background-color: #FFF;
    position: fixed;
    top: 30px;
    right: 30px;
    z-index: 999;
    display: flex;
    justify-content: flex-end;

    #theme-btn {
        padding: 10px 5px;
        background-color: #89B0AE;
        border: 2px solid #89B0AE;
        font-size: 10px;
        font-weight: bolder;
        color: #FFF;
    }

    /* TABLET */
    @media screen and (max-width: 992px) {
        top: 20px;
        right: 20px;
        align-items: center;
    }

    /* MOBILE */
    @media screen  and (max-width: 600px) {
        width: 90px;
        top: 15px;
        right: 15px;
        background-color: #FAF9F9;

        #theme-btn {
            padding: 10px 2px;
            color: #FAF9F9;
        }
    }
`