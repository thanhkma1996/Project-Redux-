import React, {Component} from 'react';

class TaskForm extends Component {
    constructor(props){
        super(props);
        this.state = ({
            id: '',
            name: '',
            status: true
        })
    }

    // Khi chuyen du lieu tu App qua cac component con ta phai
    // tao 1 ham lifeCycel
    componentWillMount(){
        if(this.props.taskEdit){
            this.setState({
                id: this.props.taskEdit.id,
                name: this.props.taskEdit.name,
                status: this.props.taskEdit.status
            })
        }
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps);
        if(nextProps.taskEdit && nextProps ){
            this.setState({
                id: nextProps.taskEdit.id,
                name: nextProps.taskEdit.name,
                 status: nextProps.taskEdit.status
            })
        }else if(!nextProps.taskEdit){
             this.setState({
                id: '',
                name: '',
                status: true
            })
        }
    }
    
    onCloseForm = ()=> {
            this.props.onCloseForm()
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name] : value
        })
    }


    Onclear = ()=> {
        this.setState({
            name: '',
            status: false
        })
    }

    onSubmit = (event) => {
            // Khong cho form reload lai khi submit
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.Onclear();
        this.onCloseForm();
    }


  render() {
        var {id} = this.state
    return (
     <div className="panel panel-warning">
        <div className="panel-heading">
            <h3 className="panel-title">{ id !== '' ? 'Cập nhật công việc' : 'Thêm công việc'}
            <span
                className="fa fa-times-circle text-right"
                onClick = {this.onCloseForm}
            ></span>
            </h3>
        </div>
        <div className="panel-body">
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Tên :</label>
                    <input type="text" className="form-control" 
                     name="name" value={this.state.name} onChange={this.onChange}
                    />
                </div>
                <label>Trạng Thái :</label>
                <select className="form-control" required="required"
                      name="status" value={this.state.status} onChange={this.onChange}
                >
                    <option value={true}>Kích Hoạt</option>
                    <option value={false}>Ẩn</option>
                </select>
                <br/>
                <div className="text-center">
                    <button type="submit" className="btn btn-warning">Thêm</button>&nbsp;
                    <button type="button" className="btn btn-danger" onClick={this.Onclear}>Hủy Bỏ</button>
                </div>
            </form>
        </div>
    </div>
     );
  }
  
}

export default TaskForm;
