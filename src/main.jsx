/* eslint-disable react/no-children-prop */
import ReactDOM from "react-dom/client";
import { App } from "./App";

import "./styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

// root.render(
//   React.createElement("div", {
//     children: mocks.map((headphone) =>
//       React.createElement("div", { children: headphone.name })
//     ),
//   })
// );
