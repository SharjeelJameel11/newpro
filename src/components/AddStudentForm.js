import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addStudent } from '../redux/slices/studentSlice';

const AddStudentForm = () => {
  const dispatch = useDispatch();
  const [newStudent, setNewStudent] = useState({ id: '', name: '', class: '', section: '' });

  const handleInputChange = (e) => {
    setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addStudent(newStudent));
    setNewStudent({ id: '', name: '', class: '', section: '' });
  };

  return (
    <div>
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <label>ID:</label>
        <input type="text" name="id" value={newStudent.id} onChange={handleInputChange} required />

        <label>Name:</label>
        <input type="text" name="name" value={newStudent.name} onChange={handleInputChange} required />

        <label>Class:</label>
        <input type="text" name="class" value={newStudent.class} onChange={handleInputChange} required />

        <label>Section:</label>
        <input type="text" name="section" value={newStudent.section} onChange={handleInputChange} required />

        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudentForm;
