const profileController = {};

// NAY & WAYNE - finish the getters
profileController.getSkills = (req, res, next) => {
  // const subjects = [req.params.subjects];
  console.log("LOOK", req);
  const sqQuery =
    'SELECT skill FROM "public"."tutors_skills" INNER JOIN skills on skill_id = skills._id where tutor_id = $1';
  db.query(sqlQuery, subjects)
    .then((data) => {
      console.log("DATA!!!", data.rows[0].skills);
      res.locals.subjects = data.rows[0].skills;
      return next();
    })
    .catch((err) => {
      return next({
        log:
          "availabiltyController.getSkills ERROR: Error getting skills data from the dabase",
        message: {
          err:
            "availabiltyController.getSkills: ERROR: Check server logs for details",
        },
      });
    });
  return next();
};

profileController.updateSkills = (req, res, next) => {
  return next();
};

profileController.getCurrentAvailability = (req, res, next) => {
  const currentSchedule = [req.params.currentSchedule];
  console.log(req.params.currentSchedule);
  const sqQuery = `SELECT date,  start_time AS  starting , end_time AS until , name , skill 
	FROM tutor_input_availability
	LEFT JOIN tutors
	ON tutors._id = $1
	LEFT JOIN skills
	ON skills._id = tutors._id;`;
  return next();
};

profileController.addAvailability = (req, res, next) => {
  return next();
};

profileController.deleteAvailability = (req, res, next) => {
  return next();
};

module.exports = profileController;
