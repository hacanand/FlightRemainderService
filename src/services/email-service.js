const sender = require("../config/emailConfig");
const TicketRepository = require("../repository/ticket-repository");
const repo = new TicketRepository();

const sendBasicEmail = async (mailFrom, mailTo, mailSubject, mailBody) => {
  try {
    const response = await sender.sendMail({
      from: mailFrom,
      to: mailTo,
      subject: mailSubject,
      text: mailBody,
    });
  } catch (error) {
    console.log(response);
    console.log(error);
  }
};
const fetchPendingEmails = async () => {
  try {
    const response = await repo.get({ status: "pending" });
    return response;
  } catch (error) {
    throw error;
  }
};
const createNotificationTicket = async (data) => {
  try {
    const response = await repo.create(data);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
const updateNotificationTicket = async (ticketId, data) => {
  try {
    const response = await repo.update(ticketId, data);
    return response;
  } catch (error) {
    throw error;
  }
};
const subscribeEvents = async (payload) => {
  let service = payload.service;
  let data = payload.data;
  switch (service) {
    case "SEND_EMAIL":
      await sendBasicEmail(
        data.mailFrom,
        data.mailTo,
        data.mailSubject,
        data.mailBody
      );
      break;
    case "CREATE_TICKET":
      await createNotificationTicket(data);
      break;
    default:
      console.log("No service found");
      break;
  }
};

module.exports = {
  sendBasicEmail,
  fetchPendingEmails,
  createNotificationTicket,
  updateNotificationTicket,
  subscribeEvents,
};
