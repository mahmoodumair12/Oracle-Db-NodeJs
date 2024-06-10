const oracledb = require("oracledb");
require("dotenv").config();

//Fetch Students Data
async function fetchStudentsData() {
  try {
    const connection = await oracledb.getConnection({
      user: process.env.USER_NAME,
      password: process.env.PASSWORD,
      connectString: process.env.HOST_NAME,
    });

    const result = await connection.execute(
      "SELECT * FROM BSSDATA.V_BIC_STUDENTS"
    );

    return result;
  } catch (error) {
    return error;
  }
}
//Fetch Parents Data
async function fetchParentsData() {
  try {
    const connection = await oracledb.getConnection({
      user: process.env.USER_NAME,
      password: process.env.PASSWORD,
      connectString: process.env.HOST_NAME,
    });

    const result = await connection.execute(
      "SELECT * FROM BSSDATA.V_BIC_PARENTS"
    );

    return result;
  } catch (error) {
    return error;
  }
}

//Fetch Class-Subjects Data
async function fetchClassSubjectsData() {
  try {
    const connection = await oracledb.getConnection({
      user: process.env.USER_NAME,
      password: process.env.PASSWORD,
      connectString: process.env.HOST_NAME,
    });

    const result = await connection.execute(
      "SELECT * FROM BSSDATA.V_BIC_CLASS_SUBJECTS"
    );

    return result;
  } catch (error) {
    return error;
  }
}

//Fetch Subjects Data
async function fetchSubjectsData() {
  try {
    const connection = await oracledb.getConnection({
      user: process.env.USER_NAME,
      password: process.env.PASSWORD,
      connectString: process.env.HOST_NAME,
    });

    const result = await connection.execute(
      "SELECT * FROM BSSDATA.V_BIC_SUBJECTS"
    );

    return result;
  } catch (error) {
    return error;
  }
}

//Fetch Branches Data
async function fetchBranchesData() {
  try {
    const connection = await oracledb.getConnection({
      user: process.env.USER_NAME,
      password: process.env.PASSWORD,
      connectString: process.env.HOST_NAME,
    });

    const result = await connection.execute(
      "SELECT * FROM BSSDATA.V_BIC_BRANCHES"
    );

    return result;
  } catch (error) {
    return error;
  }
}

//Fetch Classes Data
async function fetchClassesData() {
  try {
    const connection = await oracledb.getConnection({
      user: process.env.USER_NAME,
      password: process.env.PASSWORD,
      connectString: process.env.HOST_NAME,
    });

    const result = await connection.execute(
      "SELECT * FROM BSSDATA.V_BIC_CLASSES"
    );

    return result;
  } catch (error) {
    return error;
  }
}

//Fetch std-groups Data
async function fetchStdGroupsData() {
  try {
    const connection = await oracledb.getConnection({
      user: process.env.USER_NAME,
      password: process.env.PASSWORD,
      connectString: process.env.HOST_NAME,
    });

    const result = await connection.execute(
      "SELECT * FROM BSSDATA.V_BIC_STD_GROUPS"
    );

    return result;
  } catch (error) {
    return error;
  }
}

//Fetch tchr-groups Data
async function fetchTchrGroupsData() {
  try {
    const connection = await oracledb.getConnection({
      user: process.env.USER_NAME,
      password: process.env.PASSWORD,
      connectString: process.env.HOST_NAME,
    });

    const result = await connection.execute(
      "SELECT * FROM BSSDATA.V_BIC_TCHR_GROUPS"
    );

    return result;
  } catch (error) {
    return error;
  }
}

//Fetch students data for grade entering
async function fetchData(branch, classs, subject) {
  try {
    const connection = await oracledb.getConnection({
      user: process.env.USER_NAME,
      password: process.env.PASSWORD,
      connectString: process.env.HOST_NAME,
    });

    const result = await connection.execute(
      `SELECT * FROM BSSDATA.V_BIC_STD_GROUPS WHERE BRANCH_NAME = '${branch}' AND CLASS_NAME = '${classs}' AND SUBJECT_NAME = '${subject}'`
    );
    return result;
  } catch (error) {
    return error;
  }
}

