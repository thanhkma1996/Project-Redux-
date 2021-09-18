# Project ToDoAPP combinae with Redux
- Tổng kết một số kiến thức đã học

Hiển thị Danh sách = Redux
B1: Cài đặt Redux: npm install redux react-redux --save.
B2: Tạo ra thành phần cần thiết tại src (Reducers, Constants, Actions..
import { createStore } tại src/index.js
tạo Reducer tại Reducers/index.js (myReducer=combineReducer)
import Provider tại src/index.js và store
B3: Hiển thị
Tại Constants tạo ActionTypes.js export const (viết hoa)
Tại Actions tạo index.js export ra các type (nhớ import ActionTypes)
Tại Reducers tạo thêm 1 file tasks.js (var initialState, myReducer - swich case)
B4: Sử dụng
Từ Tasklist gọi lên store để lấy dữ liệu:
import { connect } from ‘react-redux’
const mapToStateProps
export default connect(mapToStateProps, …)(...);
Tại Reducers/tasks.js, lưu trên localStorage

💻 HAPPY CODING!!! ❤️
