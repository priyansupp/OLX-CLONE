import React from 'react';
import classes from "./Mainbody.module.css";
import MainBodyPosts from '../Adposts/MainBodyPosts';

export default function Mainbody() {
  return (
    <div className={classes.Body}>
        <MainBodyPosts />
    </div> 
  )
};
 