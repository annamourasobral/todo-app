import MainApp from './components/MainApp';
import TasksApp from './components/TasksApp';
import Toggle from './components/Toggle';
import styled, { ThemeProvider } from 'styled-components';
import { useState, useEffect } from 'react';
import { darkTheme, lightTheme, GlobalStyles } from "./theme";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative; 
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.firstBg};
`;

const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
  width: 1105px;
  height: 713px;
  background-color: ${props => props.theme.secondBg};
  font-family: 'Inter', sans-serif;
  display: flex;
  
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
`;

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [theme, setTheme] = useState("light");

  const switchTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>  
      <GlobalStyles />
      <div className="App">
        <Background className='bg'>
          <Toggle switchTheme={switchTheme}/>
          <Container className='app'>
            <MainApp
              inputText={inputText}
              setInputText={setInputText}
              todos={todos}
              setTodos={setTodos} 
              className='input'/>
            <TasksApp
              todos={todos}
              setTodos={setTodos} />
          </Container>
        </Background>
      </div>
    </ThemeProvider>  
  );
}

export default App;
