import React from 'react';
import classes from './FooterComp.module.css';


export default function FooterComp() {
    return (
        <div className={classes.FooterComp}>
            <div className={classes.left}>
                <p className={classes.Head}> Help</p>
                <p className={classes.body}>
                    Email : <br />
                    priyanshujaiswal009@gmail.com <br />
                    yashmalik2711@gmail.com
                </p>
            </div>
            <div className={classes.middle}>
                <p className={classes.Head}> About Us</p>
                <p className={classes.body}>
                    This olxclone(solely for IITG students) is developed by Priyanshu and Yash together. Feel free to reach out to us for any suggestions.
                </p>
            </div>
            <div className={classes.right}>
                <p className={classes.Head}> Follow Us</p>
                <p className={classes.body}>
                <i className="fa fa-instagram"> Instagram <a href='https://www.instagram.com/_yashmalik' target="_blank">1 </a><a href='https://www.instagram.com/priyansupp' target="_blank">2</a></i><br />
                   <i className="fa fa-facebook"> Facebook <a href='https://www.facebook.com/yash.malik.3910?_rdr' target="_blank">1 </a><a href='https://www.facebook.com/priyanshu.jaiswal.1088?_rdr' target="_blank">2</a></i><br />
                   <i className="fa fa-linkedin"> LinkedIn <a href='https://www.linkedin.com/in/yashkrmalik' target="_blank">1 </a><a href='https://www.linkedin.com/in/priyanshu-jaiswal-0a9622206' target="_blank">2</a></i><br />
                </p>
            </div>
        </div>
    )
}
