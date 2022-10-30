import styled from "styled-components";

export const StyledApp = styled.div`

.bg {
    width: 100vw;
  height: 100vh;
  position: relative; 
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.firstBg};
}

.app-wrapper {
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
    width: 1105px;
    height: 713px;
    background-color: ${props => props.theme.secondBg};
    font-family: 'Inter', sans-serif;
    display: flex;
}  
  /* TABLET */
@media screen and (max-width: 992px) {
    width: 588px;
    height: 858px;
    flex-direction: column;
}

/* MOBILE */
@media screen  and (max-width: 600px) {
    width: 100vw;
    height: 100vh;
    flex-direction: column;
}

.input-side {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

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
@media screen and(max-width: 992px) {
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
@media screen and(max-width: 600px) {
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

 .tasks-side {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

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
    padding: 10px;
    font-size: 24px;
    color: ${props => props.theme.text};
    margin: 0;
}

button {
    padding: 0;
    border: none;
    background-color: ${props => props.theme.secondBg};
    color: ${props => props.theme.text};
}

/* TABLET */
@media screen and (max-width: 992px) {

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
@media screen and (max-width: 600px) {
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