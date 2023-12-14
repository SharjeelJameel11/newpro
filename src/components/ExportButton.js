import React from 'react';
import { useSelector } from 'react-redux';
import * as XLSX from 'xlsx';

const ExportButton = () => {
  const students = useSelector((state) => state.students.data);
  const classes = useSelector((state) => state.classes.data);
  const sections = useSelector((state) => state.sections.data);

  const exportToExcel = () => {
    const studentsWorksheet = XLSX.utils.json_to_sheet(students);
    const classesWorksheet = XLSX.utils.json_to_sheet(classes);
    const sectionsWorksheet = XLSX.utils.json_to_sheet(sections);

    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, studentsWorksheet, 'Students');
    XLSX.utils.book_append_sheet(workbook, classesWorksheet, 'Classes');
    XLSX.utils.book_append_sheet(workbook, sectionsWorksheet, 'Sections');

    XLSX.writeFile(workbook, 'data.xlsx');
  };

  return <button onClick={exportToExcel}>Export to Excel</button>;
};

export default ExportButton;
