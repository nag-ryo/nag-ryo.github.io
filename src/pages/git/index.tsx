import Link from 'next/link';

export default function GitPage() {
    return (
        <div className="p-4">
            <nav>
                <Link href="/">HOME</Link> &gt; JS/TS
            </nav>

            <h1 className="text-2xl font-bold mb-4">JS/TS</h1>
            <section>
                <h2>はじめに</h2>
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
                </ul>
            </section>
        </div>
    );
}
