import styles from "./styles.module.scss";
import { useSelector } from "react-redux";
import {
  decrement,
  increment,
  selectProductAmountById,
} from "../../redux/ui/cart";
import { useDispatch } from "react-redux";
import { Counter } from "../counter/component";
import { useGetHeadphonesQuery } from "../../redux/services/api";
import { Reviews } from "../reviews/component";
import { useParams } from "react-router-dom";

export const Headphone = () => {
  const { headphoneId } = useParams();
  const { data: headphone, isLoading } = useGetHeadphonesQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result.data.find(({ id }) => headphoneId === id),
    }),
  });

  const amount = useSelector((state) =>
    selectProductAmountById(state, headphoneId)
  );
  const dispatch = useDispatch();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!headphone) {
    return null;
  }

  return (
    <div className={styles.root}>
      <div className={styles.info}>
        <h3 className={styles.title}>{headphone.name}</h3>
        <div className={styles.actions}>
          <Counter
            decrement={() => {
              dispatch(decrement(headphoneId));
            }}
            increment={() => {
              dispatch(increment(headphoneId));
            }}
            value={amount}
          />
        </div>
      </div>
      <Reviews productId={headphoneId} />
    </div>
  );
};
