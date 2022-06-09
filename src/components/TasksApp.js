import { StyledTasksApp } from './styles/TasksApp.styled';
import {Edit2Outline} from '@styled-icons/evaicons-outline/Edit2Outline';
import {DeleteBin6} from '@styled-icons/remix-line/DeleteBin6'

export default function TasksApp() {    
  return (
      <StyledTasksApp>
        
        <table>
            <caption id="tasks-title">Tasks</caption>
            <tbody>              
              <tr>
                <td className="task">zoom witd Niels at 3pm</td>
                <td><Edit2Outline size="20" className='update-btn'/></td>
                <td><DeleteBin6 size="20" className='delete-btn'/></td>
              </tr>
              <tr>
                  <td className="task">pick up kids at 5pm</td>
                  <td><Edit2Outline size="20" className='update-btn'/></td>
                  <td><DeleteBin6 size="20" className='delete-btn'/></td>
              </tr>
              <tr>
                  <td className="task">dinner witd Jonas at 8pm</td>
                  <td><Edit2Outline size="20" className='update-btn'/></td>
                  <td><DeleteBin6 size="20" className='delete-btn'/></td>
              </tr>
            </tbody>
        </table>
      </StyledTasksApp>
  )
}