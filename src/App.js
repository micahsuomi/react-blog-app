import React, {Component} from 'react';
import './App.css';
import AddPost from './components/AddPost';
import PostList from './components/PostList';
import ViewPost from './components/ViewPost';
import DeletePost from './components/DeletePost';
import EditPost from './components/EditPost';
import {blogData} from './components/blogData';

import {BrowserRouter,
  Route,
  Switch,

} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
            posts: blogData
            
          }

  }

  searchResult = () => {
    console.log('connected')

  }

 

  addPost = (newPost) => {
    this.setState({posts: [newPost, ...this.state.posts]})
    console.log(newPost)
  }

  

  deletePost = (e) => {
    const unDeletedPosts = this.state.posts.filter((post) => post.id !== e.target.id)
    this.setState({posts: unDeletedPosts})

  }
  

  editPost = (newPost, id) => {
    const newPosts= this.state.posts.map((post) => {
    return post.id === id ? newPost : post
    })
    this.setState({posts: newPosts})

    
    }



  render() {

    return  (
      <BrowserRouter>

      <div className="wrapper App">
        <div className="container">
        
            <Switch>
            <Route path={"/addpost"} 
            component={(props)=><AddPost 
            {...props} 
            addPost={this.addPost}/>} />

            <Route path={`/viewpost/:id`} 
            component={(props)=><ViewPost 
            posts={this.state.posts} 
            id={props.match.params.id} 
            {...props}/>}/>

            <Route path={'/deletepost/:id'} 
            component={(props)=> <DeletePost 
            id={props.match.params.id}
            {...props}
            deletePost={this.deletePost}/>}/>

            <Route path={`/editpost/:id`} 
            component={(props)=><EditPost 
            {...props} 
            posts={this.state.posts} 
            id={props.match.params.id} 
            editPost={this.editPost}/>}/>

            <Route path="/" component={()=><PostList 
            posts={this.state.posts}
            seachResult={this.searchResult}/>} />
            </Switch>

      </div>
      </div>
      </BrowserRouter>

    );
  }
  }


export default App;
