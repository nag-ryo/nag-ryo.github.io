import Link from 'next/link';
import styles from './react.module.css';

export default function ReactPage() {
    return (
        <div className="p-4">
            <nav className={styles.breadcrumb}>
                <Link href="/">HOME</Link> &gt; Tailwind CSS
            </nav>

            <h1 className="text-2xl font-bold mb-4">Tailwind CSS</h1>
            <section>
                <h2 className={styles.sectionTitle}>はじめに</h2>
                <ul>
                    <li>
                        <a
                            href="https://tailwindcss.com/docs"
                            target="_blank"
                            className="hover:animate-pulse-fast">
                            Tailwind CSS公式ドキュメント(外部ページ)
                        </a>
                    </li>
                    <li>
                        なぜTailwind CSSを使うのか？
                    </li>
                </ul>
            </section>
        </div>
    );
}
