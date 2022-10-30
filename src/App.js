import Toggle from './components/Toggle';
import Todo from './components/Todo';
import { StyledApp } from './components/styles/StyledApp';
import { ThemeProvider } from 'styled-components';
import { useState, useEffect } from 'react';
import { darkTheme, lightTheme, GlobalStyles } from "./theme";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos")
    const initialValue = JSON.parse(saved)
    return initialValue || []
  });
  const [theme, setTheme] = useState("light");
  
  const switchTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
    
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Date.now()
      }        
    ])  
    localStorage.setItem("todos", JSON.stringify(todos));
    setInputText("");
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp className="App">
        <div className='bg'>
          <Toggle switchTheme={switchTheme} />
          <main className='app-wrapper'>
            <div className='input-side'>
              <div id="title-wrapper">
                <p id="to-do">TO DO</p>
                <p id="app">app</p>
              </div>
              <div id="subtitle-wrapper">
                <p id="subtitle">your life easier and organized, because the chores shouldn't prevent you to be<span id="happy">happy</span></p>
              </div>
              <div id="input-wrapper">
                <input type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)} />
                <button id='add-task'
                  onClick={submitTodoHandler}>ADD TASK</button>
              </div>
            </div>
            <div className='tasks-side'>
              <div className='table'>
                <p id="tasks-title">Tasks</p>

                {todos.map((todo) => (
                  <Todo todo={todo}
                    text={todo.text}
                    key={todo.id}
                    todos={todos}
                    setTodos={setTodos} />
                ))}

              </div>
            </div>
          </main>
        </div>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
