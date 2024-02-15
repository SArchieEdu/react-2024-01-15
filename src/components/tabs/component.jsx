/* eslint-disable react/jsx-key */
import { Tab } from "../tab/component";
import { useGetHeadphonesQuery } from "../../redux/services/api";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const Tabs = () => {
  const { data: headphones } = useGetHeadphonesQuery();
  // const navigate = useNavigate();

  return (
    <div>
      {headphones.map(({ id, name }) => (
        <NavLink to={`/headphones/${id}`}>
          {({ isActive }) => (
            <Tab
              title={name}
              isActive={isActive}
              // onClick={() => navigate(`/headphones/${id}`, { replace: true })}
            />
          )}
        </NavLink>
      ))}
    </div>
  );
};
