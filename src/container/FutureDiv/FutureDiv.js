import React from 'react';
import Feature from '../../components/Feature/Feature';
import './FutureDiv.css'


class FutureDiv extends React.Component {
    render() {
        return (

            <div className='futurediv-mainDiv scale-up-center section__padding'>
                <div className='futurediv-maindiv-content-div'>
                    <h3 className='gradient__text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h3>
                    <p className='futurediv-mainDiv-p'>
                        Request Early Access to Get Started
                    </p>
                </div>

                <div className='futurediv-mainDiv-features'>
                    <Feature class="column" title="Improving end distrusts instantly "
                     content="From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded." />
                    
                    <Feature class="column" title="Become the tended active" 
                    content="Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to." />

                    <Feature class="column" title="Message or am nothing" 
                    content="Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address." />
                    
                    <Feature class="column" title="Really boy law county" 
                    content="Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush." />

                </div>
            </div>
        )
    }
}


export default FutureDiv;