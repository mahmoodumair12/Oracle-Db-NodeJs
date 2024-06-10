var express = require("express");
const {
  getStudents,
  getParents,
  getClassSubjects,
  getSubjects,
  getBranches,
  getClasses,
  getStdGroups,
  getTchrGroups,
  getData,
  getStudentData,
  getBranchClasses,
  getSingleClassSubjects,
  saveStudentGrades,
  getStudentBranchClassGrades,
  getSubjectWiseStudentGrades,
  getStdMarksData,
  getTchrData,
  saveTchrTimeTable,
  getAllTchrTimeTable,
  getTchrTimeTable,
  deleteTchrTimeTable,
} = require("../controller");
var router = express.Router();

/* GET Students.*/
router.get("/students", getStudents);

/* GET Parents.*/
router.get("/parents", getParents);

/* GET Class-Subjects.*/
router.get("/classsubjects", getClassSubjects);

/* GET Subjects.*/
router.get("/subjects", getSubjects);

/* GET Branches.*/
router.get("/branches", getBranches);

/* GET Classes.*/
router.get("/classes", getClasses);

/* GET std-groups.*/
router.get("/stdgroups", getStdGroups);

/* GET all classes of a particular branch. */
router.post("/branch_classes", getBranchClasses);

/* GET all subjects of a particular class. */
router.post("/class_subjects", getSingleClassSubjects);

/* GET teacher groups.*/
router.get("/tchrgroups", getTchrGroups);

/* GET Students for grade entering.*/
router.post("/data", getData);

/* GET record of single Student for grade entering.*/
router.post("/student", getStudentData);

/* GET all teachers of a particular branch.*/
router.post("/tchr", getTchrData);

/* Save teachers time table into db*/
router.post("/tchr_timetable", saveTchrTimeTable);

/* Save grades single Student into db.*/
router.post("/std_grades", saveStudentGrades);

/* Get all teachers timetable.*/
router.get("/get_allTchrTimeTable", getAllTchrTimeTable);

/* Get a single teacher timetable.*/
router.post("/get_tchrTimeTable", getTchrTimeTable);

/* delete single teacher timetable.*/
router.post("/dlt_tchr_timetable", deleteTchrTimeTable);

// Display Students Grades endpoints
/* Show student grades based on branch and class*/
router.post("/class_wise_std_grades", getStudentBranchClassGrades);
router.post("/subject_wise_std_grades", getSubjectWiseStudentGrades);

//Fetch students whose marks are already available in db
router.post("/fetch_std_marks", getStdMarksData);
router.get("/dummy", (req, res) => {
  return res.send({ data: "Hello from server" });
});

module.exports = router;
