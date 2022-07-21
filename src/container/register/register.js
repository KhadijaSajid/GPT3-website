import React from 'react';
import './register.css'


class Register extends React.Component {
    render() {
        return (
            <div className='register_mainDiv scale-up-center section__margin '>
                <div className='register-subDiv1'>
                    <p>Request Early Access to Get Started</p>
                    <h3>Register today & start exploring the endless possiblities.</h3>
                </div>
                <div className='register-subDiv2'>
                    <button>Get Started</button>
                </div>
            </div>
        )
    }
}


export default Register;