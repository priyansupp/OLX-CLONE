import React from 'react';
import classes from './Pro_posts.module.css'



function takeoutdate(date) {
    if (!date)
        return;
    let temp = date.toString();
    let year = parseInt(temp.substring(0, 4));
    let month = parseInt(temp.substring(5, 7));
    let dat = parseInt(temp.substring(8, 10));
    let monthstring;
    switch (month) {
        case 1: monthstring = "January";
            break;
        case 2: monthstring = "February";
            break;
        case 3: monthstring = "March";
            break;
        case 4: monthstring = "April";
            break;
        case 5: monthstring = "May";
            break;
        case 6: monthstring = "June";
            break;
        case 7: monthstring = "July";
            break;
        case 8: monthstring = "August";
            break;
        case 9: monthstring = "September";
            break;
        case 10: monthstring = "October";
            break;
        case 11: monthstring = "November";
            break;
        default: monthstring = "December";
            break;
    }

    let ans = dat + " " + monthstring + " " + year;
    return ans;
}

export default function Pro_posts(props) {


    // let date = takeoutdate(props.post.dateOfBuying);
    // let postdate = takeoutdate(props.post.createdAt);

    /*Fuction to add commas in the price */
    // let new_price = props.post.price.toLocaleString("en-US");


    return (
        <div className={classes.body}>
            <div className={classes.posts}>
                <img className={classes.image} src={props.pro_image} alt="" />
                <p className={classes.price}>&#8377;{props.price}</p>
                <p className={classes.dateOfBuying}>{props.dateOfBuying}</p>
                <p className={classes.pro_name}>{props.pro_name}</p>
                <p className={classes.hostel}>{props.hostel}</p>
                <p className={classes.createdAt}><i>{props.createdAt}</i></p>
            </div>
            <div className={classes.desc}>
                <p className={classes.descHead}>Description : </p>
                <p className={classes.description}>{props.description}</p>
            </div>
        </div>
    )
}


Pro_posts.defaultProps = {
    pro_image: "https://cdn.dribbble.com/users/1787778/screenshots/3713333/media/a684905500dc9268e81c03a8a7ad6e09.png?compress=1&resize=800x600&vertical=top",
    price: '5,00,000',
    dateOfBuying: 'March, 2021',
    pro_name: 'Holy-Shit',
    hostel: 'Siang',
    createdAt: 'June 2022',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt laudantium nobis adipisci? Officiis velit at, tempore molestiae a sit, sint, iusto porro dolore unde temporibus voluptates neque atque deserunt dolorum labore quos corporis asperiores consequatur? Nemo molestiae cumque blanditiis libero ipsum nesciunt amet, culpa enim modi? Beatae impedit autem, nostrum officiis eius dolores numquam maxime tenetur aut labore. Maiores, error. ',
};


