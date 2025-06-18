import { createContext, useReducer, useEffect, type ReactNode, useContext, type Dispatch } from "react";
import { animalReducer, type AnimalState, type AnimalAction } from "../reducers/animalReducer";
import { Animal, type IAnimalFromStorage } from "../models/InterfaceAnimal";
import useAPICall from "../hooks/ApiCallHook";
import { loadAnimalsFromLocalStorage } from "../utility/localStorageUtils";

interface AnimalContextProps {
    state: AnimalState; // innehåller alla djur
    dispatch: Dispatch<AnimalAction>;
    loading: boolean; // API loading state
    error: Error | null;   // API error state
}

const getInitialState = (): AnimalState => {
    const animalsFromStorage = loadAnimalsFromLocalStorage(); // Returns Animal[] or null
    if (animalsFromStorage && animalsFromStorage.length > 0) {
        return { animals: animalsFromStorage };
    }
    return { animals: [] };
};

export const AnimalContext = createContext<AnimalContextProps | undefined>(undefined);

export const AnimalProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(animalReducer, getInitialState());

    const needsApiCall = state.animals.length === 0;
    const apiUrl = needsApiCall ? "https://animals.azurewebsites.net/api/animals" : null;

    // useAPICall kommer att anropa API:et om apiUrl inte är null
    const { data: fetchedRawAnimals, error: apiError, loading: apiLoading } = useAPICall<IAnimalFromStorage[]>(
        apiUrl
    );

    useEffect(() => {
        if (state.animals.length === 0 && fetchedRawAnimals && !apiLoading && !apiError) {
            // Convert raw fetched data to Animal instances before dispatching
            const animals = fetchedRawAnimals.map(rawAnimal => new Animal(rawAnimal));
            dispatch({ type: "SET_ANIMALS", payload: animals });
        }
    }, [fetchedRawAnimals, apiLoading, apiError, dispatch, state.animals.length]);

    return (
        <AnimalContext.Provider value={{ state, dispatch, loading: apiLoading, error: apiError }}>
            {children}
        </AnimalContext.Provider>
    );
};

export const useAnimalContext = () => {
    const context = useContext(AnimalContext);
    if (context === undefined) {
        throw new Error("useAnimalContext must be inside of: AnimalProvider");
    }
    return context;
};