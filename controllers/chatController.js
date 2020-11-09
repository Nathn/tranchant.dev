const User = require('../models/User');
const Tweet = require('../models/Tweet');
const Reply = require('../models/Reply');
const promisify = require('es6-promisify');
const moment = require('moment');
const multer = require('multer');
const jimp = require('jimp');
const uuid = require('uuid');
const cloudinary = require('cloudinary').v2;
const nodemailer = require('nodemailer');
const clipboardy = require('clipboardy');


require('dotenv').config({
	path: 'variables.env'
});

// The default controller for this app
exports.chatPage = (req, res) => {
	res.render('chat');
}
