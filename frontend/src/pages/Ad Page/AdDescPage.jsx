import React from 'react';
import classes from './AdDescPage.module.css'
import logo from "../../assests/Logo.png";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';


export default function AdDescPage(props) {
  const location = useLocation();
  const AdId = location.pathname.split('/')[2];

  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const response1 = await fetch('http://localhost:4000/ad-api/getAds/id/' + AdId);
      const thatPost = await response1.json();
      setPost(thatPost);
    }
    fetchPost();
  }, [AdId]);

  return (
    <div> 
      <div className={classes.pro_image}>
        {/* {post && post.pro_image} */}
        <img src={logo} alt="product" />
      </div>
      <h1>Product Name : {post && post.pro_name}</h1>
      <h1>Description : {post && post.description}</h1>
      <h1>Date of Buying : {post && post.dateOfBuying}</h1>
      <h1>Hostel : {post && post.hostel}</h1>
      <h1>Price of the product is : {post && post.price}</h1>
      {(post && post.negotiable) ? <h1>It is negotiable </h1> : <h1>It is not negotiable</h1>}
      <p>The ad Id is {AdId}</p>
    </div>
  )
}
