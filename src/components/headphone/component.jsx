import { useState } from "react";
import { Button } from "../button/component";

import styles from "./styles.module.scss";
import { ReviewForm } from "../review-form/component";

export const Headphone = ({ headphone }) => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.root}>
      <div className={styles.info}>
        <h3>{headphone.name}</h3>
        <div>
          <Button
            onClick={() => {
              if (count > 0) {
                setCount(count - 1);
              }
            }}
          >
            -
          </Button>
          {count}
          <Button onClick={() => setCount(count + 1)}>+</Button>
        </div>
      </div>
      <ReviewForm />
    </div>
  );
};
