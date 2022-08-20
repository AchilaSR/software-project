const Users = require("../model/studentModel");
const bcrypt = require("bcrypt");

const studentControlers = {
  register: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await Users.findOne({ email });
      if (user) return res.status(400).json({ msg: "Email already exists" });

      const passwordEncrypt = await bcrypt.hash(password, 10); // encrypt the password

      const newUser = new Users({
        email,
        password: passwordEncrypt,
      });

      // res.json(newUser);

      await newUser.save();
      res.json({ msg: "Registration successful" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await Users.findOne({ email });
      if (!user) return res.status(400).json({ msg: "User doesn't exist" });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ msg: "Incorrect Password" });

      res.json({ msg: "Successfully login" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = studentControlers;
