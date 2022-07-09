import styled from "styled-components";

export const StyledTasksApp = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    #tasks-title {
    font-size: 40px;
    font-weight: bold;
    color: #89B0AE;
    border-bottom: 1px solid #89B0AE;
    width: 334px;
    text-align: left;
    padding-bottom: 10px;
    }

    .todo-item {
        padding: 15px;
        font-size: 24px;
        color: ${props => props.theme.text}
    }

    button {
        padding: 0;
        border: none;
        background-color: ${props => props.theme.secondBg};
        color: ${props => props.theme.text};        
    }

    /* TABLET */
    @media screen  and (min-width: 320px) {
        
        #tasks-title {
            font-size: 40px;
            width: 200px;
            margin-bottom: 30px;
        }
        
        .table {
            width: 455px;
        }
    }

    /* MOBILE */
    @media screen  and (max-width: 600px) {
        justify-content: left;
        
        #tasks-title {
            font-size: 25px;
            width: 145px;
            margin-bottom: 20px;
        }
        
        .table {
            width: 340px;
        }
    }
`