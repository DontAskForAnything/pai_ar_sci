import { Droppable, Draggable } from 'react-beautiful-dnd';
import Task from './Task';

/**
 * Renders a list of tasks using react-beautiful-dnd.
 *
 * @param {Object} props - The component props.
 * @param {string} props.droppableId - The ID of the droppable area.
 * @param {Array} props.array - An array of task objects.
 * @param {Function} props.handleEdit - A function to handle the edit action.
 * @param {Function} props.handleDelete - A function to handle the delete action.
 * @param {string} props.text - The text to display as the main task.
 *
 * @returns {JSX.Element} - A JSX element representing the tasks list.
 */
const TasksList = ({ droppableId, array, handleEdit, handleDelete, text }) => {
  return (
    <div className='tasksList'>
      <div className='task main'>{text}</div>
      <Droppable droppableId={droppableId}>
        {(provided) => (
          <div className='droppable' {...provided.droppableProps} ref={provided.innerRef}>
            {array.map((task, index) => (
              <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                {(provided) => (
                  <Task
                    provided={provided}
                    task={task}
                    text={text}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                  />
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TasksList;
