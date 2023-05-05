import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DragDropContext } from 'react-beautiful-dnd';
import AddTask from './components/AddTask';
import TasksList from './components/TasksList';
import './styles/text.css';
import './styles/main.css';
import './styles/TasksList.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [doneTask, setDoneTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch all tasks from the server on component mount
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_HOST_URL}:${process.env.REACT_APP_SERVER_PORT}/api/tasks`)
      .then((res) => {
        setTasks(
          res.data.filter((el) => el.completed == false).sort((a, b) => a.position - b.position), // eslint-disable-line
        );
        setDoneTasks(
          res.data.filter((el) => el.completed == true).sort((a, b) => a.position - b.position), // eslint-disable-line
        );
        setError(null);
      })
      .catch((e) => {
        setError('There was an error while connecting to the backend!');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Show loading message
  if (loading) {
    return (
      <div
        id='container'
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <h1>loading...</h1>
      </div>
    );
  }

  if (error) {
    // Show error message if there was an error fetching the data from the server
    return (
      <div
        id='container'
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <h1 style={{ color: 'red' }}>{error}</h1>
      </div>
    );
  }

  // Handle form submission to create a new task
  const handleSubmit = (event) => {
    event.preventDefault();

    // Create FormData object to send the image file along with the task title
    const formData = new FormData();
    formData.append('title', title);
    formData.append('image', image);
    formData.append('position', tasks.length);

    axios
      .post(
        `${process.env.REACT_APP_HOST_URL}:${process.env.REACT_APP_SERVER_PORT}/api/tasks`,
        formData,
      )
      .then((res) => {
        // Add the new task to the tasks array
        setTasks([...tasks, res.data]);
        setTitle('');
        setImage(null);
      })
      .catch((error) => {
        if (error.response.data.message) {
          alert(error.response.data.message);
        } else {
          alert('ups... something went wrong!');
        }
      });
  };

  // Handle completion status change for a task
  const handleComplete = (id, completed) => {
    axios
      .put(
        `${process.env.REACT_APP_HOST_URL}:${process.env.REACT_APP_SERVER_PORT}/api/tasks/${id}`,
        { completed },
      )
      .catch((error) => {
        if (error.response.data.message) {
          alert(error.response.data.message);
        } else {
          alert('There was an error!', error.message);
        }
      });
  };

  // Handle position change for a task
  const handlePosition = (id, position) => {
    axios
      .put(
        `${process.env.REACT_APP_HOST_URL}:${process.env.REACT_APP_SERVER_PORT}/api/tasks/${id}/position`,
        {
          position,
        },
      )
      .catch((error) => {
        if (error.response.data.message) {
          alert(error.response.data.message);
        } else {
          alert('There was an error!', error.message);
        }
      });
  };

  // Handle task deletion
  const handleDelete = (id) => {
    axios
      .delete(
        `${process.env.REACT_APP_HOST_URL}:${process.env.REACT_APP_SERVER_PORT}/api/tasks/${id}`,
      )
      .then(() => {
        setDoneTasks(doneTask.filter((task) => task.id !== id));
        setTasks(tasks.filter((task) => task.id !== id));
      })
      .catch((error) => {
        if (error.response.data.message) {
          alert(error.response.data.message);
        } else {
          alert('There was an error!', error.message);
        }
      });
  };

  // Handle task editing
  const handleEdit = (id, title, image, completed = false) => {
    // Create FormData object to send the updated title and image (if any)
    const formData = new FormData();
    formData.append('title', title);
    formData.append('completed', completed);
    if (image) {
      formData.append('image', image);
    }

    axios
      .put(
        `${process.env.REACT_APP_HOST_URL}:${process.env.REACT_APP_SERVER_PORT}/api/tasks/${id}/edit`,
        formData,
      )
      .then(() => {
        setTasks(
          tasks.map((task) => {
            if (task.id === id) {
              return { ...task, title, completed };
            } else {
              return task;
            }
          }),
        );
      })
      .catch((error) => {
        if (error.response.status === 400) {
          console.log(error.response.data.message);
        } else {
          console.error('There was an error!', error);
        }
      });
  };

  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const sourceIndex = result.source.index;
    const destinationIndex = result.destination.index;

    if (result.source.droppableId === 'tasks') {
      const updatedTasks = [...tasks];
      const [removedTask] = updatedTasks.splice(sourceIndex, 1);
      tasks.forEach((task, index) => {
        if (index >= destinationIndex && task !== removedTask) {
          handlePosition(task.id, index + 1);
        }
      });

      handlePosition(removedTask.id, destinationIndex);
      if (result.destination.droppableId === 'tasks') {
        updatedTasks.splice(destinationIndex, 0, removedTask);
        setTasks(updatedTasks);
      } else {
        handleComplete(removedTask.id, true);
        const updatedDoneTasks = [...doneTask];
        updatedDoneTasks.splice(destinationIndex, 0, removedTask);
        setTasks(updatedTasks);
        setDoneTasks(updatedDoneTasks);
      }
    } else if (result.source.droppableId === 'done') {
      const updatedDoneTasks = [...doneTask];
      const [removedTask] = updatedDoneTasks.splice(sourceIndex, 1);
      doneTask.forEach((task, index) => {
        if (index >= destinationIndex && task !== removedTask) {
          handlePosition(task.id, index + 1);
        }
      });
      handlePosition(removedTask.id, destinationIndex);

      if (result.destination.droppableId === 'done') {
        updatedDoneTasks.splice(destinationIndex, 0, removedTask);
        setDoneTasks(updatedDoneTasks);
      } else {
        handleComplete(removedTask.id, false);
        const updatedTasks = [...tasks];
        updatedTasks.splice(destinationIndex, 0, removedTask);
        setTasks(updatedTasks);
        setDoneTasks(updatedDoneTasks);
      }
    }
  };

  return (
    <div id='container'>
      <h1>To Do App</h1>
      <div id='dragContainer'>
        <DragDropContext onDragEnd={handleDragEnd}>
          <TasksList
            droppableId='tasks'
            text='Tasks'
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            array={tasks}
          />
          <TasksList
            droppableId='done'
            text='Done'
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            array={doneTask}
          />
        </DragDropContext>
      </div>
      <AddTask
        title={title}
        setTitle={setTitle}
        image={image}
        setImage={setImage}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
