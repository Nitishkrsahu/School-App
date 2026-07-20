const express = require('express');
const validateStudent = require('../middleware/validateStudent');
const {
    createStudent,
    getAllStudents,
    getStudentById,
    updateStudent,
    deleteStudent
} = require('../controllers/studentControllers')

const router = express.Router();

router.post("/", validateStudent, createStudent);
router.get("/", getAllStudents);
router.get("/:id", getStudentById);
router.put('/:id', validateStudent, updateStudent);
router.delete('/:id', deleteStudent);

module.exports = router;