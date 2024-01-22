import classNames from "classnames";
import { Button } from "../button/component";

import styles from "./styles.module.scss";

export const Header = ({ isHighlighted }) => {
  return (
    <header
      className={classNames(styles.root, styles.header, {
        [styles.highlighted]: isHighlighted,
      })}
    >
      Header
      <Button onClick={() => console.log("Open menu page")}>
        <span>Menu</span>
      </Button>
      <Button onClick={() => console.log("Open signIn page")}>SignIn</Button>
    </header>
  );
};
