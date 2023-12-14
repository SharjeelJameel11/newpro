import React from 'react';
import StudentList from './components/StudentList';
import AddStudentForm from './components/AddStudentForm';
import ExportButton from './components/ExportButton';
import SectionList from './components/SectionList';
import AddSectionForm from './components/AddSectionForm';
import AddClassForm from './components/AddClassForm';
import ClassList from './components/ClassList';

const App = () => {
  return (
    <div>
      <h1>Student Management System</h1>
      <AddStudentForm />
      <StudentList />
      <AddSectionForm/>
      <SectionList/>
      <AddClassForm/>
    <ClassList/>
      <ExportButton />
    
    </div>
  );
};

export default App;
