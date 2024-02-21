const cron = require("node-cron");
const emailService = require("../services/email-service");
const sender = require("../config/emailConfig");
const setupJobs = () => {
  // 1. Send an email every  minutes
  cron.schedule("*/10 * * * *", async () => {
    const response = await emailService.fetchPendingEmails();
    response.forEach((email) => {
      sender.sendMail(
        {
          to: email.recipientEmail,
          subject: email.subject,
          text: email.content,
        },
        async (err, data) => {
          if (err) {
            console.log(err);
          } else {
            await emailService.updateNotificationTicket(email.id, {
              status: "success",
            });
          }
        }
      );
    });
  });
};
module.exports = { setupJobs };
