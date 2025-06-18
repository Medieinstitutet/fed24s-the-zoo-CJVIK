import { useAnimalContext } from '../contexts/AnimalContext';
import { AnimalCard } from '../components/AnimalCard';

export const Animals = () => {
    const { state, loading, error } = useAnimalContext();

    if (loading) {
        return <p>Loading animals...</p>;
    }

    if (error) {
        return <p>Error loading animals: {error.message}</p>;
    }

    if (!state.animals || state.animals.length === 0) {
        return <p>No animals found.</p>;
    }

    return (
        <div>
            <h1 className="text-3xl font-bold mb-8 text-center">Our Animals</h1>
            <div className="grid grid-cols-2 gap-8 justify-items-center">
                {state.animals.map(animal => (
                    <AnimalCard key={animal.id} animal={animal} />
                ))}
            </div>
        </div>
    );
};