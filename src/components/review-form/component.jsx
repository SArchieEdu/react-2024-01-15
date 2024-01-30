import styles from "./styles.module.scss";
import { useReviewForm } from "./use-review-form";

export const ReviewForm = () => {
  const { form, setName, setRating, setText } = useReviewForm();

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
    </div>
  );
};
