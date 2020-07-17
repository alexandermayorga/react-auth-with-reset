const router = require('express').Router();
const { User } = require('../models/user');

router.get('/', function (req, res, next) {

    res.send('User Page!');

});


router.post('/login', async function (req, res, next) {
    let user;

    //Validate req.body vaules

    try{
        //Check if user email/username exists
        let user = await User.findOne({ 'email': req.body.email })
        if(!user) return res.status(400).send("User does not exist")
        
        //Check if password match
        const validPassword = await user.comparePasswordAsync(req.body.password);
        if (!validPassword) return res.status(401).end('Wrong password.')

        //create token
        user.genRefreshToken((err, user, refreshToken, accessToken) => {
            if (err) res.status(400).end("badRequest")

            //TODO: You must decide how you want to handle successful logins. 
            res
                .status(200)
                .json({ refreshToken, accessToken })

        })
    }
    catch{
        return res.status(404).send("There was a problem with the server")
    }


});





module.exports = router;