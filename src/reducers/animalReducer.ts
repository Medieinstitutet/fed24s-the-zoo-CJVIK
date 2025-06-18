import type { IAnimalData } from "../models/InterfaceAnimal";
import { saveAnimalsToLocalStorage } from "../utility/localStorageUtils";
import { Animal } from "../models/InterfaceAnimal";

export interface AnimalState {
    animals: IAnimalData[];
}

export type AnimalAction =
    | { type: "SET_ANIMALS"; payload: IAnimalData[] }
    | { type: "FEED_ANIMAL"; payload: { id: number } };

export const animalReducer = (
    state: AnimalState,
    action: AnimalAction): AnimalState => {

    let newState: AnimalState;
    switch (action.type) {
        case "SET_ANIMALS":
            newState = { ...state, animals: action.payload };
            saveAnimalsToLocalStorage(newState.animals); // Save after SET
            return newState;
        case "FEED_ANIMAL":
            newState = {
                ...state,
                animals: state.animals.map((animal) => {
                    if (animal.id === action.payload.id) {
                        const updatedAnimalData = { // Reconstruct IAnimalFromStorage
                            ...animal, // Spread existing properties
                            isFed: true,
                            lastFed: new Date().toISOString(),
                        };
                        return new Animal(updatedAnimalData);
                    }
                    return animal;
                }),
            };
            saveAnimalsToLocalStorage(newState.animals); // Save after feeding
            return newState;
        default:
            return state;
    }
};