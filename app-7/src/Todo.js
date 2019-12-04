import React, {Component} from 'react';

class Todo extends Component{


    render(){
        return (
            <div>
                {this.props.value}
            </div>
        )
    }
}

export default Todo;