import React from 'react';
import './Feature.css'
class Feature extends React.Component {
    render() {
        return (
            <div className='Feature-mainDiv'>
                <p className='bar'></p>
                <div className={this.props.class}>
                    <h4>{this.props.title}</h4>
                    <p className='feature-mainDiv-content'>{this.props.content}</p>
                </div>
            </div>
        )
    }
}

export default Feature;