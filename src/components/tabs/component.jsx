/* eslint-disable react/jsx-key */
import { Tab } from "../tab/component";
import { useGetHeadphonesQuery } from "../../redux/services/api";

export const Tabs = ({ onSelect }) => {
  const { data: headphones } = useGetHeadphonesQuery();

  return (
    <div>
      {headphones.map(({ id, name }) => (
        <Tab title={name} onClick={() => onSelect(id)} />
      ))}
    </div>
  );
};
