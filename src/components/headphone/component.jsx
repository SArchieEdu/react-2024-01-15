import { useState } from "react";
import { Button } from "../button/component";

import styles from "./styles.module.scss";
import { ReviewForm } from "../review-form/component";
import { useEffect } from "react";

export const Headphone = ({ headphone }) => {
  const [count, setCount] = useState({ a: "" });

  useEffect(() => {
    const callback = () => {
      console.log("scroll");
      // setCount((prevCount) => {
      //   const newCount = prevCount + 1;
      //   console.log(newCount);
      //   return newCount;
      // });
    };

    console.log("Hello");
    document.addEventListener("scroll", callback);

    return () => {
      console.log("Bye");
      document.removeEventListener("scroll", callback);
    };
  }, [count]);

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
          {/* {count} */}
          <Button
            onClick={() => {
              // setCount(count + 1);
              setCount({ ...count });
            }}
          >
            +
          </Button>
        </div>
      </div>
      <ReviewForm />
    </div>
  );
};
