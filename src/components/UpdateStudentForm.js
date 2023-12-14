
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateStudent } from '../redux/slices/studentSlice';

const UpdateStudentForm = ({ student, onClose }) => {
  const dispatch = useDispatch();
  const [updatedStudent, setUpdatedStudent] = useState(student);

  const handleInputChange = (e) => {
    setUpdatedStudent({ ...updatedStudent, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateStudent(updatedStudent));
    onClose(); 
  };

  return (
    <div>
      <h2>Update Student</h2>
      <form onSubmit={handleSubmit}>
        <label>ID:</label>
        <input type="text" name="id" value={updatedStudent.id} readOnly />

        <label>Name:</label>
        <input type="text" name="name" value={updatedStudent.name} onChange={handleInputChange} required />

        <label>Class:</label>
        <input type="text" name="class" value={updatedStudent.class} onChange={handleInputChange} required />

        <label>Section:</label>
        <input type="text" name="section" value={updatedStudent.section} onChange={handleInputChange} required />

        <button type="submit">Update Student</button>
      </form>
    </div>
  );
};

export default UpdateStudentForm;
