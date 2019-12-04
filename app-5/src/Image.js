import React, {Component} from 'react';

class Image extends Component{
    render(){
        return(
            <div>
                <img className='cat' src={this.props.catUrl} />
                <h4>Sleeping like a sloth</h4>
            </div>
        )
    }
}

export default Image;