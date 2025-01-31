const db = require('../models/index');
const User = db.user;
const jwt = require('jsonwebtoken')
const SECRET = "cynthia"
let purchaseToken= ""

const createUser = async (firstName, lastName, email, phone, role, password) => {
    try {
        const user = await User.create({firstName, lastName, email, phone, role, password})

        return user;
    } catch (error) {
      console.log(error)
        throw new Error(`Error creating user: ${error}`)
    }
}

const authenticateUser = async(email, password) => {
    try {
        const retrievedUser = await User.findOne(
            {
                where: { email }
            }
        )
        if(!retrievedUser){
            return { status: 404, message: `User with ${email} not found`}
        }else{
            //validate  
            if(!retrievedUser.validPassword(password, retrievedUser.password)){
                return { status: 403, message: `Passwords don't match`}
            }else{
                //generate token
                console.log(retrievedUser.id)
                const token = jwt.sign({ id: retrievedUser.id, email: retrievedUser.email}, SECRET, { expiresIn: '1h' });
                //refresh token
                // const refreshToken = jwt.sign({  id: retrievedUser.getUserById}, {email: retrievedUser.email}, SECRET, {expiresIn: '7d'})
    
                return { status: 200, message: `User logged In Successfully`, token}
            }
        }
    } catch (error) {
      console.log(error)
        throw new Error(`Error logging in: ${error}`)
    }
}


const getAllUsers = async () => {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    throw new Error(`Error retrieving data: ${error}`);
  }
}; 

const getUserById = async (id) => {
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return { status: 404, message: `User with ${id} not found` };
    }
    return user;
  } catch (error) {
    throw new Error(`Error retrieving user: ${error}`);
  }
};

const updateUser = async(id, firstName, lastName, email, phone) => {
    try {
        const user = await User.findByPk(id)
        if(!user){
            return { status: 404, message: `User with ${id} not found`}
        }else{
            
            //update userdetails
            user.firstName = firstName || user.firstName
            user.lastName = lastName || user.lastName
            user.email = email || user.email
            user.phone =  phone || user.phone
            return await user.save()
        }
    } catch (error) {
        throw new Error(`Error updating user: ${error}`)
    }
}

const deleteUser = async (id) => {
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return { status: 404, message: `User with ${id} not found` };
    }
    await user.destroy();
    return { status: 202, message: `User ${id} deleted successfully` };
  } catch (error) {
    throw new Error(`User ${id} failed to be deleted`);
  }
};

const verifyToken = async(token) => {
  try {
    const decoded = jwt.verify(token, SECRET)
      return { valid: true, decoded}
  } catch (error) {
    return { valid: false, message: error.message   }
  }
}

module.exports = {
  createUser,
  authenticateUser,
  buyPower,
  validateToken,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  verifyToken
};
