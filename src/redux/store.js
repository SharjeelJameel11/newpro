import { configureStore } from '@reduxjs/toolkit';
import studentReducer from './slices/studentSlice';
import sectionReducer from './slices/sectionSlice'; 
import classReducer from './slices/classSlice'
import thunk from 'redux-thunk';

const store = configureStore({
  reducer: {
    students: studentReducer,
    sections: sectionReducer,
    classes: classReducer, 
  }
 
});

export default store;
