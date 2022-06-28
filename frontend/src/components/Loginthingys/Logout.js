import React from "react";
import { useMsal } from "@azure/msal-react";
import login from '../../assests/login.png'
import classes from './Login.module.css'

function handleLogout(instance) {
    instance.logoutRedirect().catch(e => {
        console.error(e);
    });
}

/**
 * Renders a button which, when selected, will redirect the page to the logout prompt
 */
export const Logout = () => {
    const { instance } = useMsal();

    return (
        <button onClick={() => handleLogout(instance)}>
            <strong>
                <span>Logout</span>
            </strong>
        </button>
    );
}