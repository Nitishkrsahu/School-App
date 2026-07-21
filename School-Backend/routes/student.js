const express = require('express');
const validateStudent = require('../middleware/validateStudent');
const verifyToken = require('../middleware/verifyToken');
const {
    createStudent,
    getAllStudents,
    getStudentById,
    updateStudent,
    deleteStudent
} = require('../controllers/studentControllers')

const router = express.Router();

// Apply verifyToken middleware to all routes
router.use(verifyToken);

router.post("/", validateStudent, createStudent);
router.get("/", getAllStudents);
router.get("/:id", getStudentById);
router.put('/:id', validateStudent, updateStudent);
router.delete('/:id', deleteStudent);

module.exports = router;