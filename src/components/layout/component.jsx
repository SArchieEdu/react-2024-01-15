import { Outlet } from "react-router-dom";
import { Footer } from "../footer/component";
import { Header } from "../header/component";

import styles from "./styles.module.scss";

export const Layout = () => {
  return (
    <div className={styles.root}>
      <Header />
      <div className={styles.content}>
        <Outlet />
      </div>
      <Footer />
      <div id="popoverContainer" className={styles.popoverContainer} />
    </div>
  );
};
