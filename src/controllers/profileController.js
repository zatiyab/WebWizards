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

const editProfile = async (req, res) => {
    try {
        data = req.body
        console.log(data)
        const result = await db.query("UPDATE users SET email=$1, password=$2, name=$3, batch=$4, branch=$5, job_title=$6, location=$7 WHERE user_id = $8;", [data.email, data.password, data.name, data.batch, data.branch, data.job, data.location])
        res.render('editProfile.ejs')
    } catch (error) {
        console.error('Error fetching directory:', error);
        res.status(500).send('Error fetching directory');
    }

}

module.exports = {
    getProfile,
    getDirectory,
    editProfile
}; 