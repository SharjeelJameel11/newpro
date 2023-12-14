import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:3001'; 


export const getStudentsAsync = createAsyncThunk('students/getStudents', async () => {
  const response = await axios.get(`${API_URL}/students`);
  return response.data;
  
});
export const addStudent = createAsyncThunk('students/addStudent', async (newStudent) => {
    const res = await axios.post(`${API_URL}/students`, newStudent);
    return res.data;
  });
  export const updateStudent = createAsyncThunk('students/updateStudent', async (updatedStudent) => {
    const response = await axios.put(`${API_URL}/students/${updatedStudent.id}`, updatedStudent);
    return response.data;
  });
  
  export const deleteStudent = createAsyncThunk('students/deleteStudent', async (studentId) => {
    await axios.delete(`${API_URL}/students/${studentId}`);
    return studentId;
  });
  
// Initial state
const initialState = {
  data: [],
  isLoading: false,
  isError: false,
};

// Student slice
const studentSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
   
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStudentsAsync.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getStudentsAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getStudentsAsync.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});


export default studentSlice.reducer;
