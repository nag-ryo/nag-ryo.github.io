import Link from 'next/link';

export default function AngularNewsPage() {
    return (
        <div className="p-4">
            <nav>
                <Link href="/">HOME</Link> &gt; <Link href="/angular">Angular</Link> &gt; News
            </nav>

            <h1 className="text-2xl font-bold mb-4">Angular News</h1>
            <h2>最新ニュース</h2>
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
