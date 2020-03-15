import React, {Component} from 'react';
import '../assets/style/form.css';
import { v4 as uuidv4 } from 'uuid';
import {NavLink} from 'react-router-dom';
import validator from 'validator';

const Feedback = props => <p style={{color: 'red'}}>{props.error}</p>
class AddPost extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            post: 
                {
                    title: '',
                    category: '',
                    description: ''
                },
                touched: {
                    title: false,
                    description: false
                }
         
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
        let newPost = {id: uuidv4(), ...this.state.post};
        this.props.addPost(newPost)
        this.props.history.push('/');


      
    }

    handleBlur = (e) => {
        const {name} = e.target;
        this.setState({
            touched: {...this.state.touched, [name] : true}})
            console.log('blurring')

    }

    handleChange = (e) => {
        let {name, value} = e.target;
        const post = {...this.state.post,[name]: value}
        this.setState({post})
       

    }

    validate = () => {
        const errors = {
            title: '',
            category: ''
        }
            if(
                this.state.touched.title &&
                !validator.isLength(this.state.post.title, {min: 3, max: 20})
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
    render() {

        let {title, category, description} = this.state;
        const errors = this.validate();

        return (
            <div className="add-post__container">
                <form className="form" onSubmit={this.handleSubmit}>
                    <div className="input-topics">
                    <label className="title-category">Title</label>

                    <div>
                    <input type="text" name="title"
                    value={title} placeholder="title" 
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    required={true}/>
                    {errors.title ? <Feedback error={errors.title} /> : ''}
                    </div>
                    <div>
                    <label className="title-category">Category</label>
                     <select name="category" value={category} 
                     onChange={this.handleChange}
                     required={true}>
                        <option value=''>----Select Category</option>
                        <option value='Work'>Work</option>
                        <option value='Entertainment'>Entertainment</option>
                        <option value='Travel'>Travel</option>
                        <option value='Sport'>Sport</option>
                        <option value='Other'>Other</option>
                    </select>
                    </div>
                    </div>
                    
                    <label>Write a New Post</label>
                    <textarea type="text" 
                    name="description"
                    category={description} 
                    placeholder="write here" 
                    onChange={this.handleChange}
                    onBlur={this.handleBlur} 
                    required={true}/>
                    {errors.description ? <Feedback error={errors.description} /> : ''}

                    <div className="buttons-wrapper">
                    <button onClick={this.addPost} className="btn-save">Save</button>
                    <NavLink to ="/" className="btn-cancel">
                        Cancel
                        </NavLink>
                    </div>
    
    
                </form>
            </div>
        )
    }
    }
    

export default AddPost;