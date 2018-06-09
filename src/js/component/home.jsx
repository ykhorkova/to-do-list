import React from 'react';
import {Element} from './Element.jsx';
//include images into your bundle
// import rigoImage from '../../img/rigo-baby.jpg';
//create your first component
export class Home extends React.Component{
    
    constructor(){
        super();
        this.state={
            tasks:[]
        };
    }
    
    handleClickNewTask(e){
        if (e.charCode == 13){
            let newTasks = this.state.tasks.slice(0);
            newTasks.push(e.target.value);
            this.setState({
                tasks: newTasks
            });
            e.target.value="";
        }
    }
    
    deleteTask(a) {
        let tempState = this.state.tasks.filter((t,i) => (i !== a));
        this.setState({
            tasks: tempState
        });
    }
    
    render(){
                            
        var listTasks = this.state.tasks.map( (element, index) => {
            return <li className="li-item" key={index}>
                {element} 
                <span onClick={(event) => this.deleteTask(index)}>x</span>
            </li>;
            
        });
        
        return (
            
            <div className="card-body mx-auto">
                <h1>todos</h1>
                <div className="card">
                    <ul className="list-group list-group-flush" id="ul-list">
                        <input
                        placeholder="What needs to be done?"
                        className="input-task"
                        type="text"
                        onKeyPress={(event) => this.handleClickNewTask(event)}/>
                        {listTasks}
                    </ul>
                </div>
            </div>
        );
    }
}
                    // <span id="removeX" onClick={this.deleteTask.bind(this)}> X </span>