import { useRouter } from 'next/router';
import Header from './components/Header';
import Footer from './components/Footer';
import SidebarRight from './components/SidebarRight';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const isHomePage = router.pathname === '/';

    return (
        <>
            <Header />
            <div className="flex">
                {!isHomePage && <SidebarRight />}
                <main className="flex-grow p-8">{children}</main>
                {!isHomePage && <SidebarRight />}
            </div>
            <Footer />
        </>
    );
}
