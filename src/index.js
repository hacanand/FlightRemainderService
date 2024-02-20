const express = require("express");
const { PORT } = require("./config/serverConfig");
const { sendBasicEmail } = require("./services/email-service");
const cron = require("node-cron");
const bodyParser = require("body-parser");
const app = express();
const setupAndStartServer = async () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, () => {
    console.log(`Server is running on port  ${PORT}`);
    // sendBasicEmail(
    //   "support@admin.com",
    //   "noreplythismail009@gmail.com",
    //   "Welcome to our app",
    //   "We are happy to have you on board. Let us know if you need any help."
    // );
    cron.schedule("*/1 * * * *", async () => {
      console.log("Running a task every 1 minutes");
    })
  });
};
setupAndStartServer();
