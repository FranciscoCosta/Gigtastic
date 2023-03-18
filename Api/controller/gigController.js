import {
  addGigService,
  deleteGigService,
  getGigService,
  getGigsService,
} from "../service/gigService.js";

export const addGig = async (req, res) => {
  try {
    const result = await addGigService(req, res);
    console.log(result, "result");
    if (result) return res.status(201).json({ message: "Gig added!" });
    return res.status(500).json({ message: "Error" });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export const deleteGig = async (req, res) => {
  try {
    const result = await deleteGigService(req, res);
    return res
      .status(201)
      .json({ message: `The gig ${result.title} was deleted` });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getGig = async (req, res) => {
  try {
    const result = await getGigService(req, res);

    return res.status(201).json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getGigs = async (req, res) => {
  try {
    const result = await getGigsService(req, res);
    return res.status(201).json({ result });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
