import React, {Component} from 'react';

class Login extends Component{
    constructor(){
        super();
        this.state = {
            username: '',
            password: ''
        }
    }
    render(){
        return(
            <div>
                <input onChange={(e)=>{this.setState({username: e.target.value})}}/>
                <input onChange={(e)=>{this.setState({password: e.target.value})}}/>
                <button onClick={()=>{alert(`Username: ${this.state.username}, Password: ${this.state.password}`)}}>Login</button>
            </div>
        )
    }
}

export default Login;