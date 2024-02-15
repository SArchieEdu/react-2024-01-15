import { useState } from "react";
import { Button } from "../button/component";
import { createPortal } from "react-dom";
import { CartContainer } from "../cart/container";

import styles from "./styles.module.scss";
import { useRef } from "react";

export const CartButton = ({ amount, className }) => {
  const [coordinates, setCoordinates] = useState(null);
  const buttonRef = useRef();

  const toggleCartModal = () => {
    if (coordinates) {
      setCoordinates(null);
      return;
    }

    const { bottom, right } = buttonRef.current.getBoundingClientRect();

    setCoordinates({ right: -right, top: bottom });
  };

  return (
    <>
      <Button ref={buttonRef} onClick={toggleCartModal} className={className}>
        {amount}
      </Button>
      {coordinates &&
        createPortal(
          <div style={coordinates} className={styles.modal}>
            <CartContainer />
          </div>,
          document.getElementById("popoverContainer")
        )}
    </>
  );
};
