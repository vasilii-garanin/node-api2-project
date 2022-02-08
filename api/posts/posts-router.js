// implement your posts router here
const { Router } = require('express');
const Post = require('./posts-model');

const router = Router();

router.get('/', (req, res) =>
{
    Post.find(req.query)
        .then(posts =>
        {
            res.status(200).json(posts);
        })
        .catch(error =>
        {
            res.status(500).json({
                message: 'The posts information could not be retrieved',
                error: error.message,
                stack: error.stack
            });
        });
});






module.exports = router;