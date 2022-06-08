import { StyledMainApp } from './styles/MainApp.styled';

export default function MainApp({setInputText}) {
    const inputTextHandler = (e) => {
        console.log(e.target.value)
        setInputText(e.target.value)
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
                <input type="text" onChange={inputTextHandler}/>
                <button id='add-task'>ADD TASK</button>
            </div>           
        </StyledMainApp>
    );
}