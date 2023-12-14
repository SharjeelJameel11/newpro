import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSectionAsync } from '../redux/slices/sectionSlice';

const AddSectionForm = () => {
  const dispatch = useDispatch();
  const [newSection, setNewSection] = useState({ name: '' });

  const handleInputChange = (e) => {
    setNewSection({ ...newSection, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addSectionAsync(newSection));
    setNewSection({ name: '' });
  };

  return (
    <div>
      <h2>Add Section</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={newSection.name} onChange={handleInputChange} required />

        <button type="submit">Add Section</button>
      </form>
    </div>
  );
};

export default AddSectionForm;
