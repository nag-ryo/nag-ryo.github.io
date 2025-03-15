import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {

    return (
        <>
            <Header />
            <main className="pr-16 pl-16 bg-gray-100 bg-white rounded-lg shadow-md mx-8 lg:mx-auto max-w-screen-lg">{children}</main>
            <Footer />
        </>
    );
}
