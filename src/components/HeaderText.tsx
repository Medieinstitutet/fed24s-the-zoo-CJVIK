
import bgImage from "../assets/blue-green-tropical-leaves-desktop-wallpaper.jpg";
import "./HeaderTextAnim.css";

export const LogoText = () => {
    return (
        <h1
            className="
                logo-text-animated
                text-[8rem]
                font-black
                leading-[1.05]
                tracking-[.3em]
                text-center
                bg-clip-text
                text-transparent
                drop-shadow-2xl
                py-10
                mb-10
                select-none
                uppercase
            "
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "auto% 100%",
                backgroundRepeat: "repeat",
                backgroundPosition: "0% 50%",
            }}
        >
            The Zoo
        </h1>
    );
};