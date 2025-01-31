import Link from 'next/link';
import styles from './php.module.css';

export default function PhpPage() {
    return (
        <div className="p-4">
            <nav className={styles.breadcrumb}>
                <Link href="/">HOME</Link> &gt; PHP
            </nav>

            <h1 className="text-2xl font-bold mb-4">PHP</h1>
            <section>
                <h2 className={styles.sectionTitle}>はじめに</h2>
                <ul>
                    <li>
                        <a
                            href="https://angular.jp/"
                            target="_blank"
                            className="hover:animate-pulse-fast">
                            Javascript公式ドキュメント(外部ページ)
                        </a>
                    </li>
                    <li>
                        なぜPHPを使うのか？
                    </li>
                </ul>
            </section>
        </div>
    );
}