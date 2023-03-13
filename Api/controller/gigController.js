import { addGigService } from "../service/gigService.js";

export const addGig = async (req, res) => {
  console.log(req.userId, req.isSeller);
  try {
    const result = await addGigService(req, res);
    if (result) return res.status(201).json({ message: "Gig added!" });
    return res.status(500).json({ message: "Error" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const deleteGig = async (req, res) => {};

export const getGig = async (req, res) => {};

export const getGigs = async (req, res) => {};