//Fetch single student record for grade entering
async function fetchStudentData(branch, classs, subject, student_id) {
  try {
    const connection = await oracledb.getConnection({
      user: process.env.USER_NAME,
      password: process.env.PASSWORD,
      connectString: process.env.HOST_NAME,
    });

    const result = await connection.execute(
      `SELECT * FROM BSSDATA.V_BIC_STD_GROUPS WHERE BRANCH_NAME = '${branch}' AND CLASS_NAME = '${classs}' AND SUBJECT_NAME = '${subject}' AND STUDENT_ID = ${student_id}`
    );
    return result;
  } catch (error) {
    return error;
  }
}

//Fetch single student record for grade entering
async function fetchBranchClassesData(branch) {
  try {
    const connection = await oracledb.getConnection({
      user: process.env.USER_NAME,
      password: process.env.PASSWORD,
      connectString: process.env.HOST_NAME,
    });

    const result = await connection.execute(
      `SELECT CLASS_NAME FROM BSSDATA.V_BIC_STD_GROUPS WHERE BRANCH_NAME = '${branch}' GROUP BY CLASS_NAME`
    );
    return result;
  } catch (error) {
    return error;
  }
}

//Fetch single student record for grade entering
async function fetchSingleClassSubjectsData(classs) {
  try {
    const connection = await oracledb.getConnection({
      user: process.env.USER_NAME,
      password: process.env.PASSWORD,
      connectString: process.env.HOST_NAME,
    });

    const result = await connection.execute(
      `SELECT SUBJECT_NAME FROM BSSDATA.V_BIC_STD_GROUPS WHERE CLASS_NAME = '${classs}' GROUP BY SUBJECT_NAME`
    );
    return result;
  } catch (error) {
    return error;
  }
}

//Save students grades into db
async function saveStdGrades(
  std_id,
  std_name,
  branch_name,
  class_name,
  subject_name,
  marks,
  grade,
  comment
) {
  try {
    const connection = await oracledb.getConnection({
      user: process.env.USER_NAME,
      password: process.env.PASSWORD,
      connectString: process.env.HOST_NAME,
    });

    let response = await connection.execute(
      `INSERT INTO BIC_STUDENT_GRADES (
        STUDENT_ID,
	      STUDENT_NAME,
	      BRANCH_NAME,
	      CLASS_NAME,
	      SUBJECT_NAME,
	      STUDENT_MARKS,
	      STUDENT_GRADE,
	      S_COMMENT
    ) VALUES (:1, :2, :3, :4, :5, :6, :7, :8)`,
      [
        `${std_id}`,
        `${std_name}`,
        `${branch_name}`,
        `${class_name}`,
        `${subject_name}`,
        `${marks}`,
        `${grade}`,
        `${comment}`,
      ],
      { autoCommit: true }
    );
    return response;
  } catch (error) {
    console.log(error);
    return { fail: "error" }; //Occur bcz Primary key constraint mean Student already available in db
  }
}

// Display student grades functions
//Fetch student grades record (class wise)
async function fetchStudentBranchClassGrades(branch, classs) {
  try {
    const connection = await oracledb.getConnection({
      user: process.env.USER_NAME,
      password: process.env.PASSWORD,
      connectString: process.env.HOST_NAME,
    });

    const result = await connection.execute(
      `SELECT * FROM BIC_STUDENT_GRADES WHERE BRANCH_NAME = '${branch}' AND CLASS_NAME = '${classs}'`
    );
    return result;
  } catch (error) {
    return error;
  }
}
//Fetch student grades record (subject wise)
async function fetchSubjectWiseStudentGrades(branch, classs, subject) {
  try {
    const connection = await oracledb.getConnection({
      user: process.env.USER_NAME,
      password: process.env.PASSWORD,
      connectString: process.env.HOST_NAME,
    });

    const result = await connection.execute(
      `SELECT * FROM BIC_STUDENT_GRADES WHERE BRANCH_NAME = '${branch}' AND CLASS_NAME = '${classs}' AND SUBJECT_NAME = '${subject}'`
    );
    return result;
  } catch (error) {
    return error;
  }
}

