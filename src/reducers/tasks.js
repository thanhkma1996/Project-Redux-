import * as types from '../constants/ActionTypes';


//https://www.codegrepper.com/code-examples/javascript/auto+generate+id+in+javascript
var s4 = () =>{
    return Math.random().toString(36).substr(2, 9);
}

var generateID = () =>{
    return s4() +  s4() + '-' +  s4();
}

var data = JSON.parse(localStorage.getItem('task'));
var initialState = data ? data : [];
var myReducer = (state= initialState,action) => {
        switch (action.type) {
            case types.LIST_ALL:
                return state;

            case types.ADD_TASK:
                var newTask = {
                    id: generateID(),
                    name: action.task.name, 
                    status: action.task.status === 'true' ? true : false
                }

                state.push(newTask);
                localStorage.setItem('task',JSON.stringify(state))
                return [...state]; // cach viet nay tuong tu ham map
                // spread operator (...) https://viblo.asia/p/su-dung-spread-operator-trong-javascript-gDVK24welLj
            default: 
            return state
        }
}

export default myReducer;