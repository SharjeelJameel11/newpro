import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:3001'; 

export const getSectionsAsync = createAsyncThunk('sections/getSections', async () => {
  const response = await axios.get(`${API_URL}/sections`);
  return response.data;
});

export const addSectionAsync = createAsyncThunk('sections/addSection', async (newSection) => {
  const res = await axios.post(`${API_URL}/sections`, newSection);
  return res.data;
});

export const updateSectionAsync = createAsyncThunk('sections/updateSection', async (updatedSection) => {
  const response = await axios.put(`${API_URL}/sections/${updatedSection.id}`, updatedSection);
  return response.data;
});

export const deleteSectionAsync = createAsyncThunk('sections/deleteSection', async (sectionId) => {
  await axios.delete(`${API_URL}/sections/${sectionId}`);
  return sectionId;
});

// Initial state
const initialState = {
  data: [],
  isLoading: false,
  isError: false,
};

// Section slice
const sectionSlice = createSlice({
  name: 'sections',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSectionsAsync.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getSectionsAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getSectionsAsync.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default sectionSlice.reducer;
