import Link from 'next/link';
import styles from './react.module.css';

export default function ReactPage() {
    return (
        <div className="p-4">
            <nav className={styles.breadcrumb}>
                <Link href="/">HOME</Link> &gt; JS/TS
            </nav>

            <h1 className="text-2xl font-bold mb-4">JS/TS</h1>
            <section>
                <h2 className={styles.sectionTitle}>はじめに</h2>
                <ul>
                    <li>
                        <a
                            href="https://ja.reactjs.org/"
                            target="_blank"
                            className="hover:animate-pulse-fast">
                            React公式ドキュメント(外部ページ)
                        </a>
                    </li>
                    <li>
                        なぜReactを使うのか？
                    </li>
                </ul>
            </section>
        </div>
    );
}
