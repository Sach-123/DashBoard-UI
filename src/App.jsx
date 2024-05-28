import "./App.css";
import Layout from "./components/Layout";
import LeaderBoard from "./components/LeaderBoard";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Scanner from "./components/Scanner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <LeaderBoard />,
      },
      {
        path: "/Scanner",
        element: <Scanner />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router= {router}/>
    </>
  );
}

export default App;
