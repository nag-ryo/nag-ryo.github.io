import Link from 'next/link';
import styles from './typescript.module.css';

export default function TypescriptPage() {
    return (
        <div className="p-4">
            <nav className={styles.breadcrumb}>
                <Link href="/">HOME</Link> &gt; Typescript
            </nav>

            <h1 className="text-2xl font-bold mb-4">Typescript</h1>
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
                        <a
                            href="https://angular.jp/"
                            target="_blank"
                            className="hover:animate-pulse-fast">
                            Typescript公式ドキュメント(外部ページ)
                        </a>
                    </li>
                    <li>
                        <Link href="/typescript/post1">テストページ</Link>
                    </li>
                </ul>
            </section>
        </div>
    );
}
