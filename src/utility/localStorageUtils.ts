import type { IAnimalData } from "../models/InterfaceAnimal";
import type { IAnimalFromStorage } from "../models/InterfaceAnimal";
import { Animal } from "../models/InterfaceAnimal";

const ANIMAL_STORAGE_KEY = "zooAnimalData";


export const loadAnimalsFromLocalStorage = (): Animal[] | null => {
    const storedData = localStorage.getItem(ANIMAL_STORAGE_KEY);
    if (storedData) {
        try {
            const animalsFromStorage = JSON.parse(storedData) as IAnimalFromStorage[];
            return animalsFromStorage.map((rawAnimal: IAnimalFromStorage) => new Animal(rawAnimal));

        } catch (error) {
            console.error("Error parsing or processing animal data from localStorage:", error);
            localStorage.removeItem(ANIMAL_STORAGE_KEY);
            return null;
        }
    }
    return null;
};

export const saveAnimalsToLocalStorage = (animals: IAnimalData[]): void => {
    try {
        const animalsToStore = animals.map(animal => ({
            ...animal,
            lastFed: animal.lastFed instanceof Date ? animal.lastFed.toISOString() : new Date().toISOString(),
        }));

        localStorage.setItem(ANIMAL_STORAGE_KEY, JSON.stringify(animalsToStore));

    } catch (error) {
        console.error("Error saving animal data to localStorage:", error);
    }
};