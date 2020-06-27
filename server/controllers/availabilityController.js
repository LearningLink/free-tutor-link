const db = require('../db.js');

const availabilityController = {};

availabilityController.getSubjectID = (req, res, next) => {
	// convert string subjectWord into ID, then pass to the next controller, getTutors
	const subjectWord = [ req.params.subject ];
	const sqlQuery = `SELECT _id FROM skills WHERE skill = $1`;
	db
		.query(sqlQuery, subjectWord)
		.then((data) => {
			console.log('DATA!!!', data.rows[0]._id);
			res.locals.skillid = data.rows[0]._id;
			return next();
		})
		.catch((err) => {
			return next({
				log: 'availabiltyController.getSubjectID: ERROR: Error getting skill data from the dabase',
				message: {
					err: 'availabiltyController.getSubjectID: ERROR: Check server logs for details'
				}
			});
		});
};

availabilityController.getTutors = (req, res, next) => {
	const subjectID = [ res.locals.skillid ];
	const sqlQuery = `SELECT name, skill, date, start_time AS start , end_time AS end , photo, linkedinprofile FROM tutors_skills INNER JOIN tutor_input_availability ON tutors_skills.tutor_id = tutor_input_availability.tutor_id LEFT JOIN tutors ON tutors._id = tutors_skills.tutor_id INNER JOIN  skills ON skills._id = $1 AND skills._id = tutors_skills.skill_id;`;
	console.log('LOOK!', subjectID);
	db
		.query(sqlQuery, subjectID)
		.then((data) => {
			console.log('DATA!!!', data.rows);
			res.locals.tutors = data.rows;
			return next();
		})
		.catch((err) => {
			return next({
				log: 'availabiltyController.getTutor: ERROR: Error getting tutor data from the dabase',
				message: { err: 'availabiltyController.getTutor: ERROR: Check server logs for details' }
			});
		});
};

module.exports = availabilityController;
