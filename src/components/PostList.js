import React from 'react';
import SearchForm from '../components/SearchPosts';
import PostItem from './PostItem';
import '../assets/style/postlist.css';
import {NavLink} from 'react-router-dom';
import Footer from '../components/Footer';


const PostList = (props) => {
  let postList = props.posts.map((post) => (
    <PostItem key={post.id} post={post} />
  ))

  const filterResult = (newPosts) => {
    console.log(props.posts, newPosts)
    

  }

          return (
            <div className="container-blog">
              <div className="blog-header__container">
            <h1 className="blog-header">React Blog App</h1>
            <div className="blog-sub__container">
             <h4 className="sub-header">
               Total posts: {props.posts.length}</h4>
              </div>
              </div>
              <div className="posts-container">

                
                {/* <SearchForm filterResult={filterResult} />  */}
              <NavLink to='/addpost' 
              className="add-post-link">
                <i className="fas fa-plus-circle fa-2x"></i> 
                <span className="add">Add New</span>
                </NavLink>
            <div className="posts-wrapper">
               {postList}
            </div>
            </div>
            <Footer />

            </div>

    

          )
}
       
export default PostList
