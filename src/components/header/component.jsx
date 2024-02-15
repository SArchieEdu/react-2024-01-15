import classNames from "classnames";

import styles from "./styles.module.scss";
import { CartButtonContainer } from "../cart-button/container";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className={classNames(styles.root)}>
      <Link to="/" className={classNames(styles.logo, styles.link)}>
        Shop
      </Link>
      <Link to="/contacts" className={classNames(styles.link, styles.menuLink)}>
        Contacts
      </Link>
      <Link to="/about-us" className={classNames(styles.link, styles.menuLink)}>
        AboutUs
      </Link>
      <Link
        to="/headphones"
        className={classNames(styles.link, styles.menuLink)}
      >
        Headphones
      </Link>

      <CartButtonContainer className={styles.cart} />
    </header>
  );
};
