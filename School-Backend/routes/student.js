const express = require('express');
const validateStudent = require('../middleware/validateStudent');
const createStudent = require('../controllers/studentControllers');
const getStudentById = require('../controllers/studentControllers');
const getAllStudents = require('../controllers/studentControllers');

const router = express.Router();

router.post("/", validateStudent, createStudent);
router.get("/", getStudentById);
router.get("/", getAllStudents);

module.exports = router;