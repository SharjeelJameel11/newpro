import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addClassAsync } from '../redux/slices/classSlice';

const AddClassForm = () => {
  const dispatch = useDispatch();
  const [newClass, setNewClass] = useState({ name: '', description: '' });

  const handleInputChange = (e) => {
    setNewClass({ ...newClass, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addClassAsync(newClass));
    setNewClass({ name: '', description: '' });
  };

  return (
    <div>
      <h2>Add Class</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={newClass.name} onChange={handleInputChange} required />

        <label>Description:</label>
        <input type="text" name="description" value={newClass.description} onChange={handleInputChange} required />

        <button type="submit">Add Class</button>
      </form>
    </div>
  );
};

export default AddClassForm;
