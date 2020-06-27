const searchController = {};

searchController.getSkillsList = (req, res, next) => {
  const sqlQuery = 'SELECT skill from skills';
  console.log('Inside searchController');
  db
    .query(sqlQuery)
    .then((data) => {
      console.log(data.rows);
      res.locals = data.rows;
      return next();
    })
    .catch((err) => {
      return next({
				log: 'searchController.getSkillsList: ERROR: Error getting total skills list from the database',
				message: {
					err: 'searchController.getSkillsList: ERROR: Check server logs for details'
				}
			});
    });
};

// searchController.getSearchResults = (req, res, next) => {
//   const sqlQuery = ``
// }

module.exports = searchController;