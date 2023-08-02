import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/:id",
    element: <Detail></Detail>,
  }
])

function App() {

  return (
    <RouterProvider router={routes} />
  )
}

export default App;