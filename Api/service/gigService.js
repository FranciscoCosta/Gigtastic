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

export const deleteGigService = async (req, res) => {
  const gig = await Gig.findById(req.params.id);
  if (gig.userId !== req.userId)
    return res.status(404).json({ message: "You can only delete your posts." });
  try {
    const result = await Gig.findByIdAndDelete(req.params.id);
    return result;
  } catch (error) {
    return res.status(404).json({ message: "Error" });
  }
};

export const getGigService = async (req, res) => {
  const gig = await Gig.findById(req.params.id);
  if (!gig) return res.status(404).json({ message: "Gig not found" });
  try {
    const result = await Gig.findByIdAndDelete(req.params.id);
    return result;
  } catch (error) {
    return res.status(404).json({ message: "Error" });
  }
};

export const getGigsService = async (req, res) => {};
