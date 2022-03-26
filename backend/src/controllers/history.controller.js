import History from "../models/history";
export const createHistory = async (req, res) => {
  console.log("Llegó", req.body);
  const {
    date,
    nameOwner,
    documentOwner,
    contactOwner,
    emailOwner,
    namePet,
    breed,
    sex,
    weight,
    dateDew,
    vaccines,
    diseases,
    treatements,
    respiration,
    cardicac,
    temperature,
    attitude,
    description,
    examns,
    description2,
    nameDoc,
  } = req.body;
  const newHistory = new History({
    date,
    nameOwner,
    documentOwner,
    contactOwner,
    emailOwner,
    namePet,
    breed,
    sex,
    weight,
    dateDew,
    vaccines,
    diseases,
    treatements,
    respiration,
    cardicac,
    temperature,
    attitude,
    description,
    examns,
    description2,
    nameDoc,
  });
  const historySave = await newHistory.save();
  res.status(201).json(historySave);
};

export const getHistorys = async (req, res) => {
  const historys = await History.find();
  res.json(historys);
};

export const getHistoryById = async (req, res) => {
  const { historyId } = req.params;
  const historycut = await History.findById(historyId);
  res.status(200).json(historycut);
};

export const updateHistoryById = async (req, res) => {
  const { historyId } = req.params;
  const updatedHistory = await History.findByIdAndUpdate(historyId, req.body); //devuelve como estaba antes
  res.status(200).json(updatedHistory);
};

export const deleteHistoryById = async (req, res) => {
  const { historyId } = req.params;
  const deletedHistory = await History.findByIdAndDelete(historyId);
  res.status(200).json(deletedHistory);
};
