import Pet from "../models/pets";
export const createPet = async (req, res) => {
  const { name, image, nameOwner, contactOwner, age, breed, type } = req.body;
  const newPet = new Pet({
    name,
    image,
    nameOwner,
    contactOwner,
    age,
    breed,
    type,
  });
  const PetSave = await newPet.save();
  res.status(201).json(PetSave);
};

export const getPets = async (req, res) => {
  const Pets = await Pet.find();
  res.json(Pets);
};

export const getPetById = async (req, res) => {
  const { petId } = req.params;
  console.log("ID", petId);
  const Petcut = await Pet.findById(petId);
  res.status(200).json(Petcut);
};

export const updatePetById = async (req, res) => {
  const { petId } = req.params;
  const updatedPet = await Pet.findByIdAndUpdate(petId, req.body); //devuelve como estaba antes
  res.status(200).json(updatedPet);
};

export const deletePetById = async (req, res) => {
  const { petId } = req.params;
  console.log("llegó", petId);
  const deletedPet = await Pet.findByIdAndDelete(petId);
  res.status(200).json(deletedPet);
};
