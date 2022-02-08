// implement your posts router here
const {Router} = require('express');
const Post = require('./posts-model');

const router = Router()

router.get('/', (req, res) => {
Post.find(req.query)
.then(posts => {
    res.status(200).json(posts);
})
.catch(error => {
    console.log(error);
    res.status(500).json({
        message: 'Error retrieving the adopters',
    });
});
})






module.exports = router;