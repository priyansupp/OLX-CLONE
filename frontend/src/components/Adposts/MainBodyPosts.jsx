import React from 'react';
import classes from './MainBodyPosts.module.css';
import PostCard from './PostCard';
import { useEffect, useState } from 'react';

export default function MainBodyPosts(props) {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const response1 = await fetch('http://localhost:4000/ad-api/getAds');
      const allPosts = await response1.json();
      setPosts(allPosts);
    }
    fetchPosts();
  }, []);

  return (
    <div className={classes.Supreme}>
      <p className={classes.para}>Fresh Recomendations</p>
      <div className={classes.Adposts}>
        
        {posts && posts.map(post => <PostCard post={post} key={post._id} />)}

      </div>
    </div>
  )
};
