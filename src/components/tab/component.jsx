import { Button } from "../button/component";

export const Tab = ({ title, onClick, disabled }) => {
  return (
    <Button onClick={onClick} disabled={disabled}>
      {title}
    </Button>
  );
};
