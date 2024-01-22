/* eslint-disable react/jsx-key */
import { Headphone } from "./components/headphone/component";
import { Layout } from "./components/layout/component";
import { mocks } from "./constants/mock";

export const App = () => {
  return (
    <Layout>
      {mocks.map((headphone) => (
        <Headphone headphone={headphone} />
      ))}
    </Layout>
  );
};
