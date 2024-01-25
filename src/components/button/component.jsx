import { Size } from "../../constants/sizes";
import { ButtonViewVariant } from "./contants";
import styles from "./styles.module.scss";
import classNames from "classnames";

const SizeClass = {
  [Size.s]: styles.s,
  [Size.m]: styles.m,
  [Size.l]: styles.l,
};

export const Button = ({
  onClick,
  children,
  className,
  size = Size.m,
  viewVariant = ButtonViewVariant.primary,
}) => {
  return (
    <button
      className={classNames(
        styles.root,
        className,
        SizeClass[size] || SizeClass[Size.m],
        styles[viewVariant]
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
