import Link from 'next/link';

export default function AngularPage() {
    return (
        <div className="p-4">
            <nav>
                <Link href="/">HOME</Link> &gt; Angular
            </nav>

            <h1 className="text-2xl font-bold mb-4">Angular</h1>
            <section>
                <h2>はじめに</h2>
                <ul>
                    <li>
                        <a
                            href="https://angular.jp/"
                            target="_blank"
                            className="hover:animate-pulse-fast">
                            公式ドキュメント(外部ページ)
                        </a>
                    </li>
                    <li>
                        <Link
                            href="/angular/news"
                            className="hover:animate-pulse-fast">
                            更新情報(不定期)
                        </Link>
                    </li>
                </ul>
            </section>
        </div>
    );
}
