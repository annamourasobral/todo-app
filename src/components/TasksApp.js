import { StyledTasksApp } from './styles/TasksApp.styled';
import Todo from './Todo'
import { Edit2Outline } from '@styled-icons/evaicons-outline/Edit2Outline';
import { DeleteBin6 } from '@styled-icons/remix-line/DeleteBin6';

export default function TasksApp({ todos }) {
  return (
    <StyledTasksApp>
      <table>
        <caption id="tasks-title">Tasks</caption>
        <tr>
          <td className="task">zoom witd Niels at 3pm</td>
          <button>
            <td><Edit2Outline size="20" className='update-btn' /></td>
          </button>
          <button>
            <td><DeleteBin6 size="20" className='delete-btn' /></td>
          </button>
        </tr>
        <tr>
          <td className="task">pick up kids at 5pm</td>
          <button>
            <td><Edit2Outline size="20" className='update-btn' /></td>
          </button>
          <button>
            <td><DeleteBin6 size="20" className='delete-btn' /></td>
          </button>
        </tr>
        <tr>
          <td className="task">dinner witd Jonas at 8pm</td>
          <button>
            <td><Edit2Outline size="20" className='update-btn' /></td>
          </button>
          <button>
            <td><DeleteBin6 size="20" className='delete-btn' /></td>
          </button>
        </tr>
        {todos.map((todo) => (
          <Todo text={todo.text} />
        ))}
      </table>
    </StyledTasksApp>
  )
}