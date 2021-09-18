import { combineReducers } from 'redux';
import tasks from './tasks';

// Chu y file index la file chay chinh se complile tu nhung file nho
// roi truyen vao index.js cua file cha de hien thi

const myReducer = combineReducers({
    tasks // same task: task
})
  


export default myReducer;