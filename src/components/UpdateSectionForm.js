import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateSectionAsync } from '../redux/slices/sectionSlice';

const UpdateSectionForm = ({ section }) => {
  const dispatch = useDispatch();
  const [updatedSection, setUpdatedSection] = useState({ id: section.id, name: section.name });

  const handleInputChange = (e) => {
    setUpdatedSection({ ...updatedSection, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSectionAsync(updatedSection));
  };

  return (
    <div>
      <h2>Update Section</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={updatedSection.name} onChange={handleInputChange} required />

        <button type="submit">Update Section</button>
      </form>
    </div>
  );
};

export default UpdateSectionForm;
