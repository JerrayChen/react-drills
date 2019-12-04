import React, {Component} from 'react';

class Todo extends Component{
    constructor(){
        super();

    }
    render(){
        return(
            <div>
                <ul>
                    {this.props.list.map((e,i)=>{
                        return (
                        <li key={i}>{e}</li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default Todo;