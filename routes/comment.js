const { queryBuilder } = require('../helpers/queryBuilder');
const { Comments } = require('../models/comments');
const { Accounts } = require('../models/userAccounts');

exports.addComment = async (req, res, next) => {
  try {
    const { accountName } = req.params;
    let account = await Accounts.findOne({ name: accountName});
    let comment = new Comments({ ...req.body, account });
    await comment.save();
    return res.send('successfully added the comment');
  } catch (error) {
    next(error);
  }
};

exports.getComments = async (req, res, next) => {
  try {
    const { accountName } = req.params;
		let { filter, sort } = req.query
    let account = await Accounts.findOne({ name: accountName});
    let query = Comments.find({ account });
    if (filter || sort) query = queryBuilder(filter, sort, query)
		let comments = await query.exec()
		return res.send(comments)
  } catch (error) {
		next(error);
	}
};

exports.manageLikes = async (req, res, next) => {
	try {
		const { commentId } = req.params;
		const { likedBy } = req.body
		let comment = await Comments.findById(commentId)
		let likedByAccount = await Accounts.findOne({ name: likedBy})
		if(!comment || !likedByAccount) return res.status(404).send("can't find comment and/or profile")
		if(comment.liked_by.includes(likedByAccount._id)){
			comment.likes --
			comment.liked_by.splice(comment.liked_by.indexOf(likedByAccount._id), 1)
			await comment.save()
		} else {
			comment.likes ++
			comment.liked_by.push(likedByAccount)
			await comment.save()
		}
		res.send('successfully updated comment likes')
	} catch (error) {
		next(error);
	}
}