const db = require('../db.js');
const profileController = {};

profileController.getSkills = (req, res, next) => {
	const tutorID = [ req.params.tutorid ];
	const sqlQuery = `SELECT skill FROM "public"."tutors_skills" INNER JOIN skills on skill_id = skills._id gwhere tutor_id = $1`;
	db
		.query(sqlQuery, tutorID)
		.then((data) => {
			// console.log('DATA!!!', data.rows[0].skills);
			console.log('GIMME THAT DATA', data.rows);
			// res.locals.skills = [ ...data.rows[skill] ];
			const arr = data.rows;
			const result = [];
			arr.forEach((obj) => {
				result.push(obj.skill);
			});
			console.log(result);

			// console.log('DATA', [ data.rows.skill ]);
			res.locals.skills = result;
			return next();
		})
		.catch((err) => {
			return next({
				log: 'availabiltyController.getSkills ERROR: Error getting skills data from the database',
				message: {
					err: 'availabiltyController.getSkills: ERROR: Check server logs for details'
				}
			});
		});
};

profileController.updateSkills = (req, res, next) => {
	return next();
};

profileController.getCurrentAvailability = (req, res, next) => {
	// const currentSchedule = [ req.params.currentSchedule ];
	console.log('ROUND TWO BABY', res.locals.skills);
	const tutorID = [ req.params.tutorid ];
	console.log('MY TUTOR ID!!', tutorID);
	const sqlQuery = `SELECT date,  start_time AS  starting , end_time AS until FROM tutor_input_availability
	LEFT JOIN tutors
	ON tutors._id = $1
	LEFT JOIN skills
  ON skills._id = tutors._id;`;

	db.query(sqlQuery, tutorID).then((data) => {
		// console.log('DATA!!!', data.rows[0].skills);
		console.log('GIMME THAT DATA ROUND TWO', data.rows);
		res.locals.availability = data.rows;
		return next();
	});
};

profileController.addAvailability = (req, res, next) => {
	return next();
};

profileController.deleteAvailability = (req, res, next) => {
	return next();
};

module.exports = profileController;
