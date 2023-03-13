import Gig from "../models/gigModel.js";

export const addGigService = async (req, res) => {
  try {
    if (!req.isSeller)
      return res.status(401).json({ message: "Not authorized" });
    const result = new Gig({
      userId: req.userId,
      ...req.body,
    });
    const saveGig = await result.save();
    if (result) return saveGig;
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const deleteGigService = async (req, res) => {};

export const getGigService = async (req, res) => {};

export const getGigsService = async (req, res) => {};
