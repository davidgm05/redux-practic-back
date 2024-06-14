const User = require("../../models/userModel/userModel");


const getUsers = async (req, res) => {
    try {
        const users = await User.find()
        if (!users) {
            return res.status(204).json({
                status: "error",
                message: "no se encontraron usuarios"
            })
        }
        return res.status(200).json({
            status: "success",
            data: users,
        })
    } catch (error) {
        return res.status(400).json({
            status: "error",
            message: "no hay users",
            error: error.message,
        });
    }
}

const postUser = async (req, res) => {
    try {
        const {nombre, apellido} = req.body;
        const user = new User({
            nombre,
            apellido,
        }) 
        await user.save()
        res.status(200).json({
            status: "success",
            data: user,
        })
    } catch (error) {
        return res.status(400).json({
            status: "error",
            message: "no se pudo crear el usuario",
            error: error.message,
        });
    }
}

module.exports = { getUsers, postUser }