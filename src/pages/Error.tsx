import { useRouteError, isRouteErrorResponse } from "react-router";



export const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    let title = "Oops! An unknown creature caused an error";
    let message = "Something went wrong.";


    if (isRouteErrorResponse(error)) {
        title = "Oops! The Router worms report an Error";
        message = `Error ${error.status}: ${error.statusText || "An unexpected route error occurred."}`;
    }

    else if (error instanceof Error) {
        title = "Oops! Ants of the Application report an error";
        message = error.message;
    }

    else if (typeof error === 'string') {
        title = "Oops! The string birds report an Issue Occurred";
        message = error;
    }

    return (
        <div id="error-page" className="flex flex-col items-center justify-center min-h-screen text-center p-8 text-white">
            <div className="bg-gray-800 p-10 rounded-lg shadow-2xl max-w-2xl w-full">
                <h1 className="text-4xl font-bold text-red-500 mb-4">{title}</h1>
                <p className="text-xl text-gray-300">{message}</p>
            </div>
        </div>
    );
};