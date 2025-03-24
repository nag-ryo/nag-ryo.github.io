import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import Head from 'next/head';

export default function Profile() {
    return (
        <>
            <Head>
                <title>Profile | Nag&apos;s Blog</title>
                <meta name="description" content="「Nag's Blog」の著者のプロフィールページです。" />
                <meta name="keywords" content="ブログ, プロフィール, プロファイル, 著者情報, 技術" />
            </Head>
            <div className="pt-8 pb-8 max-w-screen-md mx-auto">
                {/* 上部メッセージ */}
                <h1 className="text-3xl font-bold mb-4">プロフィール</h1>
                <p className="text-lg text-gray-700 mb-6">
                    日々のインプットをアウトプットします。技術記事やレビュー、ナレッジを共有していきます。
                </p>

                {/* 著者情報 */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">著者について</h2>
                    <p className="text-gray-600">
                        ソフトウェアエンジニアとして、フロントエンドからバックエンドまで幅広く開発を行っています。
                        特にAngular, React, Next.jsを用いたモダンなWebアプリケーションの構築に興味があります。
                    </p>
                </section>

                {/* スキルセクション */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">スキルセット</h2>
                    <ul className="list-disc pl-6 text-gray-600">
                        <li>言語: Typescript, PHP</li>
                        <li>フロントエンド: Angular, React, Next.js, TypeScript</li>
                        <li>バックエンド: Node.js, Express</li>
                        <li>データベース: MySQL, DynamoDB(NoSQL)</li>
                        <li>その他: Git, AWS</li>
                    </ul>
                </section>

                {/* SNSリンク */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">SNS</h2>
                    <div className="flex space-x-4">
                        <a
                            href="https://github.com/nag-ryo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-800 text-white px-4 py-2 rounded transition-colors duration-300 hover:bg-gray-600 flex items-center"
                        >
                            <FontAwesomeIcon icon={faGithub} className="mr-2" />
                            GitHub
                        </a>
                        <a
                            href="https://x.com/N4Gry0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-800 text-white px-4 py-2 rounded transition-colors duration-300 hover:bg-gray-600 flex items-center"
                        >
                            <FontAwesomeIcon icon={faXTwitter} className="mr-2" />
                        </a>
                    </div>
                </section>

                {/* フッター */}
                <footer className="text-center text-gray-500 text-sm mt-8">
                    © 2025 Nag&apos;s Blog. All rights reserved.
                </footer>
            </div>
        </>
    );
};
