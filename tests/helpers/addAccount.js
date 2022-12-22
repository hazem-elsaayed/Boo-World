const { Accounts } = require("../../models/userAccounts");

exports.addAccount = async () => {
  return await Accounts.create({ name: 'hazem' })
};
