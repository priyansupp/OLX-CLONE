import React, { useContext } from "react";
import { useMsal } from "@azure/msal-react";
import { UserIdContext } from "../../contexts/UserIdContext";
// import login from '../../assests/login.png'
// import classes from './Login.module.css'

function handleLogout(instance, setUserId) {
    instance.logoutRedirect().catch(e => {
        console.error(e);
    });
    setUserId('');
}

/**
 * Renders a button which, when selected, will redirect the page to the logout prompt
 */
export const Logout = () => {
    const { instance } = useMsal();
    const {setUserId} = useContext(UserIdContext);

    return (
        <button onClick={() => handleLogout(instance, setUserId)}>
            <strong>
                <span>Logout</span>
            </strong>
        </button>
    );
}