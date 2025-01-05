const User = require('../models/user.model');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


exports.signIn = async (req, res) => {

    try {
        const { userName, email, password } = req.body;

        if (!userName || !email || !password) {
            return res.status(400)
                .json({ message: "All fields are required !" });
        }

        const userExist = await User.findOne({ $or: [{ userName }, { email }] });

        if (userExist) {
            return res.status(400)
                .json({ message: "User already registerd ! Please Login" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        if (!hashedPassword) {
            return res.status(400)
                .json({ message: "Password hashing failed !" });
        }

        const user = new User({
            userName,
            email,
            password: hashedPassword
        });

        const newUser = await user.save();
        if (!newUser) {
            return res.status(400)
                .json({ message: "User registration failed !" });
        }

        const accessToken = jwt.sign(
            { token: newUser._id },
            process.env.JWT_ACCESS_SECRET,
            { expiresIn: "7d" }
        );

        if (!accessToken) {
            return res.status(400)
                .json({ message: "Access token generation failed !" });
        }

        res.cookie("accessToken", accessToken, {
            maxAge: 1000 * 60 * 60 * 24 * 7,
            httpOnly: true,
            secure: true,
            sameSite: "none",
        });

        res.status(201)
            .json({
                message: `User Sign-in Successfully ! Welcome ${newUser.userName}`,
                data: newUser,
            });

    } catch (error) {
        res.status(400)
            .json({
                message: "Error in sign-in !",
                error: error.message
            });

    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400)
                .json({
                    message: "Email or Password are required !"
                })
        }

        const userExist = await User.findOne({ email });
        if (!userExist) {
            return res.status(400)
                .json({
                    message: "Please Signin First !"
                })
        }

        const passwordVaild = await bcrypt.compare(password, userExist.password);
        if (!passwordVaild) {
            return res.status(400)
                .json({
                    message: "Incorrect Credentials !"
                })
        }

        const accessToken = jwt.sign(
            { token: userExist._id },
            process.env.JWT_ACCESS_SECRET,
            { expiresIn: "7d" }
        )

        if (!accessToken) {
            return res.status(400)
                .json({
                    message: "Access token generation Failed in Login !"
                })
        }

        res.cookie("accessToken", accessToken, {
            maxAge: 1000 * 60 * 60 * 24 * 7,
            httpOnly: true,
            secure: true,
            sameSite: "none",
        })

        res.status(200)
            .json({
                message: `User Login Successfully ! Welcome ${userExist.userName}`,
                data: userExist,
            });
    } catch (error) {
        res.status(400)
            .json({
                message: "Error in Login",
                error: error.message
            })
    }
};

exports.userDetails = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400)
                .json({
                    message: "ID is required !"
                })
        }
        const user = await User.findById(id)
            .select("-password")
            .populate("followers")
            .populate({ path: "posts", populate: [{ path: "likes" }, { path: "comments" }, { path: "admin" }] })
            .populate({ path: "replies", populate: { path: "admin" } })
            .populate({ path: "reposts", populate: [{ path: "likes" }, { path: "comments" }, { path: "admin" }] });

        res.status(200)
            .json({
                message: "User Details Fetched !",
                user: user
            });

    } catch (error) {
        res.status(400)
            .json({
                message: "Error in User-Details !",
                error: error.message
            })
    }
};

exports.followUser = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400)
                .json({
                    message: "ID is required !"
                })
        }
        const userExist = await User.findById(id);
        if (!userExist) {
            return res.status(400)
                .json({
                    message: "User Don't Exist !"
                })
        }

        // pull = remove(pulling) in array
        if (userExist.followers.includes(req.user._id)) {
            await User.findByIdAndUpdate(userExist._id, {
                $pull: { followers: req.user._id },
            }, { new: true });
            return res.status(201)
                .json({
                    message: `Unfollowed ${userExist.userName}`
                })
        }
        await User.findByIdAndUpdate(userExist._id, {
            $push: { followers: req.user._id },
        }, { new: true });

        return res.status(201)
            .json({
                message: `Followed ${userExist.userName}`
            })

    } catch (error) {
        res.status(400)
            .json({
                message: "Error in FollowUser !",
                error: error.message
            })
    }
};
