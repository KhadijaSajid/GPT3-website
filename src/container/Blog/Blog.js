import React from 'react';
import './Blog.css'
import BlogPost from '../../components/BlogPost/BlogPost'
import Blog1 from '../../assets/blog01.png'
import Blog2 from '../../assets/blog02.png'
import Blog3 from '../../assets/blog03.png'
import Blog4 from '../../assets/blog04.png'
import Blog5 from '../../assets/blog05.png'

class Blog extends React.Component {
    render() {
        return (
            <div className='Blog-mainDiv scale-up-center section__margin'>
                <p className='gradient__text'>A lot is happening, </p>
                <p className='gradient__text'>We are blogging about it.</p>
                <div className='Blog-subDiv'>
                    <div className='Blog-subDiv-blog'>
                        <div className='blog1'>
                            <BlogPost image={Blog1} para='GPT-3 and Open  AI is the future. Let us exlore how it is?'
                                date='19th september 2021' />
                        </div>
                    </div>
                    <div className='Blog-subDiv-blog Blog-subDiv-blog2'>
                        <BlogPost image={Blog2} para='GPT-3 and Open  AI is the future. Let us exlore how it is?'
                            date='19th september 2021' />
                        <BlogPost image={Blog3} para='GPT-3 and Open  AI is the future. Let us exlore how it is?'
                            date='19th september 2021' />
                    </div>
                    <div className='Blog-subDiv-blog Blog-subDiv-blog2'>
                        <BlogPost image={Blog4} para='GPT-3 and Open  AI is the future. Let us exlore how it is?'
                            date='19th september 2021' />
                        <BlogPost image={Blog5} para='GPT-3 and Open  AI is the future. Let us exlore how it is?'
                            date='19th september 2021' />
                    </div>
                </div>
            </div>
        )
    }
}


export default Blog;