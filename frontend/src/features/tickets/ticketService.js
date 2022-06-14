import axios from "axios";

const API_URL = "/api/tickets/";

//create new tickets
const createTicket = async (ticketData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, ticketData, config);

  return response.data;
};

const ticketServise = {
  createTicket,
};

export default ticketServise;
