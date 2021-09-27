# Project ToDoAPP combinae with Redux
- Bài 1 Tổng kết một số kiến thức đã học
Cach hoat dong cua Redux : https://viblo.asia/p/redux-co-ban-m68Z00JdZkG
action -> reducer -> store -> view

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

Từ TaskResult gọi lên store để lấy dữ liệu bằng việc kết nối = connect
import { connect } from ‘react-redux’

const mapToStateProps

export default connect(mapToStateProps, …)(...);

Tại Reducers/tasks.js, lưu trên localStorage

- Bài 2 : Chúng ta thực hiện chức năng add 1 chức năng
Tìm hiểu về mapStateProps và mapDispatchToProps

_ mapStateToProps : chuyển state từ store thành props của component
_ mapDispatchToProps : chuyển các action thành props.

- Bài 3: Update 1 số tính năng add,close Form
 
 Ôn tập lại một số kỹ năng trong Redux sử lý action -> reducer -> store -> view để thực hiện các chức năng cần thiết

💻 HAPPY CODING!!! ❤️

