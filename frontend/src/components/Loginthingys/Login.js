import Backdrop from '../UserInterface/Backdrop';
import Modal from './Modal';
import { useState } from 'react';
import classes from './LoginLink.module.css'
import login from '../../assests/login.png'

const Login = (props) => {
    const [loginmodalisOpen, setloginmodalisOpen] = useState(false);

    function showloginModal(){
        setloginmodalisOpen(true);
    }

    function removeloginModal(){
        setloginmodalisOpen(false);
    }

    return (
        <div className={classes.login}>
            <strong onClick={showloginModal}>
                <span>Login</span>
                <img src={login} />
            </strong>
            {loginmodalisOpen ? <Modal removeloginModal={removeloginModal} /> : null}
            {loginmodalisOpen ? <Backdrop clickBackdrop={removeloginModal} /> : null}
        </div>
    );
}
 
export default Login;