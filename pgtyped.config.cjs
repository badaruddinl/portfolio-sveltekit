require('dotenv').config();

/** @type {import('@pgtyped/query').Config} */
module.exports = {
	db: {
		connectionString: process.env.DATABASE_URL
		// Optional: Use SSL or not
		// ssl: true
	},
	srcDir: './src/lib/sql', // tempat file .sql
	failOnError: true,
	// Transform rule: generate .types.ts dari file .sql
	transforms: [
		{
			mode: 'sql',
			include: '**/*.sql',
			emitTemplate: './src/lib/sql/generated/{{name}}.types.ts'
		}
	]
};
