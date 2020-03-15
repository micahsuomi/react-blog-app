import React from 'react';
import {NavLink} from 'react-router-dom';
import '../assets/style/postitem.css'


const PostItem = (props) => {
    let {id, title, category} = props.post

    let postStyles = [
        {backgroundColor: 'var(--blue)'},
        {backgroundColor: 'var(--yellow)'},
        {backgroundColor: 'var(--green)'},
        {backgroundColor: 'var(--violet)'},
        {backgroundColor: 'var(--brown)'}
    
    ]

    let iconStyles = {
        work: 'fas fa-network-wired',
        entertainment: 'fas fa-hamburger',
        travel: 'fas fa-mountain',
        sport: 'fas fa-football-ball',
        other: 'fab fa-readme',

    }

    
    let index = 0;


    if(category.toLowerCase().includes('work')) {
        postStyles = postStyles[index];
        iconStyles = iconStyles.work;

    } else if(category.toLowerCase().includes('entertainment')) {
        index = index +1
        postStyles = postStyles[index]
        iconStyles = iconStyles.entertainment;

    } else if(category.toLowerCase().includes('travel')) {
        index = index +2
        postStyles = postStyles[index];
        iconStyles = iconStyles.travel;

    }    else if(category.toLowerCase().includes('sport')) {
        index = index +3
        postStyles = postStyles[index];
        iconStyles = iconStyles.sport;

    } else {
        index = index +4
        postStyles = postStyles[index];
        iconStyles = iconStyles.other;


    }
    return (

            <div className="post-item__container grow" style={postStyles} >
            <div className="post-item__wrapper">
                <div className="view-container">
                <NavLink to={`/viewpost/${id}`} className="link">
                <span className="read">  
                Read 
                </span>          
                     </NavLink>
                </div>
                <h3 className="post-title">{title}</h3>
                <div className="category-wrapper">
                <h3 className="post-category">{category}</h3>
                <i className={iconStyles}></i>
                </div>
                
            </div>
            </div>
           

    )
}

export default PostItem;