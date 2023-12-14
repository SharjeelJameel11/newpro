
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:3001';

export const getClassesAsync = createAsyncThunk('classes/getClasses', async () => {
  const response = await axios.get(`${API_URL}/classes`);
  return response.data;
});

export const addClassAsync = createAsyncThunk('classes/addClass', async (newClass) => {
  const res = await axios.post(`${API_URL}/classes`, newClass);
  return res.data;
});

export const updateClassAsync = createAsyncThunk('classes/updateClass', async (updatedClass) => {
  const response = await axios.put(`${API_URL}/classes/${updatedClass.id}`, updatedClass);
  return response.data;
});

export const deleteClassAsync = createAsyncThunk('classes/deleteClass', async (classId) => {
  await axios.delete(`${API_URL}/classes/${classId}`);
  return classId;
});

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
};

const classSlice = createSlice({
  name: 'classes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getClassesAsync.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getClassesAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getClassesAsync.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default classSlice.reducer;
