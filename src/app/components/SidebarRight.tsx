'use client';
import Link from 'next/link';
import styles from './SidebarRight.module.css';
import { Items } from '@/storage/items';

export default function SidebarRight() {
    return (
        <nav className={styles.sidebar}>
            <h3 className={styles.title}>カテゴリー</h3>
            <ul>
                {Items.map((item, index) => (
                    <li key={index}>
                        <Link
                            href={item.link}
                            className={styles.link}>
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
