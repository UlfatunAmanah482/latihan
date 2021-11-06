const User = require('../models/article')

const home = async (req, res) => {
    const title = 'Hello World'
    const subTitle = 'Welcome to the world'

    res.render('index', {title, subTitle})
}

const about = async (req, res) => {
    res.render('about', { title: 'About'})
}

const users = async (req, res) => {
    const users = await User.findAll()
    
    return res.render('users', {
        users,
        title: "Users"
    })
}

module.exports = {
    home,
    about,
    users
}