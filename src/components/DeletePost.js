import React from 'react'
import {NavLink} from 'react-router-dom';
import '../assets/style/deletepost.css';


const DeletePost = (props) => {
    
    let {id} = props;
    console.log(props)
    return (
        <div className="viewpost-wrapper deletepost-wrapper">
        <div className="deletepost-container">
            <h3 className="warning">Are you sure you want to delete this post?</h3>
            <div className="buttons-wrapper">
                <NavLink to ='/' className="delete-link">
                <button id={id} 
                onClick={props.deletePost} className="btn-delete">
                    Delete</button>
                    </NavLink>
                    <NavLink to ={`/viewpost/${id}`}>
                        <button className="btn-cancel delete-cancel">Cancel</button>
                        </NavLink>
              
            </div>
        </div>
        </div>
    )
}

export default DeletePost;


