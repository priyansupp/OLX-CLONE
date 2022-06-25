import { Route, Routes } from "react-router-dom";
import Postad from "../../pages/Sellingpage/Postad";
import SignupPage from "../../pages/SignUpPage";
import React from 'react';
import HomePage from "../../pages/HomePage";
import AdDescPage from "../../pages/Ad Page/AdDescPage";

const Navigation = () => {
	const user = true;
	return (
		<>
			<Routes>
				<Route path="/ads">
					<Route path=":id" element={<AdDescPage />} />
				</Route>
				<Route path="/" element={<HomePage user={user} />} />
				<Route path="/ads/post-ad" element={<Postad />} />
				<Route path="/login" element={user ? <HomePage user={user} /> : <HomePage user={!user} />} />
				<Route path="/signup" element={<SignupPage />} />
			</Routes>
		</>
	);
};

export default Navigation;
