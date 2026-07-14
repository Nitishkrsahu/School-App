const validateStudent = (req, res, next) => {
  const {
    firstName,
    lastName,
    rollNumber,
    admissionNumber,
    gender,
    dateOfBirth,
    class: className,
    section,
    academicYear,
    parentName,
    parentPhone,
  } = req.body;

  if (
    !firstName ||
    !lastName ||
    !rollNumber ||
    !admissionNumber ||
    !gender ||
    !dateOfBirth ||
    !className ||
    !section ||
    !academicYear ||
    !parentName ||
    !parentPhone
  ) {
    return res.status(400).json({
      success: false,
      message: "All required fields are mandatory.",
    });
  }

  next();
};

module.exports = validateStudent;