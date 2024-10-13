/** @format */

const { contactUsEmail } = require("../mail/template");
const mailSender = require("../utils/mailSender");

exports.contactUsController = async (req, res) => {
	const { email, name, message} =
		req.body;
	console.log(req.body);
	try {
		const emailRes = await mailSender(
			email,
			"Your Data send successfully",
			contactUsEmail(email, name, message)
		);

		console.log("Email Res ", emailRes);
		return res.json({
			success: true,
			message: "Email send successfully",
		});
		// 
	} catch (error) {
		console.log("Error message:\n", error.message);
		return res.json({
			success: false,
			message: "Something went wrong...",
		});
	}
};
