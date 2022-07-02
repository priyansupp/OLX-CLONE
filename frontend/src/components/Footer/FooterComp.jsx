import React from 'react';
import classes from './FooterComp.module.css';


export default function FooterComp() {
    return (
        <div className={classes.FooterComp}>
            <div className={classes.left}>
                <p className={classes.Head}> Customer Care</p>
                <p className={classes.body}>
                    Phone : 9643763504 <br />
                    Email : getlost@gmail.com <br />
                    Fax : hihi@Fax <br />
                    OKKKK BYEEE
                </p>
            </div>
            <div className={classes.middle}>
                <p className={classes.Head}> About Us</p>
                <p className={classes.body}>
                    Bunch of web dev noob <br />
                    Don't call us, please!<br />
                    Engineers don't have social skills to communicate 
                </p>
            </div>
            <div className={classes.right}>
                <p className={classes.Head}> Follow Us</p>
                <p className={classes.body}>
                    <i className="fa fa-instagram"> Instagram</i><br />
                    <i className="fa fa-facebook"> Facebook</i><br />
                    <i className="fa fa-linkedin"> LinkedIn</i><br />
                </p>
            </div>
        </div>
    )
}
