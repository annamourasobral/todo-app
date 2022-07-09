import { StyledTodo } from "./styles/Todo.styled";
import {Edit2Outline} from '@styled-icons/evaicons-outline/Edit2Outline';
import {DeleteBin6} from '@styled-icons/remix-line/DeleteBin6';

export default function Todo({text, todo, todos, setTodos}) {
    const deleteHandler = () => {
        setTodos(todos.filter(item => item.id !== todo.id));
    }    
    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }
    return (
        <StyledTodo>
            <p className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</p>
            <button className="update-btn" >
                <Edit2Outline size="24" className='update-btn' onClick={completeHandler}/>
            </button>
            <button className="delete-btn">
                <DeleteBin6 size="24" className='delete-btn' onClick={deleteHandler} />
            </button>
        </StyledTodo>
    );
}