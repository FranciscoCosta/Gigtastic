import Review from "../models/reviewModel.js";
import Gig from "../models/gigModel.js";

export const addReviewService = async (req, res) => {
  if (req.isSeller)
    return res.status(403).json({ message: "Sellers can't create a review!" });

  const newReview = new Review({
    userId: req.userId,
    gigId: req.body.gigId,
    desc: req.body.desc,
    stars: req.body.stars,
  });

  try {
    const review = await Review.findOne({
      gigId: req.body.gigId,
      userId: req.userId,
    });

    if (review) return res.status(403).send("You already reviewed this gig!");
    const savedReview = await newReview.save();

    await Gig.findByIdAndUpdate(req.body.gigId, {
      $inc: { totalStars: req.body.stars, stars: 1 },
    });
    return savedReview;
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const getReviewsService = async (req, res) => {
  console.log(req.params.gigId);
  try {
    const reviews = await Review.find({ gigId: req.params.gigId });
    return reviews;
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const deleteReviewService = async (req, res) => {
  try {
    const review = await Review.findById(req.params.reviewId);
    if (review.userId == req.userId) {
      await Review.findByIdAndDelete(req.params.reviewId);
      await Gig.findByIdAndUpdate(req.params.gigId, {
        $inc: { totalStars: -review.star, stars: -1 },
      });
      return "Review deleted successfully!";
    } else {
      return res.status(403).send("You can't delete this review!");
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

//addReviewService, deleteReviewService, getReviewsService
