import React, {Component} from 'react';

class TaskFillterStatus extends Component {
   constructor(props){
      super(props);
      this.state = ({
          filterName:'',
          filterStatus: -1, // active all: -1, hide: 0 , active 1
      })
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
            this.props.onFillterStatus (
                name === 'filterName' ? value : this.state.filterName,
                name === 'filterStatus' ? value :  this.state.filterStatus
            )
        this.setState({
            [name] : value
        })
    } 



  render() {
      var {filterName, filterStatus} = this.state;
    return (
        <tr>
                <td></td>
                <td>
                    <input type="text" 
                            className="form-control" 
                            name="filterName"
                            value={filterName}
                            onChange={this.onChange}
                    />
                </td>
                <td>
                    <select className="form-control"
                                name="filterStatus"
                                value={filterStatus}
                                onChange={this.onChange}
                    >
                        <option value={-1}>Tất Cả</option>
                        <option value={0}>Ẩn</option>
                        <option value={1}>Kích Hoạt</option>
                    </select>
                </td>
                <td></td>
            </tr>
     );
  }
  
}

export default TaskFillterStatus;
