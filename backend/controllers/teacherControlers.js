const Users = require('../model/teacherModel')
const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')



const teacherControlers = {
    register: async(req, res) =>{
        try {
            const {email, password} = req.body;

            const user = await Users.findOne({email});
            if(user) 
                return res.status(400).json({msg: "Email already exists"})

            const passwordEncrypt = await bcrypt.hash(password, 10); // encrypt the password
            
            const newUser = new Users({
                email, password: passwordEncrypt
            })

            // // res.json(newUser);

            await newUser.save(); // save in mongoDB

            // const accesstoken = createAccessToken({id: newUser._id})
            // const refreshtoken = createRefreshToken({id: newUser._id})

            // res.cookie('refreshtoken', refreshtoken, {
            //     htttpOnly: true,
            //     path: '/user/refresh_token'
            // })
            // res.cookie('dsadh','yagdsygd')

            // res.json({accesstoken})
            
            

            
            // res.json({msg: "Registration successful"})
            // res.json({msg: "Registration Sucessfull!"})
            res.json({msg: "Registration successful"})
        }   
        catch(err){
            return res.status(500).json({msg: err.message})
        }
    },


    login: async(req, res) => {
        try {
            const {email, password} = req.body;

            const user = await Users.findOne({email});
            if(!user) return res.status(400).json({msg: "User doesn't exist"});
            const isMatch = await bcrypt.compare(password, user.password)
            if(!isMatch) return res.status(400).json({msg: "Incorrect Password"});
            
            res.json({msg: "Successfully login"});
            // const accesstoken = createAccessToken({id: user._id})
            // const refreshtoken = createRefreshToken({id: user._id})

            // res.cookie('refreshtoken', refreshtoken, {
            //     httpOnly: true,
            //     path: 'user/refresh_token',
            // })

            // res.json({id:user._id})
            // // res.json({accesstoken});

        } catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    logout: async(req, res) => {
        try {
            res.clearCookie('refreshtoken', {path: 'user/refresh_token'});
            res.json({msg: "Successfully Logged Out"});

        } catch(err){
            return res.status(500).json({msg: err.message})
        }
    }}
// ,
//     refreshToken: (req, res) => {
//         try{
//             const ref_token = req.cookies.refreshtoken;
//             if(!ref_token) return res.status(400).json({msg: "Please Login or Register"})

//             jwt.verify(ref_token, process.env.SECRET_REFRESH_TOKEN, (err, user) => {
//                 if(err) return res.status(400).json({msg: "Please Login or Register"})
                
//                 const accesstoken = createAccessToken({id: user.id});

//                 res.json({accesstoken});
//             })
           
//             res.json({ref_token});


//         } catch(err){
//             return res.status(500).json({msg: err.message}) 
//         }
        
//     }, 
//     saveinfo: async (req,res) =>{
//         try {
//             const id = req.params.id;
//             const user = await Users.findById(id).select('-password')
//             if(!user) res.status(400).json({msg: "User doesn't exists"})
//             Object.assign(user,req.body);
//             user.save();
//             res.send({user})

            
//         } catch (err) {
//             return res.status(500).json({msg: err.message});
//         }
//     },
//     getUser: async (req, res) => {
//         try {
//             const id = req.params.id;
//             const user = await Users.findById(id).select('-password')
//             if(!user) res.status(400).json({msg: "User doesn't exists"})

//             res.json(user)
//         } catch (err) {
//             return res.status(500).json({msg: err.message});
//         }

//     },
//     getallusers: async (req,res) => {

//         try {
             
//             const us = await Users.find()
//             res.json(us);


//         } catch (err) {

//             return res.status(500).json({msg: err.message});

//         }
//     },
//     changep: async(req,res) =>{
//         try {
//             const {id,password, newpassword} = req.body;
//             const user = await Users.findById(id)

//             const isMatch = await bcrypt.compare(password, user.password)
//             if(!isMatch) return res.status(400).json({msg: "Incorrect Password"});

//             const passwordEncrypt = await bcrypt.hash(newpassword, 10); // encrypt the password
            
//             Object.assign(user,{password:passwordEncrypt}); 
//             user.save();  
//             res.json({msg: "Successfully change password"});
            
//         } catch (err) {
//             return res.status(500).json({msg: err.message});
//         }
//     },
//     delectacc: async(req,res) => {
//         try {
//             const id = req.params.id;
//             const user = await Users.findById(id)
//             await user.remove();
//             res.send({data:true});

//         } catch (err) {
//             return res.status(500).json({msg: err.message});
//         }
//     }
// }

// const createAccessToken = (user) => {
//     return jwt.sign(user, process.env.SECRET_ACCESS_TOKEN, {expiresIn: "1d"})
// }

// const createRefreshToken = (user) => {
//     return jwt.sign(user, process.env.SECRET_REFRESH_TOKEN, {expiresIn: "7d"})
// }

module.exports = teacherControlers