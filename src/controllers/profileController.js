const db = require('../db/database');

const getProfile = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const userResult = await db.query("SELECT * FROM users WHERE user_id = $1", [id]);
        const user = userResult.rows[0];

        const achievementsResult = await db.query("SELECT * FROM achievements WHERE user_id = $1", [id]);
        const userAchievements = achievementsResult.rows;

        res.render('viewProfile.ejs', {
            user,
            achievements: userAchievements
        });
    } catch (error) {
        console.error('Error fetching profile:', error);
        res.status(500).send('Error fetching profile');
    }
};

const getDirectory = async (req, res) => {
    try {
        const result = await db.query("SELECT * FROM users");
        const users = result.rows;
        res.render("alumniCards.ejs", { users });
    } catch (error) {
        console.error('Error fetching directory:', error);
        res.status(500).send('Error fetching directory');
    }
};

const getEditProfile = async (req, res) => {
    res.render('editProfile.ejs')
}

const editProfile = async (req, res) => {
    try {
        data = req.body
        console.log(data)
        const result = await db.query("UPDATE users SET email=$1,  name=$2, batch=$3, branch=$4, job_title=$5, location=$6 WHERE user_id = $7;", [data.email, data.name, data.batch, data.branch, data.job, data.location, req.session.user.user_id])
        res.render('editProfile.ejs')
    } catch (error) {
        console.error('Error fetching directory:', error);
        res.status(500).send('Error fetching directory');
    }

}


const filterDirectory = async (req, res) => {
    try {
        const {
            name,
            batch,
            job_title,
            location,
            branch,
            company
        } = req.query;

        // Construct WHERE conditions and values
        let conditions = [];
        let values = [];
        let i = 1; // placeholder index for $1, $2, etc.

        if (name) {
            conditions.push(`LOWER(name) LIKE LOWER($${i++})`);
            values.push(`%${name}%`);
        }
        if (batch) {
            conditions.push(`CAST(batch AS TEXT) LIKE $${i++}`);
            values.push(`%${batch}%`);
        }
        if (job_title) {
            conditions.push(`LOWER(job_title) LIKE LOWER($${i++})`);
            values.push(`%${job_title}%`);
        }
        if (location) {
            conditions.push(`LOWER(location) LIKE LOWER($${i++})`);
            values.push(`%${location}%`);
        }
        if (branch) {
            conditions.push(`LOWER(branch) LIKE LOWER($${i++})`);
            values.push(`%${branch}%`);
        }
        if (company) {
            conditions.push(`LOWER(company) LIKE LOWER($${i++})`);
            values.push(`%${company}%`);
        }

        const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';

        const query = `SELECT * FROM users ${whereClause} ORDER BY name ASC`;

        const result = await db.query(query, values);
        const users = result.rows;

        res.render('.\\partials\\alumni-cards.ejs', { users }); // partial to render filtered cards
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

module.exports = {
    getProfile,
    getDirectory,
    getEditProfile,
    editProfile,
    filterDirectory
}; 