import { useParams } from 'react-router';
import { useAnimalContext } from '../contexts/AnimalContext';
import { AnimalDisplayStatus } from './AnimalDisplayStatus';
import { useState } from 'react';
import "./ButtonAnim.css";

export const AnimalDetailsPage = () => {
    const { animalId } = useParams<{ animalId: string }>();
    const { state, dispatch } = useAnimalContext();
    const [imageError, setImageError] = useState(false);

    const animal = state.animals.find(a => a.id === Number(animalId));

    if (!animal) {
        return <div className="p-8 text-center text-red-500">Animal not found.</div>;
    };

    const handleImageError = () => {
        setImageError(true);
    };

    const getHoursSinceLastFed = (lastFedDate: Date): number => {
        const now = new Date().getTime();
        const lastFedTime = lastFedDate.getTime();
        return (now - lastFedTime) / (1000 * 60 * 60);
    };

    const hoursSinceLastFed = getHoursSinceLastFed(animal.lastFed);
    const canFeedNow = hoursSinceLastFed >= 4;

    const handleFeedAnimal = () => {
        if (canFeedNow) {
            dispatch({ type: "FEED_ANIMAL", payload: { id: animal.id } });
        }
    };


    const renderImageOrFallback = () => {
        const fallbackMessage = `${animal.name} image currently unavailable`;

        if (imageError || !animal.imageUrl) {
            return (
                <div className="w-[480px] h-[400px] flex items-center justify-center bg-gray-100 text-center p-4 rounded-lg">
                    <p className="text-gray-500">{fallbackMessage}</p>
                </div>
            );
        }

        return (
            <img
                src={animal.imageUrl}
                alt={animal.name}
                className="w-[480px] h-[400px] object-cover rounded-lg shadow-md"
                onError={handleImageError}
            />
        );
    };

    return (

        <div className="p-8 text-gray-900">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">


                <section className='animal-details-header flex flex-col items-center'>
                    <h2 className="text-4xl font-bold mb-4 text-white">{animal.name} <span className="text-2xl font-normal text-gray-500">({animal.latinName})</span></h2>
                    {renderImageOrFallback()}
                    <div className="w-full max-w-[480px] mt-4">
                        <AnimalDisplayStatus animal={animal} />
                    </div>
                </section>


                <section className='animal-details bg-white p-8 rounded-lg shadow-md h-fit'>
                    <h3 className="text-2xl font-semibold border-b pb-2 mb-4">Details</h3>
                    <p className="mb-4"><span className="font-semibold">Year of Birth:</span> {animal.yearOfBirth}</p>
                    <p className="mb-4"><span className="font-semibold">Description:</span> {animal.longDescription}</p>
                    <p><span className="font-semibold">Medicine:</span> {animal.medicine}</p>
                </section>
            </div>


            <section className='animal-actions mt-12 flex flex-col items-center'>
                <button
                    disabled={!canFeedNow}
                    onClick={handleFeedAnimal}
                    className="animated-action-button relative flex items-center justify-center 
                               w-36 h-36 rounded-full font-bold text-white text-center
                               transition-transform duration-200 ease-in-out
                               hover:not(:disabled):scale-105 active:not(:disabled):scale-95
                               disabled:cursor-not-allowed"
                >

                    {canFeedNow ? "Mata Djur" : "Djuret är mätt!"}
                </button>
            </section>
        </div>
    );
};