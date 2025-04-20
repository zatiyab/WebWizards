const db = require('../db/database');

const getAllPosts = async (req, res) => {
    try {
        const result = await db.query("SELECT * FROM posts,users WHERE posts.user_id = users.user_id");
        const posts_users = result.rows.reverse();
        res.render("community-feed.ejs", { posts_users });
    } catch (error) {
        console.error('Error fetching posts:', error);
        res.status(500).send('Error fetching posts');
    }
};

const createPost = async (req, res) => {
    try {
        const { content, tags } = req.body;
        const user_id = req.session.user.user_id;
        const tagArray = tags.split(",");

        await db.query(
            "INSERT INTO posts (user_id, post, tags) VALUES ($1, $2, $3)",
            [user_id, content, tagArray]
        );
        res.redirect('/feed');
    } catch (error) {
        console.error('Error creating post:', error);
        res.status(500).send('Error creating post');
    }
};

const getDashboardPosts = async (req, res) => {
    try {
        const result = await db.query("SELECT user_id,name,post,profile_image_url FROM posts,users WHERE posts.user_id = users.user_id");
        const posts_users = result.rows.reverse();
        const user_id = req.session.user.user_id;
        const name = req.session.user.name;
        let img;
        console.log(posts_users)
        for (const post of posts_users) {
            if (post.user_id === user_id) {
                img = post.profile_image_url;
                break
            }
        }
        console.log(img)
        res.render("dashboard.ejs", { name: name, img: img, posts: posts_users });
    } catch (error) {
        console.error('Error fetching dashboard posts:', error);
        res.status(500).send('Error fetching dashboard posts');
    }
};

module.exports = {
    getAllPosts,
    createPost,
    getDashboardPosts
}; 