'use strict';
const { Profiles } = require('../models/profiles');

exports.addProfile = async (req, res, next) => {
  try {
    let profile = new Profiles(req.body);
    profile = await profile.save();
    return res.send({
      message: 'successfully created a new profile ',
      data: profile,
    });
  } catch (error) {
    next(error);
  }
};

exports.getProfile = async (req, res, next) => {
  try {
    let profile = await Profiles.findOne({ name: req.query.name});
    if (!profile) return res.status(404).send("can't find requested profile");
    return res.render('profile_template', { profile });
  } catch (error) {
    next(error);
  }
};
