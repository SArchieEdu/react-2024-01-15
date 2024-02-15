import { useContext } from "react";
import { Size } from "../../constants/sizes";
import { ButtonViewVariant } from "./contants";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { ThemeContext } from "../../contexts/theme";
import { forwardRef } from "react";

const SizeClass = {
  [Size.s]: styles.s,
  [Size.m]: styles.m,
  [Size.l]: styles.l,
};

export const Button = forwardRef(function Button(
  {
    onClick,
    children,
    className,
    size = Size.m,
    viewVariant = ButtonViewVariant.primary,
    disabled,
  },
  ref
) {
  const theme = useContext(ThemeContext);
  console.log(theme);
  return (
    <button
      ref={ref}
      className={classNames(
        styles.root,
        className,
        SizeClass[size] || SizeClass[Size.m],
        styles[viewVariant]
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
});
