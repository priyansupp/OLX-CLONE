import Login from "../Loginthingys/Login";
import classes from "./Headerthingys.module.css";
import { Link } from "react-router-dom";
import logo from "../../assests/Logo.png";
import search from "../../assests/SearchIcon.png";
import plus from "../../assests/plus.png";
import Profile from "../Profilethingys/Profile";
import { useState } from 'react';
import { useIsAuthenticated } from "@azure/msal-react";
import { Logout } from "../Loginthingys/Logout";
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import { loginRequest } from "../../configs/authConfigs";
import { ProfileData } from "../Loginthingys/ProfileData";
import { callMsGraph } from "../Loginthingys/graph";

// function ProfileContent() {
//     const { instance, accounts, inProgress } = useMsal();
//     const [accessToken, setAccessToken] = useState(null);

//     const name = accounts[0] && accounts[0].name;

//     function RequestAccessToken() {
//         const request = {
//             ...loginRequest,
//             account: accounts[0]
//         };

//         // Silently acquires an access token which is then attached to a request for Microsoft Graph data
//         instance.acquireTokenSilent(request).then((response) => {
//             setAccessToken(response.accessToken);
//         }).catch((e) => {
//             instance.acquireTokenPopup(request).then((response) => {
//                 setAccessToken(response.accessToken);
//             });
//         });
//     }

//     return (
//         <>
//             <h5 className="card-title">Welcome {name}</h5>
//             {accessToken ? 
//                 <p>Access Token Acquired!</p>
//                 :
//                 <button onClick={RequestAccessToken}>Request Access Token</button>
//             }
//         </>
//     );
// };

function ProfileContent() {
    const { instance, accounts } = useMsal();
    const [graphData, setGraphData] = useState(null);

    const name = accounts[0] && accounts[0].name;

    function RequestProfileData() {
        const request = {
            ...loginRequest,
            account: accounts[0]
        };

        // Silently acquires an access token which is then attached to a request for Microsoft Graph data
        instance.acquireTokenSilent(request).then((response) => {
            callMsGraph(response.accessToken).then(response => setGraphData(response));
        }).catch((e) => {
            instance.acquireTokenPopup(request).then((response) => {
                callMsGraph(response.accessToken).then(response => setGraphData(response));
            });
        });
    }

    return (
        <>
            <h5 className="card-title">Welcome {name}</h5>
            {graphData ? 
                <ProfileData graphData={graphData} />
                :
                <button onClick={RequestProfileData}>Request Profile Information</button>
            }
        </>
    );
};

const Headerbar = (props) => {
	const isAuthenticated = useIsAuthenticated();
	// const user = props.user;
	return (
		<div className={classes.header}>
			<div className={classes.flexcontainer}>
				<div className={classes.logo}>
					<Link to="/">
						<img src={logo} height={80} />
					</Link>
				</div>
				<div className={classes.hostel}>
					<form>
						<input
							className={classes.hostelbox}
							list="locations"
							id="hostel-locations"
							placeholder="Search for hostels within IITG"
						/>
						<datalist id="locations">
							<option value="Siang Hostel"></option>
							<option value="Lohit Hostel"></option>
							<option value="Disang Hostel"></option>
							<option value="Brahmaputra Hostel"></option>
							<option value="Kapili Hostel"></option>
							<option value="Kameng Hostel"></option>
							<option value="Umiam Hostel"></option>
							<option value="Barak Hostel"></option>
							<option value="Dihing Hostel"></option>
							<option value="Dhansiri Hostel"></option>
							<option value="Subhansiri Hostel"></option>
							<option value="Disang(Girl's wing) Hostel"></option>
						</datalist>
					</form>
				</div>
				<div className={classes.searchbar}>
					<form>
						<input
							className={classes.searchbarbox}
							list="items"
							id="item-names"
							placeholder="Find Mobile Phones, Books and more..."
						/>
						<datalist id="items">
							<option value="Mobiles"></option>
							<option value="Laptops">Laptops</option>
							<option value="Cycles">Cycles</option>
							<option value="Mattresses">Mattresses</option>
						</datalist>
						<button>
							<img src={search} />
						</button>
					</form>
				</div>
				<AuthenticatedTemplate>
					<ProfileContent />
				</AuthenticatedTemplate>
				<div className={classes.log_prof_button}>
					{isAuthenticated ? <Logout /> : <Login />}
				</div>
				{isAuthenticated ? (
					<>
					<Link to="/ads/post-ad">
						<div className={classes.sell}>
							<img src={plus} className={classes.sellimage}></img>
							<strong className={classes.sell_button}>SELL</strong>
						</div>
					</Link>
					</>
				) : (
					<>
						<div className={classes.sell}>
							<img src={plus} className={classes.sellimage}></img>
							<strong className={classes.sell_button}>SELL</strong>
						</div>
					</>
				)}
			</div>
			<AuthenticatedTemplate>
				<p>You are signed in!</p>
			</AuthenticatedTemplate>
			<UnauthenticatedTemplate>
				<p>You are not signed in! Please sign in.</p>
			</UnauthenticatedTemplate>
		</div>
	);
};

export default Headerbar;
