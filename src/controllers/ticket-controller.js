const TicketService = require("../services/email-service");
const create = async (req, res) => {
  try {
    const response = await TicketService.createNotificationTicket(req.body);
      res.status(201).json({
          success: true,
          data: response,
          err: {},
         message: "successfully registered an email remainder",
    });
  } catch (error) {
      res.status(500).json({
          success: false,
          data: {},
          err: error,
            message: "failed to register an email remainder",
    });
  }
};
module.exports = {
    create,
}