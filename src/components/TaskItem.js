import React, {Component} from 'react';

class TaskItem extends Component {
    
    
    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task.id)
    }

    onDeleteItem = () => {
        this.props.onDeleteItem(this.props.task.id)
    }

    onEditItem = () => {
        this.props.onEditItem(this.props.task.id);
    }


  render() {
      var {task,index} = this.props; // cu phap ES6
      // co the viet var task = this.props.task lay du lieu tu TableResult
  
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{task.name}</td>
            <td className="text-center">
                <span  onClick={this.onUpdateStatus}
                        className= { task.status === true ? 'label label-success': 'label label-danger' }>
                            { task.status === true ?'Active' : 'Hide'}
                        </span>
            </td>
            <td className="text-center">
                <button onClick={this.onEditItem}
                type="button" className="btn btn-warning">
                    <span className="fa fa-pencil mr-5"></span>Sửa
                </button>
                &nbsp;
                <button onClick={this.onDeleteItem}
                type="button" className="btn btn-danger">
                    <span className="fa fa-trash mr-5"></span>Xóa
                </button>
            </td>
        </tr>
     );
  }
  
}

export default TaskItem;
