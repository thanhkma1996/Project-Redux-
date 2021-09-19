import React, {Component} from 'react';
import './App.css';
import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TableResult from "./components/TableResult";

class App extends Component {
  constructor(props){
      super(props);
      this.state = {
          isDisplayTaskForm: false,
          taskEditing: null,
          filter: {
              name: '',
              status: -1
          },
          keyword: '',
          sortBy: 'name',
          sortValue: 1
      }
  }



  OnToggleForm = () => {
      if(this.state.isDisplayTaskForm && this.state.taskEditing !== null) {
           this.setState({
                isDisplayTaskForm: true,
                taskEditing: null,
             })
      }else {
            this.setState({
            isDisplayTaskForm: !this.props.isDisplayTaskForm
            })
      }
  }

  onCloseForm = ()=>{
    this.setState({
          isDisplayTaskForm: false
      })
  }

  onSubmit = (data) => {
      var addNewData = this.state.task; 
      if(data.id === '') {
            data.id = this.generateID();
            addNewData.push(data);
      }else {
          // Cap nhat chuc nang Edit
          var index = this.findIndex(data.id);
          addNewData[index] = data;

      }
   
        this.setState({
            task: addNewData,
            taskEditing: null
        })

     // luu du lieu tren localstorage
      localStorage.setItem('task',JSON.stringify(addNewData));

  }


  onUpdateStatus = (id) => {
      var onstatus = this.state.task;
      var index = this.findIndex(id);

    //    var onstatus = this.state.task;
    //    onstatus.forEach((onstatus)=>{
    //         if (onstatus.id === id) {
    //             onstatus.status = !onstatus.status
    //         }
    //     });
        if(index !== -1){
            onstatus[index].status = !onstatus[index].status
               this.setState({
                 task: onstatus
            });
        }

        localStorage.setItem('task',JSON.stringify(onstatus));
  }

  onDeleteItem = (id) => {
        var onstatus = this.state.task;
        var Itemdelete = onstatus.filter(onstatus => onstatus.id !== id)
            this.setState({
                task: Itemdelete
            });

        localStorage.setItem('task',JSON.stringify(Itemdelete));
  }

  // check id tao ra khi click co trung voi id cua mang k
 

  onEditItem = (id) => {
      var taskUpdate = this.state.task;
      var index = this.findIndex(id);
      var taskEditing = taskUpdate[index];
      this.setState({
          taskEditing: taskEditing
      })

      this.OnToggleForm();
  }

   findIndex = (id) => {
        var task = this.state.task;
        var result = -1;
        task.forEach((tasks,index) => {
            if(tasks.id === id){
                console.log(index);
                result = index;
            }
        });
        return result;
    }

    // sort status hide/active
    onFillterStatus = (filterName, filterStatus) => {
        filterStatus = +filterStatus;
        this.setState({
            filter : {
                name: filterName,
                status: filterStatus
            }
        });
    }

    // Search 
    onSearch = (keyword) => {
       this.setState({
           keyword: keyword
       });
    }    

     // Feature sort status
    onSort = (sortBy,sortValue) => {
       this.setState({
            sortBy: sortBy,
            sortValue: sortValue
       })
    }

   

  render() {
    var datagenerate = this.state.task;
    var showTaskForm = this.state.isDisplayTaskForm;

    // Function check filter
    var {taskEditing,filter,keyword,sortBy,sortValue} = this.state;
    if(filter){
        if(filter.name){
            datagenerate = datagenerate.filter((task) => {
                return task.name.toLowerCase().indexOf(filter.name) !== -1;
            })
        }
        

        // Filter sort status
       if (filter.status > -1) {
            datagenerate = datagenerate.filter(({status}) =>  
                 +status === filter.status
            )
        }
    }

    // Feature search
    if(keyword){
          datagenerate = datagenerate.filter((task) => {
                return task.name.toLowerCase().indexOf(keyword) !== -1;
            })
    }

    // Sort status
    // if(sortBy === 'name'){
    //     datagenerate.sort((a,b) => {
    //         if(a.name > b.name) return sortValue;
    //         else if(a.name < b.name) return -sortValue;
    //         else return 0;
    //     })
    // }else {
    //     datagenerate.sort((a,b) => {
    //      if(a.status > b.status) return -sortValue;
    //         else if(a.status < b.status) return sortValue;
    //         else return 0;
    //     })
    // }


    var showContetTaskForm = showTaskForm ? 
        <TaskForm onSubmit={this.onSubmit} 
                    onCloseForm={this.onCloseForm} 
                    taskEdit = {taskEditing}
                    /> :'';
    
    return (
      
      <div className="container">
       <div className="text-center">
           <h1>Quản Lý Công Việc</h1>
           <hr/>
       </div>
       <div className="row">
           <div className={showTaskForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : '' } >
               {showContetTaskForm}
           </div>
           <div className={showTaskForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12" }>
               <button type="button" 
                className="btn btn-primary btn-heading"
                onClick={this.OnToggleForm}
               >
                   <span className="fa fa-plus mr-5"></span>Thêm Công Việc
               </button>

                 {/* <button type="button" className="btn btn-danger btn-heading ml-5"
                    onClick={() => this.onGenerate()}
                 >
                      Generate Data
               </button> */}
               
               <Control  
                    onSearch={this.onSearch}
                    onSort={this.onSort}    
                    sortBy={this.sortBy}
                    sortValue={this.sortValue}
                />

               <div className="row mt-15">
                    <TableResult
                                //  datagenerate={ datagenerate } // same tasks={tasks}
                                 onUpdateStatus={ this.onUpdateStatus} 
                                 onDeleteItem={this.onDeleteItem}
                                 onEditItem={this.onEditItem}
                                 onFillterStatus={this.onFillterStatus}
                                 />
               </div>
           </div>
       </div>
   </div>
     );
  }
  
}

export default App;
