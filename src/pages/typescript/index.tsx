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
                        <Link href="/typescript/filter-await" className="hover:animate-pulse-fast">なぜTypescriptを使うのか？</Link>
                    </li>
                </ul>
            </section>
            <section>
                <h2 className={styles.sectionTitle}>ナレッジ</h2>
                <ul>
                    <li>
                        <Link href="/typescript/filter-await" className="hover:animate-pulse-fast">filterの頭にawaitを置いても同期はしない</Link>
                    </li>
                    <li>
                        <Link href="/typescript/array-at" className="hover:animate-pulse-fast">TSの配列アクセスでundefined考慮</Link>
                    </li>
                    <li>
                        <Link href="/typescript/pbcopy" className="hover:animate-pulse-fast">Node.jsでpbcopy</Link>
                    </li>
                    <li>
                        <Link href="/typescript/invalid-date" className="hover:animate-pulse-fast">Invalid Dateを判定すること</Link>
                    </li>
                </ul>
            </section>
        </div>
    );
}
