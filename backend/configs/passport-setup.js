const passport = require("passport");
const MicrosoftStrategy = require("passport-microsoft").Strategy;
const User = require("../models/user-model");


passport.serializeUser((user, done) => {
    done(null, user.id);            // it is the mongodb id of the user
})

passport.deserializeUser((id, done) => {        // mongodb id
    User.findById(id).then(user => {
        done(null, user);
    });
})



passport.use(
	new MicrosoftStrategy(
		{
			clientID: "1202a425-bb3c-4141-ace6-f1b7b67b5730",
			clientSecret: "BQJ8Q~yT24MWUHAM56iD2nkYgJ7.nyPwAyIzmdh7",
			callbackURL: "http://localhost:3000",
			scope: ["User.ReadBasic.All"],
			prompt: "select_account",
		},
		(accessToken, refreshToken, profile, done) => {
			console.log("Passport callback function fired.");
			// console.log(profile);
            // this profile.id is microsoft user's profile id fetched from microsoft profile and is different from mongodb database id given by mongo to each document.
			User.findOne({microsoftId: profile.id}).then((currentuser) => {
                if(currentuser) {
                    console.log("User is : ", currentuser);
                    done(null, currentuser);
                } else {
                    User.create({
                        microsoftId: profile.id,
                        Name: profile.displayName,
                        email: profile.emails[0].value,
                        roll_no: profile.name.familyName
                    }).then(newUser => {
                        console.log("New user has been created, ", newUser);
                        done(null, newUser);
                    })
                }
            });

		}
	)
);
