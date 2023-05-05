import React, { useState, useEffect } from 'react';

/**
 * Renders a form to add a task.
 *
 * @property {string} title - The title of the task.
 * @property {function} setTitle - A function to set the title of the task.
 * @property {Object} image - The image of the task.
 * @property {function} setImage - A function to set the image of the task.
 * @property {function} handleSubmit - A function to handle the form submission.
 *
 * @returns {JSX.Element} - The JSX code to render the component.
 */

const AddTask = ({ title, setTitle, image, setImage, handleSubmit }) => {
  const [showInputs, setShowInputs] = useState(true);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 600) {
        setShowInputs(true);
      }
    }
    // Add event listener to check for screen size changes
    window.addEventListener('resize', handleResize);
    // Cleanup function to remove event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div id='addTaskFields' style={{ display: !showInputs ? 'none' : 'flex' }}>
        {showInputs && (
          <form onSubmit={handleSubmit}>
            <h2>Add task</h2>
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
                id='file-input'
                className='file-input__input'
                onChange={(event) => setImage(event.target.files[0])}
              />

              <label className='file-input__label' htmlFor='file-input'>
                {image ? (
                  <i className='fa-solid fa-check'></i>
                ) : (
                  <i className='fa-solid fa-upload'></i>
                )}
              </label>
            </div>
            <button type='submit'>Add</button>
          </form>
        )}
      </div>
      <div className='actionButtonMobile' onClick={() => setShowInputs(!showInputs)}>
        {showInputs ? (
          <i className='fa-solid fa-eye'></i>
        ) : (
          <i className='fa-solid fa-eye-slash'></i>
        )}
      </div>
    </>
  );
};

export default AddTask;
