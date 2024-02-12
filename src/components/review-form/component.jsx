import { useCreateReviewMutation } from "../../redux/services/api";
import { Button } from "../button/component";
import styles from "./styles.module.scss";
import { useReviewForm } from "./use-review-form";

export const ReviewForm = ({ headphoneId }) => {
  const { form, setName, setRating, setText } = useReviewForm();

  const [createReview, { isLoading }] = useCreateReviewMutation();

  return (
    <div className={styles.root}>
      <div className={styles.field}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" value={form.name} onChange={setName} />
      </div>
      <div className={styles.field}>
        <label htmlFor="text">Text</label>
        <input id="text" type="text" value={form.text} onChange={setText} />
      </div>
      <div className={styles.field}>
        <label htmlFor="rating">Rating</label>
        <input
          id="rating"
          type="number"
          min="1"
          max="5"
          value={form.rating}
          onChange={setRating}
        />
      </div>
      <Button
        onClick={() =>
          createReview({
            headphoneId,
            newReview: {
              user: "hr83h29h9h9u12h9213",
              text: form.text,
              rating: form.rating,
            },
          })
        }
      >
        Submit
      </Button>
    </div>
  );
};
