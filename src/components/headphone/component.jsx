import { useState } from "react";
import { Button } from "../button/component";

import styles from "./styles.module.scss";
import { ReviewForm } from "../review-form/component";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectHeadphoneById } from "../../redux/entities/headphone/selectors";
import {
  decrement,
  increment,
  selectProductAmountById,
} from "../../redux/ui/cart";
import { useDispatch } from "react-redux";
import { Counter } from "../counter/component";

export const Headphone = ({ headphoneId }) => {
  const headphone = useSelector(selectHeadphoneById(headphoneId));
  const amount = useSelector((state) =>
    selectProductAmountById(state, headphoneId)
  );
  const dispatch = useDispatch();

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
    </div>
  );
};
