function ensureAuth(req, res, next) {
	if (req.isAuthenticated()) {
		console.log("Authenticated user in ensure auth");
		return next();
	} else {
		res.status(401).json("You must login to access the requested resource");
	}
}

function ensureGuest(req, res, next) {
	if (req.isAuthenticated()) {
		console.log("Authenticated user in ensure guest");
		res.status(200).json(req.user);
	} else {
		return next();
	}
}

module.exports = { ensureAuth, ensureGuest };
