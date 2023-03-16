import {
  addReviewService,
  deleteReviewService,
  getReviewsService,
} from "../service/reviewService.js";

export const addReview = async (req, res) => {
  try {
    const result = await addReviewService(req, res);
    if (result) return res.status(201).json({ message: "Gig review added" });
    return res.status(500).json({ message: "Error" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const deleteReview = async (req, res) => {
  try {
    const result = await deleteReviewService(req, res);
    if (result)
      return res.status(201).json({ message: "Deleted review added" });
    return res.status(500).json({ message: "Error" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getReviews = async (req, res) => {
  try {
    const result = await getReviewsService(req, res);
    if (result) return res.status(201).json({ result });
    return res.status(500).json({ message: "Error" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
