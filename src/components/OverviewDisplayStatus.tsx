import { Animal } from "../models/InterfaceAnimal";
import "./StatusTextAnim.css";


interface OverviewDisplayStatusProps {
    animal: Animal;
};


export const OverviewDisplayStatus = ({ animal }: OverviewDisplayStatusProps) => {
    const now = new Date().getTime();
    const lastFedTime = animal.lastFed.getTime();
    const hoursSinceLastFed = (now - lastFedTime) / (1000 * 60 * 60);

    let statusMessage = "";
    let statusClasses = "text-lg font-bold p-2 rounded-md text-center w-full my-2 bg-clip-text text-transparent";

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