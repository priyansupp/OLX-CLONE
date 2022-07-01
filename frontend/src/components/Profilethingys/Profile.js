import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logout } from '../Loginthingys/Logout';
import classes from './Profile.module.css';


const Profile = () => {

    const [clicked, setClicked] = useState(0);

    const handleClick = () => {
        if(clicked) setClicked(0);
        else setClicked(1);
    }

    return (
        <div>
            <p className={classes.list} onClick={handleClick}>Profile</p>

            {clicked ? 
            <ul>
                <li className={classes.item}>
                    <Link to='/profile-page'>
                    View Profile
                    </Link>
                </li>
                <li className={classes.item}><Logout /></li>
            </ul> : null}
            
        </div>
    );
}
 
export default Profile;