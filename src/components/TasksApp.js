import { StyledTasksApp } from './styles/TasksApp.styled';
import Todo from './Todo'

export default function TasksApp({ todos, setTodos }) {
  return (
    <StyledTasksApp>
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
    </StyledTasksApp>
  )
}