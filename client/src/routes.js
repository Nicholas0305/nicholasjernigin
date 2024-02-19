import App from "./App";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [{ path: "/", element: <LoginPage /> }],
  },
];

export default routes;
