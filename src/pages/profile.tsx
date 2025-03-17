import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Head from 'next/head';

export default function Profile() {
    return (
        <>
            <Head>
                <title>Profile | Nag&apos;s Blog</title>
                <meta name="description" content="「Nag's Blog」の著者の情報です。" />
                <meta name="keywords" content="ブログ, プロフィール, プロファイル, 著者情報" />
            </Head>
            <div className="pt-8 pb-8">
                {/* 上部メッセージ */}
                <h2 className="text-xl font-bold mb-2">日々のインプットをアウトプットします。</h2>
                <p className="text-sm text-gray-600">ドキュメントのメモ・技術書レビュー・ナレッジを書き溜めます。</p>

                {/* SNSボタン的なもの */}
                <div className="mt-4 flex space-x-2">
                    <a
                        href="https://github.com/nag-ryo"
                        target="_blank"
                        rel="noopener noreferrer">
                        <button className="bg-gray-800 text-white px-3 py-2 rounded transition-colors duration-300 hover:bg-gray-500 flex items-center">
                            <FontAwesomeIcon
                                icon={faGithub}
                                className="mr-2"
                            />
                            GitHub
                        </button>
                    </a>
                </div>
            </div>
        </>
    );
};
