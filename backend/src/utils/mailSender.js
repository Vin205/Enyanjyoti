/** @format */

const nodemailer = require("nodemailer");
const Bottleneck = require("bottleneck");
require("dotenv").config();

// Environment variable validation
if (!process.env.MAIL_USER || !process.env.MAIL_PASS || !process.env.MAIL_HOST) {
	console.error("Missing environment variables for email configuration");
	process.exit(1); // Exit if configuration is missing
}

// Initialize transporter with connection pooling
const transporter = nodemailer.createTransport({
	host: process.env.MAIL_HOST,
	auth: {
		user: process.env.MAIL_USER,
		pass: process.env.MAIL_PASS,
	},
	pool: true, // Enable connection pooling
	maxConnections: 5, // Maximum number of connections
	maxMessages: 100, // Maximum number of emails per connection
});

// Initialize rate limiter to avoid overwhelming the mail server
const limiter = new Bottleneck({
	minTime: 500, // 500 ms delay between emails
	maxConcurrent: 1, // Limit to one email sending at a time
});

// Single email sending function
const sendSingleEmail = async (email, title, body) => {
	try {
		let info = await transporter.sendMail({
			from: `Study Notion - by smog-root`,
			to: email, // Single recipient
			subject: title,
			html: body,
		});
		console.log(`Email sent to ${email}:`, info.messageId);
	} catch (err) {
		console.error(`Error in sending mail to ${email}:`, err.message);
	}
};

// Bulk email sending function using BCC
const sendBulkEmails = limiter.wrap(async (emails, title, body) => {
	if (!Array.isArray(emails) || emails.length === 0) {
		console.error("Invalid email list");
		return;
	}

	try {
		// Send email to all recipients via BCC
		let info = await transporter.sendMail({
			from: `Study Notion - by Harsh Bhardwaj`,
			bcc: emails, // Bulk recipients via BCC
			subject: title,
			html: body,
		});
		console.log(`Bulk email sent to ${emails.length} recipients:`, info.messageId);
	} catch (err) {
		console.error(`Error in sending bulk email:`, err.message);
	}
});

module.exports = { sendSingleEmail, sendBulkEmails };
