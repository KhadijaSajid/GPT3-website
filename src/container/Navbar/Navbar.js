import React from 'react';
import './Navbar.css'


class Navbar extends React.Component {
    render() {
        return (


            <div className='scale-up-center section__padding navbar-maindiv '>
                <div className='navbar-subdiv'>
                    <div>
                        <p className='p'>GPT-3</p>

                    </div>
                    <div className='navbar-maindiv-hrefs'>
                        <a href='#Home'>Home</a>
                        <a href='#GPT'>What is GPT</a>
                        <a href='#AI'>Open AI</a>
                        <a href='#Case-studies'>Case Studies</a>
                        <a href='#lib'>Library</a>
                    </div>
                </div>
                <div className='navbar-signin-content'>
                    <a className='signin'>Sign in</a>
                    <button>
                        Sign up
                    </button>
                </div>
            </div>

            // <div className='navbar-maindiv '>
            //     <div>
            //         <p className='p'>GPT-3</p>
            //     </div>
            //     <div className='navbar-maindiv-hrefs'>
            //         <a href='#Home'>Home</a>
            //         <a href='#GPT'>What is GPT</a>
            //         <a href='#AI'>Open AI</a>
            //         <a href='#Case-studies'>Case Studies</a>
            //         <a href='#lib'>Library</a>

            //     </div>
            //     <div className='navbar-maindiv-signin'>
            //         <a className='signin'>Sign in</a>
            //     </div>
            //     <div>
            //         <button>
            //             Sign up
            //         </button>
            //     </div>


            // </div>
        )
    }
}


export default Navbar;