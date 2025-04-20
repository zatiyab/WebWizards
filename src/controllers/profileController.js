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


module.exports = {
    getProfile,
    getDirectory,
    getEditProfile,
    editProfile
}; 