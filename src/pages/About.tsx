export const About = () => {
    return (
        <div className="text-center p-8 text-white">
            <h1 className="text-6xl font-bold leading-tight my-4">About The Project</h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-4">
                Det här är om-sidan i djurappen, ett skolprojekt om att mata djur, som använder React context och reducer. Det finns även små micro-animationer som ger ett lite livligare intryck. Användningen av Tailwind CSS kombineras med vanlig CSS för att skapa en modern och flexibel design. Dessutom finns en felhanteringssida som visar olika meddelanden som "String birds" (Strängar fåglar), "Error maskar" (felmaskar) och "Applications myror" (applikationer myror), vilket ger användaren tydlig feedback vid fel eller problem.
            </p>
        </div>
    );
};