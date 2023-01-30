const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwt = require("jsonwebtoken");
const emailDynamic = require("../utilities/emailDynamic");

const SALT_ROUNDS = 10;

module.exports.register = async (req, res) => {
  try {
    console.log("Hello from register", req.body);

    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    console.log("~ module.exports.register= ~ hashedPass", hashedPass);

    console.log("~ module.exports.register= ~ salt", salt);

    req.body.password = hashedPass; // replace the pass from the body with the hashed one

    const user = await User.create(req.body);
    const token = jwt.sign({ id: user._id }, process.env.SECRET, {
      expiresIn: "1h",
    });

    emailDynamic(token);

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

export const emailConfirm = async (req, res) => {
  try {
    console.log("🚀 ~ hello emailConfirm ", req.body);

    const token = req.body.token;

    const decoded = jwt.verify(token, process.env.SECRET);
    console.log("🚀 ~ emailConfirm ~ decoded", decoded);

    const user = await User.findByIdAndUpdate(
      { _id: decoded.id },
      { verified: true },
      { new: true }
    );
    console.log("🚀 ~ emailConfirm ~ user", user);

    res.send({ success: true });
  } catch (error) {
    console.log("🚀 ~ emailConfirm ~ error", error.message);

    res.send({ success: false, error: error.message });
  }
};

export const forgotPass = async (req, res) => {
  try {
    console.log("🚀 ~ hello forgotPass ", req.body);

    const user = await User.findOne({
      email: req.body.email,
    });
    console.log("🚀 ~ forgotPass ~ user", user);

    const token = jwt.sign({ id: user._id }, process.env.SECRET, {
      expiresIn: "1h",
    });

    emailDynamic(token, "forgotpass");

    res.send({ success: true });
  } catch (error) {
    console.log("🚀 ~ forgotPass ~ error", error.message);

    res.send({ success: false, error: error.message });
  }
};

export const changePass = async (req, res) => {
  try {
    console.log("🚀 ~ hello changePass ", req.body);

    const decoded = jwt.verify(req.body.token, process.env.SECRET);
    console.log("🚀 ~ changePass ~ decoded", decoded);

    const salt = await bcrypt.genSalt(SALT_ROUNDS);

    const hashedPass = await bcrypt.hash(req.body.password, salt);
    console.log("🚀 ~ changePass ~ hashedPass", hashedPass);

    const updated = await User.findByIdAndUpdate(
      decoded.id,
      { password: hashedPass },
      { new: true }
    );
    console.log("🚀 ~ changePass ~ updated", updated);

    res.send({ success: true });
  } catch (error) {
    console.log("🚀 ~ changePass ~ error", error.message);

    res.send({ success: false, error: error.message });
  }
};

export const logout = async (req, res) => {
  try {
    console.log("🚀 ~ hello logout ");

    res.clearCookie("hellofresh");

    res.send({ success: true });
  } catch (error) {
    console.log("🚀 ~ logout ~ error", error.message);

    res.send({ success: false, error: error.message });
  }
};
