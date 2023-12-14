import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStudentsAsync, deleteStudent } from '../redux/slices/studentSlice';
import UpdateStudentForm from './UpdateStudentForm';

const StudentList = () => {
  const dispatch = useDispatch();
  const { data: students, isLoading, isError } = useSelector((state) => state.students);
  const [showUpdateForm, setShowUpdateForm] = useState(null); // Student ID for the form to show

  useEffect(() => {
    dispatch(getStudentsAsync());
  }, [dispatch]);

  const handleDelete = (studentId) => {
    dispatch(deleteStudent(studentId));
  };

  const handleUpdate = (studentId) => {
    setShowUpdateForm(studentId);
  };

  const handleCloseUpdateForm = () => {
    setShowUpdateForm(null);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading students.</p>;
  }

  return (
    <div>
      <h2>Student List</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Class</th>
            <th>Section</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.class}</td>
              <td>{student.section}</td>
              <td>
                <button onClick={() => handleUpdate(student.id)}>Update</button>
                <button onClick={() => handleDelete(student.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showUpdateForm && (
        <UpdateStudentForm student={students.find((s) => s.id === showUpdateForm)} onClose={handleCloseUpdateForm} />
      )}
    </div>
  );
};

export default StudentList;
