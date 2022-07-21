import React from 'react';
import Feature from '../../components/Feature/Feature'
import './WhatisGPT.css'

class WhatisGPT extends React.Component {
    render() {
        return (
            <div className='scale-up-center WhatisGPt-mainDiv section__margin section__padding'>

                <div className='whatisGPT-mainDiv-GPT'>
                    <Feature title="What is GPT-3" content="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
                </div>
                <div className='whatisGPT-maindiv-content'>
                    <h3 className='gradient__text'>The possibilities are beyond your imagination</h3>
                    <p>Explore The Library</p>
                </div>

                <div className='whatisGPT-mainDiv-feature-row'>
                    <Feature title="Chatbots" content="We so opinion friends me message as delight. Whole front do of plate heard oh ought. " />
                    <Feature title="Knowledgebase" content="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
                    <Feature title="Education" content="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />

                </div>

            </div>
        )
    }
}


export default WhatisGPT;