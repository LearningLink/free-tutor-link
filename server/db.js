const { Pool } = require('pg');

const PG_URI = 'postgres://pbxpcmxr:jfFOHyIzqG5XBjISQWX4UKDPjj3GLGyh@ruby.db.elephantsql.com:5432/pbxpcmxr';

const pool = new Pool({
	connectionString: PG_URI
});

module.exports = {
	query: (text, params, callback) => {
		console.log('executed query', text);
		return pool.query(text, params, callback);
	}
};
