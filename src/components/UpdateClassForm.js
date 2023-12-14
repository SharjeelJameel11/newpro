
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateClassAsync } from '../redux/slices/classSlice';

const UpdateClassForm = ({ classItem, onClose }) => {
  const dispatch = useDispatch();
  const [updatedClass, setUpdatedClass] = useState({ ...classItem });

  const handleInputChange = (e) => {
    setUpdatedClass({ ...updatedClass, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateClassAsync(updatedClass));
    onClose();
  };

  return (
    <div>
      <h2>Update Class</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={updatedClass.name} onChange={handleInputChange} required />

        <label>Description:</label>
        <input type="text" name="description" value={updatedClass.description} onChange={handleInputChange} required />

        <button type="submit">Update Class</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default UpdateClassForm;
