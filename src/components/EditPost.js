import {NavLink} from 'react-router-dom';
import React, { Component } from 'react'
import '../assets/style/addpost.css';
import validator from 'validator';

const Feedback = props => <p style={{color: 'red'}}>{props.error}</p>


class EditPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
                post: {
                   title: '',
                   category: '',
                   description: '',
                   image: ''
                 },
                 touched: {
                    title: false,
                    description: false
                }
                 
        }
       
    }

     handleSubmit = (e) => {
         e.preventDefault();
         this.props.editPost(this.state.post, this.props.id);
         this.props.history.push('/');
     }

    
    handleChange = (e) => {
        let {name, value} = e.target;
        const post = {...this.state.post,[name]: value}
        this.setState({post})
        
    }

    handleBlur = (e) => {
        const {name} = e.target;
        this.setState({
            touched: {...this.state.touched, [name] : true}})
            console.log('blurring')

    }

    validate = () => {
        const errors = {
            title: '',
            category: ''
        }
            if(
                this.state.touched.title &&
                !validator.isLength(this.state.post.title, {min: 3, max: 30})
              )  {
                errors.title = 'Title must be between 3 and 20 characters';
                console.log(errors.title)
                
            } if(
                this.state.touched.description && 
                !validator.isLength(this.state.post.description, {min: 3, max: 1000})
            ) {
                errors.description = 'Description must be between 3 and 100 characters';
        }
        
       
            return errors
}

  
    componentDidMount() {
        let {posts, id} = this.props;
        let filteredPost = posts.find((post) => post.id === id);
        this.setState({post: filteredPost})
    }
    render() {
        
        let {title, category, description, image} = this.state.post;
        const errors = this.validate();

        return (
            <div className="add-post__container">
            <form onSubmit={this.handleSubmit} className="form">
            <h4>Edit Post</h4>

            <div className="input-topics">
            <label className="title-category">Title</label>
            <input type="text" 
            className="edit-input"
            name="title" 
            value={title}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            required={true}/>

            <label className="title-category">Category</label>
            <select 
            name="category" 
            value={category} 
            onChange={this.handleChange}
            required={true}
            className="edit-input">
                <option value=''>----Select Category</option>
                <option value='Work'>Work</option>
                    <option value='Entertainment'>Entertainment</option>
                    <option value='Travel'>Travel</option>
                    <option value='Sport'>Sport</option>
                    <option value='Other'>Other</option>
            </select>
            </div>
            {errors.title ? <Feedback error={errors.title} /> : ''}

            <label>Insert Image Link</label>
            <input type="text" 
            name="image"
            value={image}
            placeholder="insert image link" 
            onChange={this.handleChange}/>

            <textarea type="text" 
            name="description" 
            value={description}
            onChange={this.handleChange}
            onBlur={this.handleBlur} 
            required={true}/>
            {errors.description ? <Feedback error={errors.description} /> : ''}

            <div className="buttons-wrapper">
            <button className="btn-save">Save</button>
            <NavLink to ="/" className="nav-cancel">
                <button className="btn-cancel">
                    Cancel
                    </button></NavLink>
            </div>

            
        </form>
            </div>
        )
    }
}

export default EditPost
