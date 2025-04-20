const { Pool } = require('pg');
require('dotenv').config();


const pool = new Pool({
    connectionString: process.env.DATABASE_URL, // Use connection string from cloud provider
    ssl: {
        rejectUnauthorized: false // Only if using SSL (common for cloud databases)
    }
});

module.exports = pool; // Export the pool so it can be used in other parts of the app
