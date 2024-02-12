/* eslint-disable react/jsx-key */
import { useGetReviewsQuery } from "../../redux/services/api";

export const Reviews = ({ productId }) => {
  const { data: reviews, isFetching } = useGetReviewsQuery(productId);

  if (isFetching) {
    return <div>Loading</div>;
  }
  return (
    <div>
      {reviews.map((review) => (
        <div>{review.text}</div>
      ))}
    </div>
  );
};
