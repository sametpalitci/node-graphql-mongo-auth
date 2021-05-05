const UserSchema = require('../../models/User.js')
const bcrypt = require('bcryptjs');
const auth = async(args) => {
    const checkUser = await UserSchema.findOne({ username: args.username });
    if (!checkUser) {
        return new Error('This User can not find!');
    }
    if (bcrypt.compareSync(args.password, checkUser.password)) {
        return checkUser;
    } else {
        return new Error('Username or Password is wrong!');
    }
}

const register = async(args) => {
    const checkUser = await UserSchema.findOne({ username: args.username });
    if (checkUser) {
        return new Error('This User already use!');
    }
    const hashSalt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(args.password, hashSalt);
    const potantialUser = {
        username: args.username,
        password: hashPassword
    }
    const createdUser = await UserSchema.create(potantialUser);
    console.log(createdUser)
    return createdUser;
}

module.exports = {
    auth,
    register
}