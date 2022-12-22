const { validate } = require('./middlewares/validation')
const { addProfileSchema, addAccountSchema, addCommentSchema, likesSchema } = require('./middlewares/validationSchemas')
const { addAccount } = require('./routes/accounts')
const { addComment, getComments, manageLikes } = require('./routes/comment')
const { addProfile, getProfile } = require('./routes/profile')

const router = require('express').Router()

router.post('/profile', validate(addProfileSchema), addProfile)
router.get('/profile', getProfile)
router.post('/account', validate(addAccountSchema), addAccount)
router.post('/:accountName/comment', validate(addCommentSchema), addComment)
router.get('/:accountName/comments', getComments)
router.patch('/:commentId/likes', validate(likesSchema), manageLikes)

exports.router = router