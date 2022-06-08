import './App.css';
import MainApp from './components/MainApp';
import styled from 'styled-components';
import TasksApp from './components/TasksApp';
import Toggle from './components/Toggle';
import { useState } from 'react';

const Background = styled.div `
  width: 100vw;
  height: 100vh;
  position: relative; 
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FFF;
`;
const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
  width: 1105px;
  height: 713px;
  background-color: #FAF9F9;
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
  return (
    <div className="App">
      <Background>
        <Toggle />
        <Container>
          <MainApp 
          inputText={inputText}
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos}/>
          <TasksApp />
        </Container>
      </Background>
    </div>
  );
}

export default App;
