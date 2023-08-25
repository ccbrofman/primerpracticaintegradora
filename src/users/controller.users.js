const {Router} = require ('express') 
const Users = require('../models/user.model')
const router= Router()



router.get ('/create',( req,res) =>{
    res.render ('createUser.handlebars')
    
    })


router.get ('/', async (req,res) =>{
const users = await Users.find ()
res.json ({message: users   })


})


router.post ('/', async (req,res )=>{
const {name, lastname, email, password}=req.body
    UsersDao.create (req.body)
    const newUserInfo={
        name,
        lastname,
        email,
        password 


    }
    const newUser = await Users.create (newUserInfo)
    res.json ({message: newUser})
})


module.exports= router