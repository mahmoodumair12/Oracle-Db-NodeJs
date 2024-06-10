const {
  fetchStudentsData,
  fetchParentsData,
  fetchClassSubjectsData,
  fetchSubjectsData,
  fetchBranchesData,
  fetchClassesData,
  fetchStdGroupsData,
  fetchTchrGroupsData,
  fetchData,
  fetchStudentData,
  fetchBranchClassesData,
  fetchSingleClassSubjectsData,
  saveStdGrades,
  fetchStudentBranchClassGrades,
  fetchSubjectWiseStudentGrades,
  fetchStdMarksData,
  fetchTchrData,
  saveTchrTimeTableData,
  fetchAllTeachersTimeTable,
  fetchTeacherTimeTable,
  deleteSingleTeacherTimeTable,
} = require("../db");

//Get Students Data
const getStudents = (req, res) => {
  //   db.execute(`select * from xyz`);
  fetchStudentsData()
    .then((data) => {
      res.send(data.rows);
    })
    .catch((err) => {
      console.log(err);
    });
};

//Fetch Parents Data
const getParents = (req, res) => {
  fetchParentsData()
    .then((data) => {
      res.send(data.rows);
    })
    .catch((err) => {
      console.log(err);
    });
};

//Fetch class Subjects Data
const getClassSubjects = (req, res) => {
  fetchClassSubjectsData()
    .then((data) => {
      res.send(data.rows);
    })
    .catch((err) => {
      console.log(err);
    });
};

//Fetch Subjects Data
const getSubjects = (req, res) => {
  fetchSubjectsData()
    .then((data) => {
      res.send(data.rows);
    })
    .catch((err) => {
      console.log(err);
    });
};

//Fetch Branches Data
const getBranches = (req, res) => {
  fetchBranchesData()
    .then((data) => {
      res.send(data.rows);
    })
    .catch((err) => {
      console.log(err);
    });
};

//Fetch classes Data
const getClasses = (req, res) => {
  fetchClassesData()
    .then((data) => {
      res.send(data.rows);
    })
    .catch((err) => {
      console.log(err);
    });
};

//Fetch Std-Groups Data
const getStdGroups = (req, res) => {
  fetchStdGroupsData()
    .then((data) => {
      res.send(data.rows);
    })
    .catch((err) => {
      console.log(err);
    });
};

//Fetch tchr-Groups Data
const getTchrGroups = (req, res) => {
  fetchTchrGroupsData()
    .then((data) => {
      res.send(data.rows);
    })
    .catch((err) => {
      console.log(err);
    });
};

//Fetch Students Data for grade entering
const getData = (req, res) => {
  const branch = req.body.branch;
  const classs = req.body.classs;
  const subject = req.body.subject;
  fetchData(branch, classs, subject)
    .then((data) => {
      res.send(data.rows);
    })
    .catch((err) => {
      console.log(err);
    });
};

//Fetch single Student record for grade entering
const getStudentData = (req, res) => {
  const branch = req.body.branch;
  const classs = req.body.classs;
  const subject = req.body.subject;
  const student_id = req.body.studentId;
  fetchStudentData(branch, classs, subject, student_id)
    .then((data) => {
      res.send(data.rows);
    })
    .catch((err) => {
      console.log(err);
    });
};

/* GET all classes of a particular branch. */
const getBranchClasses = (req, res) => {
  const branch = req.body.branch;
  fetchBranchClassesData(branch)
    .then((data) => {
      res.send(data.rows);
    })
    .catch((err) => {
      console.log(err);
    });
};

/* GET all subjects of a particular class. */
const getSingleClassSubjects = (req, res) => {
  const classs = req.body.classs;
  fetchSingleClassSubjectsData(classs)
    .then((data) => {
      res.send(data.rows);
    })
    .catch((err) => {
      console.log(err);
    });
};

/* Save STudent grades into db */
const saveStudentGrades = (req, res) => {
  const std_id = req.body.std_id;
  const std_name = req.body.std_name;
  const branch_name = req.body.branch_name;
  const class_name = req.body.class_name;
  const subject_name = req.body.subject_name;
  const marks = req.body.marks;
  const grade = req.body.grade;
  const comment = req.body.comment;

  saveStdGrades(
    std_id,
    std_name,
    branch_name,
    class_name,
    subject_name,
    marks,
    grade,
    comment
  )
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

// Display student grades functions

/* GET class wise all students grades based on branch and class*/
const getStudentBranchClassGrades = (req, res) => {
  const branch = req.body.branch;
  const classs = req.body.classs;
  fetchStudentBranchClassGrades(branch, classs)
    .then((data) => {
      res.send(data.rows);
    })
    .catch((err) => {
      console.log(err);
    });
};
/* GET subject wise all students grades based on branch and class and subjects*/
const getSubjectWiseStudentGrades = (req, res) => {
  const branch = req.body.branch;
  const classs = req.body.classs;
  const subject = req.body.subject;
  fetchSubjectWiseStudentGrades(branch, classs, subject)
    .then((data) => {
      res.send(data.rows);
    })
    .catch((err) => {
      console.log(err);
    });
};
//Fetch students whose marks are already available in db
const getStdMarksData = (req, res) => {
  const branch = req.body.branch;
  const classs = req.body.classs;
  const subject = req.body.subject;
  fetchStdMarksData(branch, classs, subject)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
/* GET all teachers of a particular branch.*/
const getTchrData = (req, res) => {
  const branch = req.body.branch;

  let branch_id;

  if (branch === "BIC Lahore Campus") {
    branch_id = 4226;
  } else if (branch === "BIC Faisalabad Campus") {
    branch_id = 4231;
  } else if (branch === "BIC Islamabad Campus") {
    branch_id = 4221;
  } else {
    branch_id = 0;
  }

  fetchTchrData(branch_id)
    .then((data) => {
      res.send(data.rows);
    })
    .catch((err) => {
      console.log(err);
    });
};

//Fetch students whose marks are already available in db
const saveTchrTimeTable = (req, res) => {
  const branch = req.body.branch;
  const classs = req.body.classs;
  const subject = req.body.subject;
  const teacher = req.body.teacher;
  const day = req.body.day;
  const startTime = req.body.startTime;
  const endTime = req.body.endTime;

  saveTchrTimeTableData(
    branch,
    classs,
    subject,
    teacher,
    day,
    startTime,
    endTime
  )
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

//Fetch time table of all teachers
const getAllTchrTimeTable = (req, res) => {
  fetchAllTeachersTimeTable()
    .then((data) => {
      res.send(data.rows);
    })
    .catch((err) => {
      console.log(err);
    });
};

//Fetch time table of all teachers
const getTchrTimeTable = (req, res) => {
  const branch = req.body.branch;
  const teacher = req.body.teacher;

  fetchTeacherTimeTable(branch, teacher)
    .then((data) => {
      res.send(data.rows);
    })
    .catch((err) => {
      console.log(err);
    });
};

//Fetch time table of all teachers
const deleteTchrTimeTable = (req, res) => {
  const branch = req.body.branch_name;
  const teacher = req.body.teacher_name;

  deleteSingleTeacherTimeTable(branch, teacher)
    .then((data) => {
      res.send(data.rows);
      console.log(data);
      console.log(data.rows);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
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
};
