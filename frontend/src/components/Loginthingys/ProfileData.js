import React, { useContext, useEffect } from "react";
import { SellerIdContext } from "../../contexts/SellerIdContext";
/**
 * Renders information about the user obtained from Microsoft Graph
 */
export const ProfileData = (props) => {

    const {setSellerId} = useContext(SellerIdContext);

    useEffect(() => {
        const postUser = async () => {
            const response = await fetch('http://localhost:4000/auth/postUser', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    Name: props.graphData.givenName,
                    roll_no: props.graphData.surname,
                    email: props.graphData.userPrincipalName,
                    microsoftId: props.graphData.id
                })
            });
            
            // const data = await response.json();
            // console.log(data);
            if(response.ok){
                const data = await response.json();
                console.log(data);
            } else {
                console.log("Error in posting user data in database.");
            }
        }
        postUser();
        setSellerId(props.graphData.id);
        console.log(props.graphData.id);
    }, [props.graphData]);

    return (
        <div id="profile-div">
            {/* <p><strong>First Name: </strong> {props.graphData.givenName}</p>
            <p><strong>Last Name: </strong> {props.graphData.surname}</p>
            <p><strong>Email: </strong> {props.graphData.userPrincipalName}</p>
            <p><strong>Id: </strong> {props.graphData.id}</p>
            <p><strong>Programme: </strong> {props.graphData.jobTitle}</p> */}
        </div>
    );
};