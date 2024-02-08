/* eslint-disable react/jsx-key */
import { Headphone } from "../headphone/component";

export const Cart = ({ productIds }) => {
  return (
    <div>
      {productIds?.length
        ? productIds.map((productId) => <Headphone headphoneId={productId} />)
        : "Empty"}
    </div>
  );
};
