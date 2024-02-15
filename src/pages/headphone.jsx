import { Tabs } from "../components/tabs/component";

import { useGetHeadphonesQuery } from "../redux/services/api";
import { Outlet } from "react-router-dom";

export const HeadphonePage = () => {
  const { isLoading } = useGetHeadphonesQuery();

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div>
      <Tabs />
      <Outlet />
    </div>
  );
};
