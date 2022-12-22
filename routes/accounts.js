const { Accounts } = require("../models/userAccounts");

exports.addAccount = async (req, res, next) => {
  try {
    let account = new Accounts(req.body);
    account = await account.save();
    return res.send({
      message: 'successfully created a new account',
      data: account,
    });
  } catch (error) {
    next(error);
  }
}