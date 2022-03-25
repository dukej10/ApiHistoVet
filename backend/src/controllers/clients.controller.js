import Client from "../models/clients";
export const createClient = async (req, res) => {
  console.log("Llegó", req.body);
  const { name, image, document, contact, email, namePet } = req.body;
  const newClient = new Client({
    name,
    image,
    document,
    contact,
    email,
    namePet,
  });
  const clientSave = await newClient.save();
  res.status(201).json(clientSave);
};

export const getClients = async (req, res) => {
  const clients = await Client.find();
  res.json(clients);
};

export const getClientById = (req, res) => {};

export const updateClientById = (req, res) => {};

export const deleteClientById = (req, res) => {};
