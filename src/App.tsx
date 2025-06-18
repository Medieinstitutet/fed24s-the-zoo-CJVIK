import "./App.css";
import { RouterProvider } from "react-router";
import { router } from "./Router";
import { AnimalProvider } from "./contexts/AnimalContext";


function App() {
  return <>
    <AnimalProvider>
      <RouterProvider router={router}></RouterProvider>
    </AnimalProvider>
  </>;
}

export default App;
