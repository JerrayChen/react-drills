import React, {Component} from 'react';
import Todo from './Todo';

class List extends Component{
    render(){
        return (
            <div>
                {this.props.todoList.map(
                    (e,i)=>{
                        return (
                            <Todo key={i} value={e}/>
                        )
                    }
                )}
                
            </div>
        )
    }
}

export default List;