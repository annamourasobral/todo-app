import { StyledTodo } from "./styles/Todo.styled";
import {Edit2Outline} from '@styled-icons/evaicons-outline/Edit2Outline';
import {DeleteBin6} from '@styled-icons/remix-line/DeleteBin6';

export default function Todo({text}) {
    return (
        <StyledTodo>
            <td className="todo-item">{text}</td>
            <button className="update-btn">
                <td><Edit2Outline size="20" className='update-btn'/></td>
            </button>
            <button className="delete-btn">
                <td><DeleteBin6 size="20" className='delete-btn'/></td>
            </button>
        </StyledTodo>
    );
}