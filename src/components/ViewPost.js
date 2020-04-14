import React from 'react';
import '../assets/style/viewpost.css';
import {NavLink} from 'react-router-dom';

const ViewPost = (props) => {
    let {posts, id} = props;
 
    let postStyles = [
        {backgroundColor: 'var(--blue)'},
        {backgroundColor: 'var(--yellow)'},
        {backgroundColor: 'var(--green)'},
        {backgroundColor: 'var(--violet)'},
        {backgroundColor: 'var(--brown)'}
    
    ]
    
   
    const filteredPosts = posts.find((post) => {
        return post.id === id
    })

    
    let index = 0;
    if(filteredPosts.category.toLowerCase().includes('work')) {
        postStyles = postStyles[index];
    } else if(filteredPosts.category.toLowerCase().includes('entertainment')) {
        index = index +1
        postStyles = postStyles[index]
    } else if(filteredPosts.category.toLowerCase().includes('travel')) {
        index = index +2
        postStyles = postStyles[index];
    }    else if(filteredPosts.category.toLowerCase().includes('sport')) {
        index = index +3
        postStyles = postStyles[index]
    } else {
        index = index +4
        postStyles = postStyles[index]

    }
    

  
    return (
        <div className="viewpost-wrapper" >
        <div className="viewpost-container">
            <div className="viewpost-header" style={postStyles}>
            <div className="back-to-top__btn__wrapper">
                <NavLink to="/" className="back-to-posts__link">
                <i className="far fa-arrow-alt-circle-left fa-2x"></i>
                <span className="back-to-posts__text">
                Back to Posts
                </span>
                    </NavLink>
            </div>
            <div className="header-container">
            <h3>Title: {filteredPosts.title}</h3>
                <h3>Category: {filteredPosts.category}</h3>
                </div>
                </div>

                <div className="viewpost-body">
                <img src={filteredPosts.image} className="post-image__big" alt="post pic"/>
                <p className="viewpost-description">Category: {filteredPosts.description}</p>
            <div className="buttons-wrapper">
            <NavLink to={`/editpost/${id}`}> 
            <button id={id} className="btn-edit"> 
            Edit Post 
            </button>
            </NavLink>
            <NavLink to ={`/deletepost/${id}`}>
                <button className="btn-delete">
                    Delete</button>
                    </NavLink>
                    </div>


            </div>
            </div>

        </div>
    )
}

export default ViewPost;
