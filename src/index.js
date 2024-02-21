const express = require("express");
const { PORT, REMAINDER_BINDING_KEY } = require("./config/serverConfig");
const { sendBasicEmail, testingQueue, subscribeEvents } = require("./services/email-service");
const { setupJobs } = require("./utils/job");
const {
  createChannel,
  subscribeMessage,
  publishMessage,
} = require("./utils/messageQueue");
const cron = require("node-cron");
const bodyParser = require("body-parser");
const TicketController = require("./controllers/ticket-controller");
const setupAndStartServer = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.post("/api/v1/tickets", TicketController.create);
  const channel = await createChannel();
  subscribeMessage(channel,subscribeEvents, REMAINDER_BINDING_KEY);

  app.listen(PORT, () => {
    console.log(`Server is running on port  ${PORT}`);
    // sendBasicEmail(
    //   "support@admin.com",
    //   "noreplythismail009@gmail.com",
    //   "Welcome to our app",
    //   "We are happy to have you on board. Let us know if you need any help."
    // );
    // cron.schedule("*/1 * * * *", async () => {
    //   console.log("Running a task every 1 minutes");
    //setupJobs();
    // })
  });
};
setupAndStartServer();
