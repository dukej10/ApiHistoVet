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

export const getClientById = async (req, res) => {
  const { clientId } = req.params;
  const clientcut = await Client.findById(clientId);
  res.status(200).json(clientcut);
};

export const updateClientById = async (req, res) => {
  const { clientId } = req.params;
  const updatedClient = await Client.findByIdAndUpdate(clientId, req.body); //devuelve como estaba antes
  res.status(200).json(updatedClient);
};

export const deleteClientById = async (req, res) => {
  const { clientId } = req.params;
  const deletedClient = await Client.findByIdAndDelete(clientId);
  res.status(200).json(deletedClient);
};
