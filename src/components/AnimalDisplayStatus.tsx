import { Animal } from "../models/InterfaceAnimal";
import "./StatusTextAnim.css";

interface AnimalDisplayStatusProps {
    animal: Animal;
};

export const AnimalDisplayStatus = ({ animal }: AnimalDisplayStatusProps) => {
    const now = new Date().getTime();
    const lastFedTime = animal.lastFed.getTime();
    const hoursSinceLastFed = (now - lastFedTime) / (1000 * 60 * 60);

    let statusMessage = "";
    let statusClasses = "text-4xl font-bold p-3 rounded-lg text-center my-4 bg-clip-text text-transparent";


    if (hoursSinceLastFed >= 4) {
        statusMessage = "Djuret behöver matas nu!";
        statusClasses += " status-animated-urgent";
    } else if (hoursSinceLastFed >= 3) {
        statusMessage = "Djuret behöver snart matas.";
        statusClasses += " status-animated-warning";
    } else if (hoursSinceLastFed >= 0) {
        statusMessage = `Matades för ${hoursSinceLastFed.toFixed(1)} timmar sedan.`;
        statusClasses += " status-animated-ok";
    }

    return (
        <div>
            <p className={statusClasses}>{statusMessage}</p>
        </div>
    );
};

