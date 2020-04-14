import React from 'react';
import {NavLink} from 'react-router-dom';
import '../assets/style/postitem.css'


const PostItem = (props) => {
    let {id, title, category, image} = props.post

    let postStyles = [
        {backgroundColor: 'var(--blue)'},
        {backgroundColor: 'var(--yellow)'},
        {backgroundColor: 'var(--green)'},
        {backgroundColor: 'var(--violet)'},
        {backgroundColor: 'var(--brown)'}
    
    ]

    let fontStyles = [
        {color: 'var(--blue)'},
        {color: 'var(--yellow)'},
        {color: 'var(--green)'},
        {color: 'var(--violet)'},
        {color: 'var(--brown)'}
    
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
        fontStyles = fontStyles[index];
        iconStyles = iconStyles.work;

    } else if(category.toLowerCase().includes('entertainment')) {
        index = index +1
        postStyles = postStyles[index]
        fontStyles = fontStyles[index];
        iconStyles = iconStyles.entertainment;

    } else if(category.toLowerCase().includes('travel')) {
        index = index +2
        postStyles = postStyles[index];
        fontStyles = fontStyles[index];
        iconStyles = iconStyles.travel;

    }    else if(category.toLowerCase().includes('sport')) {
        index = index +3
        postStyles = postStyles[index];
        fontStyles = fontStyles[index];

        iconStyles = iconStyles.sport;

    } else {
        index = index +4
        postStyles = postStyles[index];
        fontStyles = fontStyles[index];
        iconStyles = iconStyles.other;


    }
    return (

            <div className="post-item__container grow" >
            <div className="post-item__wrapper">
                <div className="view-container">
                <NavLink to={`/viewpost/${id}`} className="link">
                <span className="read">  
                Read 
                </span>          
                     </NavLink>
                </div>
                <img src={image} alt="post pic" className="post-image__small"/>
                <h3 className="post-title" style={fontStyles}>{title}</h3>
                <div className="category-wrapper" style={postStyles}>
                <h3 className="post-category">{category}</h3>
                <i className={iconStyles}></i>
                </div>
                
            </div>
            </div>
           

    )
}

export default PostItem;