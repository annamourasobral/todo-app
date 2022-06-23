import styled from "styled-components";

export const StyledToggle = styled.label `
    position: fixed;
    display: inline-block;
    width: 115px;
    height: 35px;
    top: 30px;
    right: 30px;
    z-index: 999;

    input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    span {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #89B0AE;
    }

    span::before {
        position: absolute;
        content: "";
        height: 26px;
        width: 57px;
        left: 4px;
        bottom:4px;
        background-color: #FFF;
        transition: 0.5s;
    }

    input:checked + span::before {
        transform: translateX(50px);
        background-color: #555B6E;
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
        
        span::before {
         width: 40px;
        }

        input:checked + span::before {
        transform: translateX(42px);
        }

    }
`