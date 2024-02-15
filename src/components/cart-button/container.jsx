import { useSelector } from "react-redux";
import { selectProductAmount } from "../../redux/ui/cart";
import { CartButton } from "./component";

export const CartButtonContainer = ({ className }) => {
  const amount = useSelector(selectProductAmount);

  return <CartButton amount={amount} className={className} />;
};
