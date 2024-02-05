/* eslint-disable react/jsx-key */
import { useSelector } from "react-redux";
import { selectHeadphoneIds } from "../../redux/entities/headphone/selectors";
import { Tab } from "../tab/component";

export const Tabs = ({ onSelect }) => {
  const headphoneIds = useSelector(selectHeadphoneIds);

  return (
    <div>
      {headphoneIds.map((id) => (
        <Tab id={id} onClick={() => onSelect(id)} />
      ))}
    </div>
  );
};
