import React from 'react';
import classes from './PostCard.module.css';
import { Link } from 'react-router-dom';


function takeoutdate(date){
  if(!date)
  return;
  let temp=date.toString();
  let year=parseInt(temp.substring(0,4));
  let month=parseInt(temp.substring(5,7));
  let dat=parseInt(temp.substring(8,10));
  let monthstring;
  switch(month){
    case 1: monthstring="Jan";
    break;
    case 2: monthstring="Feb";
    break;
    case 3: monthstring="Mar";
    break;
    case 4: monthstring="Apr";
    break;
    case 5: monthstring="May";
    break;
    case 6: monthstring="Jun";
    break;
    case 7: monthstring="Jul";
    break;
    case 8: monthstring="Aug";
    break;
    case 9: monthstring="Sep";
    break;
    case 10: monthstring="Oct";
    break;
    case 11: monthstring="Nov";
    break;
    default: monthstring="Dec";
    break;
  }

  let ans= dat+" "+monthstring+" "+year;
  return ans;
}


export default function PostCard(props) {
  const desc = props.post.description;
  const id = props.post._id;
  const url = "/ads/" + id;
  let date=takeoutdate(props.post.dateOfBuying);
  let postdate=takeoutdate(props.post.createdAt);

   /*Fuction to add commas in the price */
   let new_price=props.post.price.toLocaleString("en-US");

  return (
    <Link to={url}>
      <div className={classes.posts}>
          <img className={classes.image} src={props.post.pro_image} alt="" />
          <p className={classes.price}>&#8377;{new_price}</p>
          <p className={classes.dateOfBuying}>{date}</p>
          <p className={classes.pro_name}>{props.post.pro_name}</p>
          <p className={classes.hostel}>{props.post.hostel}</p>
          <p className={classes.postDate}><i>{postdate.substring(0,6)}</i></p>
         
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

