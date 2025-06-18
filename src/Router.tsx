import { createBrowserRouter } from "react-router";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Animals } from "./pages/Animals";
import { ErrorPage } from "./pages/Error";
import { AnimalDetailsPage } from "./components/AnimalDetails";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/about", element: <About /> },
            { path: "/animals", element: <Animals /> },
            { path: "/animals/:animalId", element: <AnimalDetailsPage /> },
        ],
    },

]);