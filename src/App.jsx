import { Provider } from "react-redux";
import { store } from "./redux";
import { HeadphonePage } from "./pages/headphone";

export const App = () => {
  return (
    <Provider store={store}>
      <HeadphonePage />
    </Provider>
  );
};
