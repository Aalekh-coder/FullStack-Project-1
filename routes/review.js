const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync");
const {validateReview, isLoggedIn, isReviewAuther} = require('../middleware')
const reviewController = require("../controllers/reviews")



// post Reviews route
router.post(
    "/",
  validateReview,
    isLoggedIn,
  wrapAsync(reviewController.createReview)
  );
  
  // Delete Review route
  router.delete(
    "/:reviewId",
    isLoggedIn,
    isReviewAuther,
    wrapAsync(reviewController.destroyReview)
  );
  

module.exports = router;