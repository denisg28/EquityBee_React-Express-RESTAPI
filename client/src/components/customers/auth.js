
const router = require('express').Router();

router.post('/api/customers/register', async (req,res) =>
{
    const user = ({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    try{
        const savedUser = await user.save();
        res.send(savedUser);
    }catch(err){
        res.status(400).send(err);
    }
});


module.exports = router;