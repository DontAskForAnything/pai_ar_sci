import React, { useState } from 'react';
import Modal from 'react-modal';

/**
 * Renders a task.
 *
 * @property {object} provided - Object containing draggableProps and dragHandleProps for drag and drop functionality.
 * @property {object} task - Object containing task details.
 * @property {Function} handleDelete - Function to delete a task.
 * @property {Function} handleEdit - Function to edit a task.
 * @property {string} text - Text to display for task action.
 *
 * @returns {JSX.Element} - The JSX code to render the component.
 */
const Task = ({ provided, task, handleDelete, handleEdit, text }) => {
  const [showModal, setShowModal] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [image, setImage] = useState(null);

  return (
    <>
      <div
        className='task'
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
        onClick={() => {
          setShowModal(!showModal);
        }}
        onMouseOver={() => {
          setShowPreview(true);
        }}
        onMouseLeave={() => {
          setShowPreview(false);
        }}
      >
        <div className='text'>{task.title}</div>
        <div className='actions'>
          {text === 'Done' ? (
            <i
              className='fa-solid fa-trash'
              style={{ color: '#6b0000' }}
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(task.id);
              }}
            ></i>
          ) : (
            <i
              className='fa-solid fa-pen-to-square'
              onClick={(e) => {
                e.stopPropagation();
                setShowEditModal(!showEditModal);
              }}
              style={{ color: '#525252' }}
            ></i>
          )}
        </div>
      </div>
      {showPreview && task.image && (
        <div className='imgPreview'>
          <img src={'data:image/jpeg;base64,' + task.image} alt={task.title} />
        </div>
      )}
      <Modal appElement={document.getElementById('root')} isOpen={showEditModal} className='modal'>
        <h4>Edit task</h4>
        {/* <button onClick={() => setShowInputs(!showInputs)}>
        {showInputs ? 'Hide Inputs' : 'Show Inputs'}
      </button> */}
        {/* {showInputs && ( */}
        <form
          onSubmit={() => {
            handleEdit(task.id, title, image);
          }}
        >
          <div className='inputWrapper'>
            <input
              type='text'
              value={title}
              maxLength={120}
              placeholder='Task'
              onChange={(event) => setTitle(event.target.value)}
            />
            <input
              type='file'
              accept='image/*'
              name='file-input'
              id='file-input2'
              className='file-input__input'
              onChange={(event) => setImage(event.target.files[0])}
            />

            <label className='file-input__label' htmlFor='file-input2'>
              {image ? (
                <i className='fa-solid fa-check'></i>
              ) : (
                <i className='fa-solid fa-upload'></i>
              )}
            </label>
          </div>
          <button type='submit'>Edit</button>
        </form>
        <p style={{ color: 'white' }}>* empty fields don't change task values</p>
        <div className='rightCorner'>
          <i
            className='fa-solid fa-trash'
            style={{ color: '#6b0000' }}
            onClick={(e) => {
              e.stopPropagation();
              handleDelete(task.id);
            }}
          ></i>
        </div>
        <div className='currentTask'>
          <h3>Current task:</h3>
          {task.image && (
            <img
              src={'data:image/jpeg;base64,' + task.image}
              className='imageScale'
              alt={task.title}
            />
          )}
          <p className='truncate'>{task.title}</p>
        </div>

        <button className='close_button' onClick={() => setShowEditModal(false)}>
          <i className='fa-solid fa-xmark'></i>
        </button>
      </Modal>
      <Modal
        appElement={document.getElementById('root')}
        isOpen={showModal}
        className='modalDetails modal'
      >
        {task.image && (
          <img
            src={'data:image/jpeg;base64,' + task.image}
            className='imageScale'
            alt={task.title}
          />
        )}
        <h4 style={{ overflowWrap: 'break-word', width: '70%', textAlign: 'center' }}>
          {' '}
          {task.title}
        </h4>
        <button className='close_button' onClick={() => setShowModal(false)}>
          <i className='fa-solid fa-xmark'></i>
        </button>
      </Modal>
    </>
  );
};

export default Task;
