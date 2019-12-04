import React, {Component} from 'react';

class NewTask extends Component{
    constructor(){
        super();
        this.state = {
            userInput: ''
        }
    }
    render(){
        return (
            <div>
                <input onChange={(e)=>{this.setState({
                    userInput: e.target.value
                })}}/>
                <button onClick={()=>{this.props.putTask(this.state.userInput)}}>Add</button>
            </div>
        )
    }
}

export default NewTask;