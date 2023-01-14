const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SALT_ROUNDS = 10;

module.exports.register = async (req, res) => {
  try {
    console.log("Hello from register", req.body);

    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    console.log("~ module.exports.register= ~ hashedPass", hashedPass);

    console.log("~ module.exports.register= ~ salt", salt);

    req.body.password = hashedPass; // replace the pass from the body with the hashed one

    await User.create(req.body);

    res.send({ success: true });
  } catch (error) {
    console.log("~ register error", error.message);

    res.send({ success: false, error: error.message });
  }
};

module.exports.login = async (req, res) => {
  try {
    console.log("Hello from login", req.body);

    const user = await User.findOne({
      email: req.body.email,
    }).select("-__v");
    console.log("user", user);

    if (!user) return res.send({ success: false, errorId: 1 });

    const passwordMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );
    console.log("Password Match", passwordMatch);

    if (passwordMatch) {
      const newUser = user.toObject();

      delete newUser.password;

      const token = jwt.sign({ id: user._id }, process.env.SECRET, {
        expiresIn: "1h",
      });

      res.cookie("hellofresh", token);

      res.send({ success: true, user: newUser });
    } else {
      return res.send({ success: false, errorId: 1 });
    }
  } catch (error) {
    console.log("Login error", error.message);
    res.send({ success: false, error: error.message });
  }
};
