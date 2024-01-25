import classNames from "classnames";
import { Button } from "../button/component";

import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <header className={classNames(styles.root, styles.header)}>
      Header
      <Button
        className={styles.pageLink}
        onClick={() => console.log("Open menu page")}
      >
        <span>Menu</span>
      </Button>
      <Button
        className={styles.pageLink}
        onClick={() => console.log("Open signIn page")}
      >
        SignIn
      </Button>
    </header>
  );
};
