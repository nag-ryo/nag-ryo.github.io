import Link from 'next/link';
import styles from './angular.module.css';

export default function AngularNewsPage() {
    return (
        <div className="p-4">
            <nav className={styles.breadcrumb}>
                <Link href="/">HOME</Link> &gt; <Link href="/angular">Angular</Link> &gt; News
            </nav>

            <h1 className="text-2xl font-bold mb-4">Angular News</h1>
            <h2 className={styles.sectionTitle}>最新ニュース</h2>
            <ul>
                <li>
                    <a
                        href="https://angular.jp/news"
                        target="_blank"
                        className="hover:animate-pulse-fast">
                        Angular公式ニュース
                    </a>
                </li>
                <li>Angularの最新リリース情報</li>
                <li>コミュニティイベント</li>
            </ul>
        </div>
    );
}
