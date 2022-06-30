import React, { useContext } from "react";
import { useMsal } from "@azure/msal-react";
import { SellerIdContext } from "../../contexts/SellerIdContext";
// import login from '../../assests/login.png'
// import classes from './Login.module.css'

function handleLogout(instance, setSellerId) {
    instance.logoutRedirect().catch(e => {
        console.error(e);
    });
    setSellerId('');
}

/**
 * Renders a button which, when selected, will redirect the page to the logout prompt
 */
export const Logout = () => {
    const { instance } = useMsal();
    const {setSellerId} = useContext(SellerIdContext);

    return (
        <button onClick={() => handleLogout(instance, setSellerId)}>
            <strong>
                <span>Logout</span>
            </strong>
        </button>
    );
}