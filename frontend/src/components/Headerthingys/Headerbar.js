import Login from "../Loginthingys/Login";
import classes from "./Headerthingys.module.css";
import { Link } from "react-router-dom";
import logo from "../../assests/Logo.png";
import search from "../../assests/SearchIcon.png";
import plus from "../../assests/plus.png";
import Profile from "../Profilethingys/Profile";
import Modal from "../Loginthingys/Modal";
import Backdrop from "../UserInterface/Backdrop";
import { useState } from 'react';

const Headerbar = (props) => {
	const [loginmodalisOpen, setloginmodalisOpen] = useState(false);

    function showloginModal(){
        setloginmodalisOpen(true);
    }

    function removeloginModal(){
        setloginmodalisOpen(false);
    }
	const user = props.user;
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
				<div className={classes.log_prof_button}>
					{user ? <Profile /> : <Login />}
				</div>
				{user ? (
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
						<div onClick={showloginModal} className={classes.sell}>
							<img src={plus} className={classes.sellimage}></img>
							<strong className={classes.sell_button}>SELL</strong>
						</div>
						{loginmodalisOpen ? <Modal removeloginModal={removeloginModal} /> : null}
            			{loginmodalisOpen ? <Backdrop clickBackdrop={removeloginModal} /> : null}
					</>
				)}
			</div>
		</div>
	);
};

export default Headerbar;
