import Bodyforsellingpage from './Bodyforsellingpage';
import logo from '../../assests/Logo.png';
import classes from './Postad.module.css'
import { Link } from "react-router-dom";

const Postad = () => {
    return (
        <div>
            <header>
                <div className={classes.image}>
                    <Link to="/">
                        <img src={logo} />
                    </Link>
                </div>
            </header>
            <main>
                <Bodyforsellingpage />
            </main>
        </div>
    );
}

export default Postad;
