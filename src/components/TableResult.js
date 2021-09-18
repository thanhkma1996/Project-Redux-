import React, {Component} from 'react';
import TaskItem from "./TaskItem";
import TaskFillterStatus from "./TaskFillterStatus";

import { connect } from 'react-redux'; // ket noi voi store de lay du lieu 

class TableResult extends Component {

  render() {
    //   console.log(this.props.todolist)
      var resultdata = this.props.datagenerate;
      var elementTask = resultdata.map((task,index) => {
          return <TaskItem key={index} 
                            index={index} 
                            task={task}
                            onUpdateStatus={this.props.onUpdateStatus}
                            onDeleteItem = {this.props.onDeleteItem}
                            onEditItem = {this.props.onEditItem}
                            />
      })

    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th className="text-center">STT</th>
                        <th className="text-center">Tên</th>
                        <th className="text-center">Trạng Thái</th>
                        <th className="text-center">Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                    <TaskFillterStatus onFillterStatus={this.props.onFillterStatus} />
                    { elementTask }
                </tbody>
            </table>
        </div>
     );
  }
  
}

// tao 1 bien de lay du lieu tu store ve
const mapStateToProps = (state) => {
    return {
        datagenerate: state.tasks // lay du lieu tu reducers ( index.js)
    }
}


export default connect(mapStateToProps,null)(TableResult);
