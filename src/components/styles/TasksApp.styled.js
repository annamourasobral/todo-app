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

    td {
        padding: 15px;
    }

    .task {
        text-align: left;
    }

    button {
        padding: 0;
        border: none;
        background-color: #FAF9F9;
    }

    /* TABLET */
    @media screen  and (min-width: 320px) {
        
        #tasks-title {
            font-size: 40px;
            width: 200px;
            margin-bottom: 30px;
        }
        
        table {
            width: 455px;
        }

        td {
            color: #555B6E;
        }

        .task {
            font-size: 20px;
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
        
        table {
            width: 340px;
        }

        .task {
            font-size: 16px;
        }
    }
`