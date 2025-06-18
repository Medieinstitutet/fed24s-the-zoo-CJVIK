import { Link } from "react-router";
import { Animal } from "../models/InterfaceAnimal";
import { OverviewDisplayStatus } from "./OverviewDisplayStatus";
import { useState } from "react";

interface AnimalCardProps {
    animal: Animal;
};

export const AnimalCard = ({ animal }: AnimalCardProps) => {

    const [imageError, setImageError] = useState(false);

    const handleImageError = () => {
        setImageError(true);
    };

    const renderImageOrPlaceholder = () => {
        const fallbackMessage = `${animal.name} har ingen bild tillgänglig, Men är fortfarande här!`;

        if (imageError || !animal.imageUrl) {
            return (
                <div className="w-[480px] h-[400px] flex items-center justify-center bg-gray-100 text-center p-4 border-b border-gray-200">
                    <p className="text-gray-500">{fallbackMessage}</p>
                </div>
            );
        }
        return (
            <img
                src={animal.imageUrl}
                alt={animal.name}
                className="w-[480px] h-[400px] object-cover"
                onError={handleImageError}
            />
        );
    };


    return (

        <div className="animal-card w-[480px] bg-white rounded-lg shadow-md flex flex-col items-center overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <Link to={`/animals/${animal.id}`} className="w-full flex flex-col items-center">
                {renderImageOrPlaceholder()}
                <div className="p-6 w-full text-gray-900">
                    <OverviewDisplayStatus animal={animal} />
                    <h2 className="text-2xl font-semibold mt-4">{animal.name}</h2>
                    <p className="text-base text-center mt-2">{animal.shortDescription}</p>
                </div>
            </Link>
        </div>
    );
};