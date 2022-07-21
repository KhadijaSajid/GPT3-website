import React from 'react';
import './Footer.css'


class Footer extends React.Component {
    render() {
        return (
            <div className='Footer-mainDiv scale-up-center section__padding'>
                <div className='Footer-content'>
                    <h2 className='gradient__text'>Do you want to step in to the future before others</h2>
                    <button>
                        Request Early Access
                    </button>
                </div>
                <div className='Footer-links'>
                    <div className='Footer-content-1'>
                        <h4>GPT-3</h4>
                        <p>
                            lorem lorem lorem lorem lorem lorem
                        </p>
                    </div>
                    <div>
                        <p className='bold'>Links</p>
                        <p>Overons</p>
                        <p>Social Media</p>
                        <p>Counters</p>
                        <p>Contact</p>


                    </div>
                    <div>
                        <p className='bold'>Company</p>
                        <p>Terms and Conditions</p>
                        <p>Privacy Policy</p>
                        <p>Contact</p>

                    </div>
                    <div>
                        <p className='bold'>Get in touch</p>
                        <p>Crechterword k12 1li</p>
                        <p>098-45654</p>
                        <p>info@payme.net</p>

                    </div>
                </div>
                <div className='Footer-copyright'>
                    <p className='copyright'>2022 GPT-3 All rights reserved</p>
                </div>
            </div>
        )
    }
}


export default Footer;