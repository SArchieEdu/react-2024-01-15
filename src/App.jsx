/* eslint-disable react/jsx-key */

import { Layout } from "./components/layout/component";
import { Provider } from "react-redux";
import { store } from "./redux";
import { Tabs } from "./components/tabs/component";
import { useState } from "react";
import { Headphone } from "./components/headphone/component";

export const App = () => {
  const [currentHeadphoneId, setCurrentHeadphoneId] = useState();

  return (
    <Provider store={store}>
      <Layout>
        <Tabs onSelect={setCurrentHeadphoneId} />
        {currentHeadphoneId && <Headphone headphoneId={currentHeadphoneId} />}
      </Layout>
    </Provider>
  );
};
