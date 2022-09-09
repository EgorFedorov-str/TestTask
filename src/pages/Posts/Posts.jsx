
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from '../../components/Post';
import { fetchPost } from '../../store/actions/postActions';
import {fetchComment} from '../../store/actions/commentActions'
import './styles.css'



function Posts() {
    const dispatch = useDispatch()
    const {posts} = useSelector(state => state.post)
    
    useEffect(() => {
      dispatch(fetchPost())
    }, [])

    useEffect(() => {
      dispatch(fetchComment())
    }, [])
    
  return (
    <div className="container">
    <h1>Posts</h1>
  {posts && posts.map(post => <Post key={post.id} postId={post.id} title={post.title} body={post.body} comments={post.comments}/>)}
  </div>)
  
}

export default Posts