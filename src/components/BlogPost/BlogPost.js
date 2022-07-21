import React from 'react';
import './BlogPost.css'


class BlogPost extends React.Component {
    render() {
        return (
            <div className='BlogPost-mainDiv'>
                <img src={this.props.image} />
                <p>{this.props.date}</p>
                <h4>{this.props.para}</h4>

                <p className='read'>Read Full Article</p>
            </div>
        )
    }
}

export default BlogPost;