import { StyledMainApp } from './styles/MainApp.styled';

export default function MainApp({inputText, setInputText, todos, setTodos}) {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, 
            completed: false, 
            id:Math.round(Math.random()*1000)},])
        setInputText("");
    }
    return (        
        <StyledMainApp>
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
                onChange={inputTextHandler}/>
                <button id='add-task' 
                onClick={submitTodoHandler}>ADD TASK</button>
            </div>           
        </StyledMainApp>
    );
}