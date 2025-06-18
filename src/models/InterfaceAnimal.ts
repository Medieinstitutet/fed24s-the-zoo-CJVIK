export interface IAnimalData {
    id: number;
    name: string;
    latinName: string;
    yearOfBirth: number;
    shortDescription: string;
    longDescription: string;
    imageUrl: string;
    medicine: string;
    isFed: boolean;
    lastFed: Date; // ISO DATE string, DATE object in memory
};

export interface IAnimalFromStorage extends Omit<IAnimalData, 'lastFed'> {
    lastFed: string; // ISO DATE string, STRING in localStorage
};

export class Animal implements IAnimalData {
    id: number;
    name: string;
    latinName: string;
    yearOfBirth: number;
    shortDescription: string;
    longDescription: string;
    imageUrl: string;
    medicine: string;
    isFed: boolean;
    lastFed: Date;

    constructor(data: IAnimalFromStorage) {
        this.id = Number(data.id);
        this.name = String(data.name);
        this.latinName = String(data.latinName);
        this.yearOfBirth = Number(data.yearOfBirth);
        this.shortDescription = String(data.shortDescription);
        this.longDescription = String(data.longDescription);
        this.imageUrl = String(data.imageUrl);
        this.medicine = String(data.medicine);
        this.isFed = Boolean(data.isFed);

        const lastFedDate = new Date(data.lastFed);
        if (isNaN(lastFedDate.getTime())) {
            console.warn(`Invalid lastFed date string for animal id ${data.id}: "${data.lastFed}". Using current date as fallback.`);
            this.lastFed = new Date(); // Fallback om date parsing fails
        } else {
            this.lastFed = lastFedDate;
        }
    }
};