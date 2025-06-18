export const Footer = () => {
    return (
        <footer className="text-gray-400 py-8 mt-16">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <p className="text-lg">
                    The Digital Zoo - A React Project by CJVIK
                </p>
                <p className="text-sm mt-2">
                    &copy; {new Date().getFullYear()} No Rights Reserved. Built with React, TypeScript, and Tailwind CSS.
                </p>
            </div>
        </footer>
    );
};