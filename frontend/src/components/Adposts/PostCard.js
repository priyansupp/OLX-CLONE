import React from 'react';
import classes from './PostCard.module.css';
import { Link } from 'react-router-dom';

export default function PostCard(props) {
  const desc = props.post.description;
  const id = props.post._id;
  const url = "/ads/" + id;
  return (
    <Link to={url}>
      <div className={classes.posts}>
          <img className={classes.image} src={props.post.pro_image} alt="" />
          <p className={classes.price}>{props.post.price}</p>
          <p className={classes.dateOfBuying}>{props.post.dateOfBuying}</p>
          <p className={classes.pro_name}>{props.post.pro_name}</p>
          <p className={classes.desc}>{desc}</p>
          <p className={classes.hostel}>{props.post.hostel}</p>
      </div>
    </Link>
  );
};


PostCard.defaultProps ={
    pro_image: "https://cdn.dribbble.com/users/1787778/screenshots/3713333/media/a684905500dc9268e81c03a8a7ad6e09.png?compress=1&resize=800x600&vertical=top",
    price:'₹5,00,000',
    dateOfBuying:'March, 2021',
    pro_name:'Holy-Shit',
    desc:'This is a post for sale',
    hostel:'Siang'
};