//Fetch students whose marks are already available in db
async function fetchStdMarksData(branch, classs, subject) {
  try {
    const connection = await oracledb.getConnection({
      user: process.env.USER_NAME,
      password: process.env.PASSWORD,
      connectString: process.env.HOST_NAME,
    });

    const result = await connection.execute(
      `SELECT STUDENT_ID FROM BIC_STUDENT_GRADES WHERE BRANCH_NAME = '${branch}' AND CLASS_NAME = '${classs}' AND SUBJECT_NAME = '${subject}'`
    );
    let arr = [];
    for (let index = 0; index < result.rows.length; index++) {
      arr.push(result.rows[index][0]);
    }
    return arr;
  } catch (error) {
    return error;
  }
}

/* GET all teachers of a particular branch.*/
async function fetchTchrData(branch_id) {
  try {
    const connection = await oracledb.getConnection({
      user: process.env.USER_NAME,
      password: process.env.PASSWORD,
      connectString: process.env.HOST_NAME,
    });

    const result = await connection.execute(
      `SELECT EMPLOYEE_NAME FROM BSSDATA.V_BIC_TCHR_GROUPS WHERE BRANCH_ID = '${branch_id}' GROUP BY EMPLOYEE_NAME`
    );

    return result;
  } catch (error) {
    return error;
  }
}

//Save teachers timetable data into db
async function saveTchrTimeTableData(
  branch,
  classs,
  subject,
  teacher,
  day,
  startTime,
  endTime
) {
  try {
    const connection = await oracledb.getConnection({
      user: process.env.USER_NAME,
      password: process.env.PASSWORD,
      connectString: process.env.HOST_NAME,
    });

    let response = await connection.execute(
      `INSERT INTO BIC_TEACHERS_TIMETABLE (
	      BRANCH_NAME,
	      CLASS_NAME,
	      SUBJECT_NAME,
	      TEACHER_NAME,
        WEEK_DAY,
        START_TIME,
        END_TIME

    ) VALUES (:1, :2, :3, :4, :5, :6, :7)`,
      [
        `${branch}`,
        `${classs}`,
        `${subject}`,
        `${teacher}`,
        `${day}`,
        `${startTime}`,
        `${endTime}`,
      ],
      { autoCommit: true }
    );
    return response;
  } catch (error) {
    console.log(error);
    return { fail: "error" }; //Occur bcz Primary key constraint mean Student already available in db
  }
}

/* GET all teachers of a particular branch.*/
async function fetchAllTeachersTimeTable() {
  try {
    const connection = await oracledb.getConnection({
      user: process.env.USER_NAME,
      password: process.env.PASSWORD,
      connectString: process.env.HOST_NAME,
    });

    const result = await connection.execute(
      `SELECT * FROM BIC_TEACHERS_TIMETABLE`
    );

    return result;
  } catch (error) {
    return error;
  }
}

/* GET single teacher timetable*/
async function fetchTeacherTimeTable(branch, teacher) {
  try {
    const connection = await oracledb.getConnection({
      user: process.env.USER_NAME,
      password: process.env.PASSWORD,
      connectString: process.env.HOST_NAME,
    });

    const result = await connection.execute(
      `SELECT * FROM BIC_TEACHERS_TIMETABLE WHERE BRANCH_NAME = '${branch}' AND TEACHER_NAME = '${teacher}'`
    );

    return result;
  } catch (error) {
    return error;
  }
}

/* delete single teacher timetable*/
async function deleteSingleTeacherTimeTable(branch, teacher) {
  try {
    const connection = await oracledb.getConnection({
      user: process.env.USER_NAME,
      password: process.env.PASSWORD,
      connectString: process.env.HOST_NAME,
    });

    const result = await connection.execute(
      `DELETE FROM BIC_TEACHERS_TIMETABLE WHERE BRANCH_NAME = '${branch}' AND TEACHER_NAME = '${teacher}'`
    );

    return result;
  } catch (error) {
    return error;
  }
}

module.exports = {
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
};
