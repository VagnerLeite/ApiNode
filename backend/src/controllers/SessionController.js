const User = require('../models/User');

// index, show, stores, update, destroy
module.exports = {
    async store(req, res){
        const { email } = req.body;

        let user = await User.findOne({ email });
        // Verificação se ja existe Usuario
        if(!user){
            user = await User.create({ email });
        }

        return res.json(user);
    }
};