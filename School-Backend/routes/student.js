const express = require('express');
const validateStudent = require('../middleware/validateStudent');
const verifyToken = require('../middleware/verifyToken');
const upload = require('../middleware/multerUpload');
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

router.post("/", upload.single('profileImage'), validateStudent, createStudent);
router.get("/", getAllStudents);
router.get("/:id", getStudentById);
router.put('/:id', upload.single('profileImage'), validateStudent, updateStudent);
router.delete('/:id', deleteStudent);

module.exports = router;