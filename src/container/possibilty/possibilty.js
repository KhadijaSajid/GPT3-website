import React from 'react';
import possibilty from '../../assets/possibility.png';
import './possibilty.css'


class Possibilty extends React.Component{
    render(){
        return(
            <div className='possibility-mainDiv scale-up-center section__margin'>
                <div className='possibility-imgDiv'>
                    <img src={possibilty} alt="possibilty" />
                </div>

                <div className='possibility-mainDiv-subDiv'>
                    <p className='possibility-blue' >Request Early Access to Get Started</p>
                    <h3 className='gradient__text'>The possibilities are beyond your imagination</h3>
                    <p className='possibility-blue'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                    <p className='possibility-peach'>Request Early Access to Get Started</p>
                </div>
            </div>

        )
    }
}


export default Possibilty;