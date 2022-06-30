import classes from './profilePage.module.css'
import logo from "../../assests/Logo.png";
import { Link } from "react-router-dom";
import Pro_posts from './Pro_posts';


export default function profilePage(props) {
    return (
        <div>
            <div className={classes.headbar}>
                <Link to="/">
                    <img src={logo} />
                </Link>
            </div>
            <div className={classes.body}>
                <div className={classes.profilePart}>
                    <p className={classes.profileHead}> Your Data</p>
                    <p className={classes.name}>{props.name}</p>
                    <p className={classes.roll}>{props.roll}</p>
                    <p className={classes.mail}>{props.mail}</p>
                    <p className={classes.course}>{props.course}</p>
                </div>
                <div className={classes.AdPart}>
                    <p className={classes.AdHead}> Your Posts</p>
                    <Pro_posts />
                    <Pro_posts />
                    <Pro_posts />
                </div>
            </div>
        </div>

    )
}


profilePage.defaultProps = {
    name: 'Yash Kumar Malik',
    roll: '200123072',
    mail: 'y.malik@iitg.ac.in',
    course: 'B.Tech.'
};
