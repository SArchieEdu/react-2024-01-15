import { useSelector } from "react-redux";
import { Button } from "../button/component";
import { selectHeadphoneById } from "../../redux/entities/headphone/selectors";

export const Tab = ({ id, onClick }) => {
  const headphone = useSelector(selectHeadphoneById(id));

  return <Button onClick={onClick}>{headphone.name}</Button>;
};
