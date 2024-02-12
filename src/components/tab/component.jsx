import { Button } from "../button/component";

export const Tab = ({ title, onClick }) => {
  return <Button onClick={onClick}>{title}</Button>;
};
