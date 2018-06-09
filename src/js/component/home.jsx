import React from 'react';
import {Element} from './Element.jsx';
//include images into your bundle
// import rigoImage from '../../img/rigo-baby.jpg';
//create your first component
export class Home extends React.Component{
    
    constructor(){
        super();
        this.state={
            tasks:[],
            countTasks: 0
        };
    }
    
    handleClickNewTask(e){
        if (e.charCode == 13){
            let newTasks = this.state.tasks.slice(0);
            let countTasks = this.state.tasks.length + 1;
            newTasks.push(e.target.value);
            this.setState({
                tasks: newTasks,
                totalTasks: countTasks
            });
            e.target.value="";
        }
    }
    
    deleteTask(a) {
        let tempState = this.state.tasks.filter((t,i) => (i !== a));
        let tempCountTasks = this.state.tasks.length - 1;
        this.setState({
            tasks: tempState,
            totalTasks: tempCountTasks
        });
        // console.log(tempCountTasks);
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
                    <ul className="list-group list-group-flush" id="ulList">
                        <input
                        placeholder="What needs to be done?"
                        className="input-task"
                        type="text"
                        onKeyPress={(event) => this.handleClickNewTask(event)}/>
                        {listTasks}
                    </ul>
                    <span className="count-list">{this.state.totalTasks} item left</span>   
                </div>
            </div>
        );
    }
}
