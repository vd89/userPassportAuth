/** @format */

// view Register Form
const register = (req, res) => {
	res.render('register');
};

//View Login Form
const login = (req, res) => {
	res.render('login');
};

// Registration or create

const create = async (req, res) => {
	res.json({ msg: req.body });
};
export { register, login, create };
