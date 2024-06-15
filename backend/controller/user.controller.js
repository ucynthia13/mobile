const userservice = require('../service/user.service')

const registerUser = async(req, res) => {
    const { firstName, lastName, email, phone, role, password} = req.body
     try {
        const user = await userservice.createUser(firstName, lastName, email, phone, role, password)
        // console.log(user)
        res.status(200).json(user)
     } catch (error) {
        res.status(500).json({ message: error.message})
     } 
}

const loginUser = async(req, res) => {
    try {
        const { email, password} = req.body
        const response = await userservice.authenticateUser(email, password)
        // console.log(response)
        res.status(response.status).json({message: response.message, token: response.token})
    } catch (error) {
      console.log(error)
        res.status(500).json({message: error.message})
    }
}

const purchasePower = async(req, res) => {
  try {
    const { money, metern} = req.body
    const response = await userservice.buyPower(money, metern)
    res.status(response.status).json({message: response.message, token: response.uniqueToken})
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}

const validateUserToken = async(req, res) => {
  try {
    const { token } = req.body
    const response = userservice.validateToken(token)
    res.status(response.status).json({message: response.message})
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}


const retrieveUsers = async(req, res) => {
    try {
        const users = await userservice.getAllUsers()
        console.log(users)
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
}

const getUser = async (req, res) => {
    try {
        const userId = req.params.id
        const result = await userservice.getUserById(userId)
        if(result.status){
            res.status(result.status).json({message: result.message})
        }else{
            res.status(200).json(result)
        }

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const updateUser = async (req, res) => {
    const userId = req.params.id;
    const { newFirstName, newLastName,newEmail, newPhone } = req.body;
    try {
      const user = await userservice.updateUser(userId, newFirstName, newLastName,newEmail, newPhone );
      if (user.status) {
        res.status(user.status).json({ message: user.message });
      } else {
        res.status(200).json(user);
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  const deleteUser = async (req, res) => {
    const userId = req.params.id;
    try {
      const result = await userservice.deleteUser(userId);
      res.status(result.status).json({ message: result.message });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  module.exports = {
    registerUser, 
    loginUser,
    purchasePower,
    validateUserToken,
    getUser,
    retrieveUsers,
    updateUser,
    deleteUser
  }