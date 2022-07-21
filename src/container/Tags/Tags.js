import React from 'react';
import {Google, dropbox, slack,  atlassian, shopify}  from '../../container';
import './Tags.css'

class Tags extends React.Component{
    render(){
        return(
            <div className='scale__center section__margin tags-maindiv'>

            <img src={Google}/>
            <img src={slack}/>
            <img src={atlassian}/>
            <img src={dropbox}/>
            <img  className='shopify' src={shopify}/>


            </ div>
        )
    }
}


export default Tags;