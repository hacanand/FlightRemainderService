const cron = require("node-cron");
const emailService = require("../services/email-service");
const setupJobs = () => {
    // 1. Send an email every 5 minutes
    cron.schedule("*/1 * * * *", async () => {
        const response = await emailService.fetchPendingEmails();
        console.log(response);
  }   )

}
module.exports = { setupJobs };