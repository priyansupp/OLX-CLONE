import React from 'react';
import classes from './MainBodyPosts.module.css';
import PostCard from './PostCard';
import { useEffect, useState } from 'react';

export default function MainBodyPosts(props) {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      if(props.category === 'All'){
        const response = await fetch('http://localhost:4000/ad-api/getAds');
        const allPosts = await response.json();
        setPosts(allPosts);
      } else {
        const response = await fetch('http://localhost:4000/ad-api/getAds/category/' + props.category);
        const categoricalPosts = await response.json();
        setPosts(categoricalPosts);
      }
    }
    fetchPosts();
  }, [props.category]);

  return (
    <div className={classes.Supreme}>
      <p className={classes.para}>Fresh Recomendations</p>
      <div className={classes.Adposts}>
        
        {posts && posts.map(post => <PostCard post={post} key={post._id} />)}
        {posts ? null : <div>No Ads in this category</div>}

      </div>
    </div>
  )
};
