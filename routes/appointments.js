const { bookAppointment } = require('../controller/apoointment')

const router = require('express').Router()


router.post('/appointments', bookAppointment)


module.exports = router