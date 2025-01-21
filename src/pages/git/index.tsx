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
                    <Link
                        href="/git/why"
                        className="hover:animate-pulse-fast">
                        なぜGitを使うのか？
                    </Link>
                    <Link
                        href="/git/index-lock"
                        className="hover:animate-pulse-fast">
                        index.lockとは？
                    </Link>
                </ul>
            </section>
        </div>
    );
}
