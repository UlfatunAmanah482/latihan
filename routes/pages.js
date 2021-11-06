const router = require('express').Router()
const page = require('../controllers/pagesController')

router.get('/', page.home)
router.get('/about', page.about)
router.get('/users', page.users)

module.exports = router