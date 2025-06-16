const express = require('express')
const { getallEmployee, createEmployee, updateEmployee, getEmployee, deleteEmployee } = require('../controllers/employeeController')
const upload = require('../middleware/imageUpload')
const router = express.Router()

router.route('/').get(getallEmployee).post(upload.single('image'),createEmployee)
router.route('/:id').patch(upload.single('image'), updateEmployee).get(getEmployee).delete(deleteEmployee)

module.exports = router