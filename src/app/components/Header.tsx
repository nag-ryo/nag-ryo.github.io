'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className="bg-white shadow-md p-4 flex items-center">
            <Link
                href="/"
                className="mr-4 w-10 h-10 relative">
                <Image
                    src="/images/icon.png"
                    alt="Logo"
                    width={64}
                    height={64}
                />
            </Link>
            <Link href="/" className={styles.title}>
                Nag Note
            </Link>
        </header>
    );
}
