import React from 'react';
import people from '../../assets/people.png'
import AI from '../../assets/ai.png'
import './Header.css'



class Header extends React.Component {
    render() {
        return (
            <div className='header-mainDiv section__margin scale-up-center '>
                <div className='header-subDiv'>
                    <div className='header-mainDiv-content'>
                        <h1 className='gradient__text'>Let's Build Something
                            amazing with GPT-3
                            OpenAI</h1>
                        <p>
                            Yet bed any for travelling assistance indulgence unpleasing.
                             Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
                        </p>

                        <div className='header-main-div-people-btn'>
                            <input placeholder='Your Email Address' />
                            <button>Get Started</button>
                        </div>

                        <div className='header-maindiv-content-people'>
                            <img src={people} alt='people' />
                            <p>1,600 people requested access a visit in last 24 hours</p>
                        </div>

                    </div>
                    <div className='header-mainDiv-Aiimg'>

                    <img className='AI-img' src={AI} alt='AI image'/>
                    </div>

                </div>



            </div>
        )
    }
}


export default Header;