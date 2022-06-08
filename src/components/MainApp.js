import { StyledMainApp } from "./styles/MainApp.styled";

export default function MainApp() {
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
                <input type="text" />
                <button id='add-task'>ADD TASK</button>
            </div>           
        </StyledMainApp>
    );
}