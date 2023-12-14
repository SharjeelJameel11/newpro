import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getClassesAsync, deleteClassAsync } from '../redux/slices/classSlice';
import UpdateClassForm from './UpdateClassForm';

const ClassList = () => {
  const dispatch = useDispatch();
  const { data: classes, isLoading, isError } = useSelector((state) => state.classes);
  const [selectedClass, setSelectedClass] = useState(null);

  useEffect(() => {
    dispatch(getClassesAsync());
  }, [dispatch]);

  const handleUpdateClick = (classItem) => {
    setSelectedClass(classItem);
  };

  const handleDeleteClick = (classId) => {
    dispatch(deleteClassAsync(classId));
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading classes.</p>;
  }

  return (
    <div>
      <h2>Class List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((classItem) => (
            <tr key={classItem.id}>
              <td>{classItem.id}</td>
              <td>{classItem.name}</td>
              <td>{classItem.description}</td>
              <td>
                <button onClick={() => handleUpdateClick(classItem)}>Update</button>
                <button onClick={() => handleDeleteClick(classItem.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedClass && (
        <UpdateClassForm classItem={selectedClass} onClose={() => setSelectedClass(null)} />
      )}
    </div>
  );
};

export default ClassList;
