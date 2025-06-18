import { NavLink } from "react-router";
import { LogoText } from "./HeaderText";
import "./NavAnim.css";




const navItems = [
    {
        to: "/",
        title: "Home",
        icon: "home",
        colors: { i: "#f8f0cb", j: "#083557" }
    },
    {
        to: "/animals",
        title: "Animals",
        icon: "pets",
        colors: { i: "#a6edd6", j: "#119ea9" }
    },
    {
        to: "/about",
        title: "About",
        icon: "info",
        colors: { i: "#49117e", j: "#087692" }
    },
];

export const Header = () => {
    return (
        <header>
            <div className="Logo-text-container">
                <LogoText />
            </div>
            <nav>
                <ul className="flex justify-center items-center gap-6">
                    {navItems.map((item) => (
                        <li key={item.to}>
                            <NavLink
                                to={item.to}
                                style={{ '--i': item.colors.i, '--j': item.colors.j } as React.CSSProperties}
                                className={({ isActive }) =>
                                    `nav-item-animated group relative flex justify-center items-center 
                                    w-16 h-16 rounded-full shadow-lg cursor-pointer 
                                    transition-all duration-500
                                    ${isActive ? 'is-active w-44 shadow-none' : 'hover:w-44 hover:shadow-none'}`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        <span className={`
                                            material-symbols-outlined text-3xl text-gray-400 transition-all duration-500
                                            ${isActive ? 'scale-0 text-white' : 'group-hover:scale-0 group-hover:text-white delay-0 group-hover:delay-[0s]'}`}
                                        >
                                            {item.icon}
                                        </span>
                                        <span className={`
                                            absolute text-white uppercase tracking-wider transition-all duration-500
                                            ${isActive ? 'scale-100 delay-200' : 'scale-0 group-hover:scale-100 group-hover:delay-200'}`}
                                        >
                                            {item.title}
                                        </span>
                                    </>
                                )}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};