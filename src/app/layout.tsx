import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css';
import ScrollToTop from './components/ScrollToTop';

export default function RootLayout({ children }: { children: React.ReactNode }) {

    return (
        <>
            <Header />
            <main className="main-container">{children}</main>
            <Footer />
            <ScrollToTop />
        </>
    );
}
