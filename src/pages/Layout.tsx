import { Outlet } from 'react-router'
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';


export const Layout = () => {
    return (
        <div className="max-w-[1280px] mx-auto pt-8 px-8 text-center min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

