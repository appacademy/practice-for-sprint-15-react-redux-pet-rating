import ReviewForm from './ReviewForm';

import { useSelector } from 'react-redux';
import { getReview, editReview } from '../store/reviews';

const EditReviewForm = ({ reviewId, closeForm }) => {
  const review = useSelector(getReview(reviewId));

  return (
    <ReviewForm
      review={review}
      formType="Update Review"
      onSubmit={editReview}
      closeForm={closeForm}
    />
  );
}

export default EditReviewForm;
